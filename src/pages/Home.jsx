import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [showPopup, setShowPopup] = useState(true);
  const [loading, setLoading] = useState(() => !localStorage.getItem('hasLoadedBefore'));

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasLoadedBefore', 'true'); // Store the flag
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);
  

  const handleKeyDown = (event) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      if (!isPlayingMusic) {
        audioRef.current.play();
        setIsPlayingMusic(true);
      }
      setShowPopup(false);
    }
  };

  const handleMouseDown = () => {
    if (!isPlayingMusic) {
      audioRef.current.play();
      setIsPlayingMusic(true);
    }
    setShowPopup(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isPlayingMusic]);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  useEffect(() => {
    const handleKeyDown = () => setShowPopup(false);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.75, 0.75, 0.75];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* Show loading screen while loading */}
      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-black">
          <div className="text-white text-xl animate-pulse">Loading...</div>
        </div>
      ) : (
        <>
          {showPopup && (
            <div className="absolute bottom-14 left-0 right-0 z-20 flex justify-center items-center">
              <div className="bg-black text-white px-6 py-3 rounded-lg shadow-lg">
                Use arrow keys to move the plane!
              </div>
            </div>
          )}

          <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
            {currentStage && <HomeInfo currentStage={currentStage} />}
          </div>

          <Canvas
            className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{ near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
              <Bird />
              <Sky isRotating={isRotating} />
              <Island
                scale={islandScale}
                position={islandPosition}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
              />
              <Plane isRotating={isRotating} scale={planeScale} position={planePosition} rotation={[6, 124.5, 5.5]} />
            </Suspense>
          </Canvas>

          <div className="absolute bottom-2 left-2">
            <img
              src={!isPlayingMusic ? soundoff : soundon}
              alt="sound"
              className="w-10 h-10 object-contain cursor-pointer"
              onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Home;

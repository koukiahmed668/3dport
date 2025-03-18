import { Html, useProgress } from "@react-three/drei";

// Canvas loader component - only use inside Canvas
const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 border-b-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-white mt-4">{Math.floor(progress)}% Loaded</p>
      </div>
    </Html>
  );
};

// Regular loader for use outside of Canvas
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-20 h-20 border-b-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      <p className="text-white mt-4">Loading...</p>
    </div>
  );
};

export { CanvasLoader };
export default Loader;

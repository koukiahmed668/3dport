import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <h1 className="blue-gradient_text">AK</h1>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium"> 
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
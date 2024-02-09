import { NavLink } from "react-router-dom"

//The top-most router. It contains the base part(full of 3d models), the about section which talks about my past work exps&skills and /projects part
const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-17 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">Home</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
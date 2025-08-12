import { NavLink } from "react-router-dom";

//The top-most router. It contains the base part(full of 3d models), the about section which talks about my past work exps&skills and /projects part
const Navbar = () => {
  return (
    <header className="header min-w-[77vw]">
      <NavLink
        to="/"
        className="flex items-center justify-center w-16 h-10 rounded-lg bg-white shadow-md font-bold transition hover:shadow-lg"
      >
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
          Home
        </p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/introduction"
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
        >
          Introduction
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav className="flex flex-row flex-wrap justify-center items-center w-full p-2 space-x-3">
        <Link to="/" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-2 hover:bg-teal-900">About Me</Link>
        <Link to="/projects" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-2 hover:bg-teal-900">Projetcs</Link>
        <Link to="/resume" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-2 hover:bg-teal-900">Resume</Link>
        <Link to="/contact" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-2 hover:bg-teal-900">Contact</Link>
      </nav>
    )
  }

export default Nav;
import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav className=" w-full p-2 space-x-2">
        <Link to="/" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">About Me</Link>
        <Link to="/projects" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Projetcs</Link>
        <Link to="/resume" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Resume</Link>
        <Link to="/contact" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Contact</Link>
      </nav>
    )
  }

export default Nav;
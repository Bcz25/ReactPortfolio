function Nav() {
    return (
      <nav className=" w-full p-2 space-x-2">
        <a href="/" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">About Me</a>
        <a href="/projects" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Projetcs</a>
        <a href="/resume" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Resume</a>
        <a href="/contact" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Contact</a>
      </nav>
    )
  }

export default Nav;
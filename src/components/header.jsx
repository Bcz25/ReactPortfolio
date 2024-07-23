import Nav from "./nav";

function Header() {
    return (
      <header className="flex flex-col justify-between items-start py-5 px-5 relative isolate overflow-auto bg-gray-700 sm:py-8 bg-[url('./src/assets/portfolio-background2.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-gray-900 before:opacity-30 before:z-0">
        <div className="self-end relative z-10 ">
          <Nav />
        </div>
        <div className="text- relative z-10 bg-gray-900 p-3 mt-5 rounded shadow-xl">
          <h2 className="text-4xl font-bold tracking-tight text-teal-700 sm:text-5xl">Brett Czerwinski</h2>
          <p className="text-m font-bold text-teal-700">Full Stack Software Engineer</p>
        </div>
      </header>
    );
  }
  export default Header;
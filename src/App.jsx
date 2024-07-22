import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons' 
import {faGlobe} from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    <div className="flex flex-col min-h-screen bg-gray-700">
    <Header />
    <div className="flex-grow">
    <main className="py-8 px-8">
    <h1 className="text-4xl pb-5 font-bold text-white">About Me</h1>
    <ProjectContainer />
    </main>
    </div>
    <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="flex flex-col justify-between items-center py-4 px-8 relative isolate overflow-auto bg-gray-900 py-24 sm:py-32 bg-[url('./src/assets/portfolio-background2.jpeg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gray-900 before:opacity-50 before:z-0">
      <div className="self-end relative z-10 ">
        <Nav />
      </div>
      <div className="text- relative z-10 ">
        <h2 className="text-4xl font-bold tracking-tight text-gray-400 sm:text-5xl">Brett Czerwinski</h2>
        <img src="./src/assets/me.jpeg" alt="Brett Czerwinski" className="w-50 h-40 rounded-full object-cover mx-auto mt-4 " />
      </div>
    </header>
  );
}


function Nav() {
  return (
    <nav className=" w-full p-4 space-x-5">
    <a href="/about" className="text-gray-400 hover:text-blue-400">About Me</a>
    <a href="/projects" className="text-gray-400 hover:text-blue-400">Projetcs</a>
    <a href="/contact" className="text-gray-400 hover:text-blue-400">Contact Me</a>
    <a href="/resume" className="text-gray-400 hover:text-blue-400">Resume</a>
</nav>
  )
}

function Footer() {
  return (
<footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-10">
            <a href="https://github.com/your-profile" target="_blank" className="text-gray-400 hover:text-blue-400"><FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="text-gray-400 hover:text-blue-400"><FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="text-gray-400 hover:text-blue-400"><FontAwesomeIcon icon={faStackOverflow} size="2x"/>
            </a>
        </div>
    </div>
</footer>
)
}

const ProjectContainer = () => {
  return (
    <div className="relative group w-64 h-64 bg-cover bg-center rounded-lg bg-[url('./src/assets/portfolio-background2.jpeg')]">
      <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-50 flex justify-between items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <a href="https://github.com/your-profile" target="_blank" className="text-gray-800 hover:text-blue-400">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <span className="text-gray-800 text-xl">Project Name</span>
        <a href="https://your-live-project-link" target="_blank" className="text-gray-800 hover:text-blue-400">
          <FontAwesomeIcon icon={faGlobe} size="2x" />
        </a>
      </div>
    </div>
  );
}
export default App

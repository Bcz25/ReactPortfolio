import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-center items-center">
          <div className="space-x-10">
            <a href="https://github.com/bcz25" target="_blank" className="text-gray-400 hover:text-teal-700"><FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/brett-czerwinski" target="_blank" className="text-gray-400 hover:text-teal-700"><FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://stackoverflow.com/users/26473237/bcz" target="_blank" className="text-gray-400 hover:text-teal-700"><FontAwesomeIcon icon={faStackOverflow} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer;
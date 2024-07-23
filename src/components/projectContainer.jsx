import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


const ProjectContainer = ({ projectTitle, github, liveUrl, imageUrl}) => {
    return (
        <div className="relative group w-64 h-64 bg-cover bg-center rounded-lg shadow-xl" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-0 flex justify-end items-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-10">
                <div className="flex items-center space-x-2">
                    {github && (
                        <a href={github} target="_blank" className="bg-gray-400 p-1 rounded text-teal-700 hover:bg-gray-700">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    )}
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" className="bg-gray-400 p-1 rounded text-teal-700 hover:bg-gray-700">
                            <FontAwesomeIcon icon={faGlobe} size="2x" />
                        </a>
                    )}
                </div>
            </div>
            <div className="absolute inset-0 flex justify-bewteen items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="bg-gray-400 p-2 rounded">
                    <span className="text-teal-700 text-center text-l font-bold">{projectTitle}</span>
                </div>
            </div>
        </div>
    );
}


export default ProjectContainer;

import sqlImg from '../assets/SQL-Storefront.png'
import socialImg from '../assets/MongoDB-Socialnet.png'
import jateImg from '../assets/JATE.png'
import activeImg from '../assets/Active-Peak.png'
import nationalImg from '../assets/NationalParks.png'
import readMeImg from '../assets/readME-Gen.png'
import ProjectContainer from '../components/projectContainer'

function Projects() {
    const projects = [
        {
            id: 1,
            projectTitle: 'MongoDB Social Network',
            github: 'https://github.com/Bcz25/TheSocialNet',
            imageUrl: socialImg,
        },
        {
            id: 2,
            projectTitle: 'Active Peak',
            github: 'https://github.com/Bcz25/Active-Peak',
            liveUrl: 'https://active-peak2.onrender.com/',
            imageUrl: activeImg,
        },
        {
            id: 3,
            projectTitle: 'JATE - Text Editor',
            github: 'https://github.com/Bcz25/JATE',
            liveUrl: 'https://jate-v7r7.onrender.com',
            imageUrl: jateImg,
        },
        {
            id: 4,
            projectTitle: 'National Park Finder',
            github: 'https://github.com/Bcz25/NationalParks',
            liveUrl: 'https://bcz25.github.io/NationalParks/',
            imageUrl: nationalImg,
        },
        {
            id: 5,
            projectTitle: 'Sql Storefront',
            github: 'https://github.com/Bcz25/shopCz',
            imageUrl: sqlImg,
        },
        {
            id: 6,
            projectTitle: 'Node readMe Generator',
            github: 'https://github.com/Bcz25/readme-gen',
            imageUrl: readMeImg,
        },
    ]
    return (
        <div className=" w-full flex justify-center ">
            <div className="w-full" data-aos="fade-up">
                <div className="bg-gray-900 text-gray-400 text-center rounded p-2 shadow-xl mb-12 mx-auto w-1/2">
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    {/* Adjust the src and classes as needed */}
                </div>
                <div className="flex flex-wrap justify-around bg-gray-400 p-6 rounded shadow">
                    {projects.map((project) => (
                        <ProjectContainer key={project.id}
                            projectTitle={project.projectTitle}
                            github={project.github}
                            liveUrl={project.liveUrl}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Projects;
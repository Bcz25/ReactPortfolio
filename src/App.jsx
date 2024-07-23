import './index.css'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import sqlImg from './assets/SQL-Storefront.png'
import socialImg from './assets/MongoDB-Socialnet.png'
import jateImg from './assets/JATE.png'
import activeImg from './assets/Active-Peak.png'
import nationalImg from './assets/NationalParks.png'
import readMeImg from './assets/readME-Gen.png'

function App() {


  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-500">
        <Header />
        <div className="flex-grow">
          <main className="py-8 px-8">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Projects() {
  return (
    <div className=" w-full flex justify-center ">
      <div className="w-full" data-aos="fade-up">
        <div className="bg-gray-900 text-gray-400 text-center rounded p-2 shadow-xl mb-12 mx-auto w-1/2">
          <h2 className="text-4xl font-bold">My Projects</h2>
          {/* Adjust the src and classes as needed */}
        </div>
        <div className="flex flex-wrap justify-around bg-gray-400 p-6 rounded shadow">
          {projects.map((project, index) => (
            <div className="m-4">
              <ProjectContainer key={index}
                projectTitle={project.projectTitle}
                github={project.github}
                liveUrl={project.liveUrl}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="flex flex-col justify-between items-start py-5 px-5 relative isolate overflow-auto bg-gray-700 sm:py-8 bg-[url('./src/assets/portfolio-background2.jpeg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gray-900 before:opacity-30 before:z-0">
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


function Nav() {
  return (
    <nav className=" w-full p-2 space-x-2">
      <a href="/about" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">About Me</a>
      <a href="/projects" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Projetcs</a>
      <a href="/resume" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Resume</a>
      <a href="/contact" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Contact</a>
    </nav>
  )
}

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
const projects = [
  {
    projectTitle: 'MongoDB Social Network',
    github: 'https://github.com/Bcz25/TheSocialNet',
    imageUrl: socialImg,
  },
  {
    projectTitle: 'Active Peak',
    github: 'https://github.com/Bcz25/Active-Peak',
    liveUrl: 'https://active-peak2.onrender.com/',
    imageUrl: activeImg,
  },
  {
    projectTitle: 'JATE - Text Editor',
    github: 'https://github.com/Bcz25/JATE',
    liveUrl: 'https://jate-v7r7.onrender.com',
    imageUrl: jateImg,
  },
  {
    projectTitle: 'Natinal Park Finder',
    github: 'https://github.com/Bcz25/NationalParks',
    liveUrl: 'https://bcz25.github.io/NationalParks/',
    imageUrl: nationalImg,
  },
  {
    projectTitle: 'Sql Storefront',
    github: 'https://github.com/Bcz25/shopCz',
    imageUrl: sqlImg,
  },
  {
    projectTitle: 'Node readMe Generator',
    github: 'https://github.com/Bcz25/readme-gen',
    imageUrl: readMeImg,
  },
]
const ProjectContainer = ({ projectTitle, github, liveUrl, imageUrl }) => {
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

function About() {
  return (
    <div className=" w-full flex justify-center">
      <div className="w-full" data-aos="fade-up">
        <div className="bg-gray-900 text-gray-400 text-center rounded p-2 shadow-xl mb-12 mx-auto w-1/2">
          <h2 className="text-4xl font-bold">About Me</h2>
          {/* Adjust the src and classes as needed */}
        </div>
        <div className="flex w-full justify-center items-center pb-5">
          <img src="./src/assets/me.jpeg" alt="Description" className="h-64 w-48 mt-4 rounded shadow-2xl" />
        </div>
        <div className="resume-item bg-gray-400 p-6 rounded shadow font-semibold">
          <div className="flex flex-col">
            <p className='m-2 p-2'>
              I was born and raised in South Florida where I met my beautiful wife, Xela, and we had our first child, Sky. In March of 2023, we trekked across the U.S to snowy Utah so I could pursue a job in Cyber Security. Since moving here, I've discovered a love for hiking and snowboarding. I have also discovered a profound interest in programming and am currently doing a bootcamp with the University of Utah to expand my knowledge and gain more hands-on experience in programming.
            </p>
            <p className='m-2 p-2'>
              I am a skilled full stack web developer with experience in HTML, CSS, JavaScript, jQuery, Node.js, React, Express, NoSql/MongoDb, postreSql, and Inquirer. I have managed web content, design, and backend databases for multiple projects, ensuring responsive and accessible websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


function Resume() {
    const getPdf = () => {
        const pdfUrl = "./src/assets/brett-czerwinski-resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "brett-czerwinski-resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
    <div className="container mx-auto px-4">

      <div className="bg-gray-900 text-gray-400 text-center rounded p-2 shadow-xl mb-12 mx-auto w-1/2">
        <h2 className="text-4xl font-bold">Resume</h2>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" data-aos="fade-up">
          <h3 className="resume-title text-2xl font-semibold mb-4">Education &amp; Certifications</h3>
          <div className="resume-item bg-gray-400 p-6 rounded shadow mb-6">
            <h4 className="text-xl font-bold">Certified Full-Stack Software Engineer</h4>
            <h5>2024</h5>
            <p><em>University of Utah, UT</em></p>
            <ul className="list-disc pl-5">
              <li>Learned front-end and back-end technologies including HTML, CSS, JavaScript, jQuery, Node.js, React, Express, and SQL.</li>
              <li>Developed and deployed full-stack applications, incorporating best practices for responsive and accessible web design.</li>
            </ul>
          </div>
          <div className="resume-item bg-gray-400 p-6 rounded shadow mb-6">
            <h4 className="text-xl font-bold">Certified in cybersecurity</h4>
            <h5>2023</h5>
            <p><em>ISC2</em></p>
            <ul className="list-disc pl-5">
              <li>Demonstrated knowledge of fundamental cybersecurity principles and practices.</li>
              <li>Validated skills in securing networks, managing risks, and protecting data integrity.</li>
            </ul>
          </div>
          <div className="resume-item bg-gray-400 p-6 rounded shadow">
            <h4 className="text-xl font-bold">Security+</h4>
            <h5>2022</h5>
            <p><em>CompTia</em></p>
            <ul className="list-disc pl-5">
              <li>Proven expertise in securing network devices, identifying vulnerabilities, and implementing security measures.</li>
              <li>Recognized ability to handle and mitigate security threats and incidents.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title text-2xl font-semibold mb-4">Professional Experience</h3>
          <div className="resume-item bg-gray-400 p-6 rounded shadow mb-6">
            <h4 className="text-xl font-bold">Dedicated SOC Analyst</h4>
            <h5>2023 - Present</h5>
            <p><em>Novacoast, Orem, UT </em></p>
            <ul className="list-disc pl-5">
              <li>Monitored and analyzed security events and incidents using SIEM (Security Information and Event Management) tools to detect and respond to cyber threats in real-time. </li>
              <li>Conducted in-depth investigations into security alerts, determining their validity and potential impact on the organization's systems and data. </li>
              <li>Produced detailed reports and documentation of security incidents, including root cause analysis, impact assessment, and remediation recommendations. </li>
              <li>Participated in security awareness training and knowledge sharing sessions to educate staff on cybersecurity best practices and emerging threats.</li>
            </ul>
          </div>
          <div className="resume-item bg-gray-400 p-6 rounded shadow mb-6">
            <h4 className="text-xl font-bold">Aircraft Mechanic &amp; QA Inspector</h4>
            <h5>2021-2022</h5>
            <p><em>Piper Aircraft, Vero Beach, FL</em></p>
            <ul className="list-disc pl-5">
              <li>Conducted routine inspections, maintenance, and repairs on aircraft systems and components, ensuring compliance with regulatory standards and safety protocols.</li>
              <li>Documented maintenance activities, including work performed, parts used, and compliance with maintenance manuals and procedures.</li>
              <li>Collaborated with engineering and maintenance teams to perform scheduled maintenance tasks, upgrades, and modifications, optimizing aircraft performance and reliability.</li>
            </ul>
          </div>
          <div className="resume-item bg-gray-400 p-6 rounded shadow">
            <h4 className="text-xl font-bold">Insurance Broker</h4>
            <h5>2019-2021</h5>
            <p><em>Legacy Partners, FL</em></p>
            <ul className="list-disc pl-5">
              <li>Consulted with a wide variety of clients to meet their life insurance and retirement needs.</li>
              <li>Managed a team of over 10 brokers and assisted them with their clients and other trainings.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center m-8">
        <button onClick={getPdf} className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">
          Download Resume
        </button>
      </div>

    </div>
  )
}

function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server or email
    const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    const newSubmission = { ...formData };
    existingSubmissions.push(newSubmission);
    localStorage.setItem('formSubmissions', JSON.stringify(existingSubmissions));
    alert('Thank you for your message!');

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Existing content */}
      <div className="bg-gray-900 text-gray-400 text-center rounded p-2 shadow-xl mb-12 mx-auto w-1/2">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      </div>
      {/* Contact Form */}
      <div className="contact-form bg-gray-400 p-6 rounded shadow-xl my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-900 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-900 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-900 text-sm font-bold mb-2">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <button type="submit" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App

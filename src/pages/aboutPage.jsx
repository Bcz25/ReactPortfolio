import ProfilePhoto from '../assets/ProfilePhoto.png';

function About() {
    return (
      <div className=" w-full flex justify-center">
        <div className="w-full" data-aos="fade-up">
          <div className="bg-gray-900 text-gray-400 text-center rounded p-2 shadow-xl mb-12 mx-auto w-1/2">
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="flex w-full justify-center items-center pb-5">
            <img src={ProfilePhoto} alt="Profile Photo - Brett Czerwinski" className="h-64 w-48 mt-4 rounded shadow-2xl" />
          </div>
          <div className="resume-item bg-gray-400 p-6 rounded shadow font-semibold">
            <div className="flex flex-col">
              <p className='m-2 p-2'>
                I was born and raised in South Florida where I met my beautiful wife, Xela, and we had our first child, Sky. In March of 2023, we trekked across the U.S to snowy Utah so I could pursue a job in Cyber Security. Since moving here, I've discovered a love for hiking and snowboarding. I have also discovered a profound interest in programming and have recently completed an intensive coding bootcamp through the University of Utah.
              </p>
              <p className='m-2 p-2'>
                I am now a certified full stack web developer with experience in HTML, CSS, JavaScript, jQuery, Node.js, React, Express, NoSQL/MongoDB, PostreSQL, and GraphQL. I have managed web content, design, and backend databases for multiple projects, ensuring responsive and accessible websites. As a result of my background in Cyber Security, I also have a keen eye for security vulnerabilities and have implemented security measures to protect web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default About;  
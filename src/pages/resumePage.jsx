import DownloadBtn from '../components/downloadBtn';

function Resume() {
    return (

    <div className="container mx-auto px-4" id="pdfDoc" >

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
              <li>Learned front-end and back-end technologies including HTML, CSS, JavaScript, jQuery, Node.js, React, Express, PostgreSQL, NoSQL/MongoDB, and GraphQL.</li>
              <li>Developed and deployed full-stack applications, incorporating best practices for responsive and accessible web design.</li>
            </ul>
          </div>
          <div className="resume-item bg-gray-400 p-6 rounded shadow mb-6">
            <h4 className="text-xl font-bold">Certified in Cybersecurity</h4>
            <h5>2022</h5>
            <p><em>ISC2</em></p>
            <ul className="list-disc pl-5">
              <li>Basic security principles</li>
              <li>Incident response</li>
              <li>Network Security</li>
              <li>Security Operations</li>
            </ul>
          </div>
          <div className="resume-item bg-gray-400 p-6 rounded shadow">
            <h4 className="text-xl font-bold">Security+</h4>
            <h5>2022</h5>
            <p><em>CompTia</em></p>
            <ul className="list-disc pl-5">
              <li>Proven expertise in securing network devices, identifying vulnerabilities, and implementing security measures.</li>
              <li>Recognized ability to handle and mitigate security threats and incidents.</li>
              <li>Understand Architecture and design for security concepts and best practices</li>
              <li>Understand the importance of policies, plans and procedures related to organizational security</li>
              <li>Understand risk management processes and practices</li>
              <li>Compare basic types of cryptography</li>
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
              <li>Monitor and analyze security events and incidents using SIEM (Security Information and Event Management) tools such as LogRhythm, Microsoft Sentinel, Splunk/Phantom, Cloudflare, Crowdstrike and Service-Now. to detect and respond to cyber threats in real-time.</li>
              <li>Conducting in-depth investigations into security alerts, determining their validity and potential impact on the organization's systems and data. </li>
              <li>Produce detailed reports and documentation of security incidents, including root cause analysis, impact assessment, and remediation recommendations. </li>
              <li>Participate in security awareness training and knowledge sharing sessions to educate staff on cybersecurity best practices and emerging threats.</li>
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
              <li>Protected and secured client PII.</li>
              <li>Worked with systems that hosted client financial information and kept PCI/DSS compliance.</li>
              <li>Developed great interpersonal skills through working directly with a diverse clientele.</li>
              <li>Utilized a database to analyze charts and graphs for keeping track of progress and important client and team information.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center m-8">
      < DownloadBtn />
      </div>

    </div>
  )
}

export default Resume;
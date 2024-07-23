import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Resume() {
    const downloadPdf = () => {
        const input  = document.getElementsByClassName('pdfDoc');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("brett-czerwinski-resume.pdf");
        });
    };
    return (

    <div className="container mx-auto px-4 pdfDoc">

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
        <button onClick={downloadPdf} className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">
          Download Resume
        </button>
      </div>

    </div>
  )
}

export default Resume;
import resumePdf from '../assets/Brett-Czerwinski-resume.pdf';

const DownloadBtn = () => {
    const downloadPdf = () => {
        const link = document.createElement('a');
        console.log(resumePdf)
        link.href = resumePdf;
        link.download = 'Brett-Czerwinski-resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
return (
    <button onClick={downloadPdf} className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">
        Download Resume
    </button>
);
};

export default DownloadBtn;
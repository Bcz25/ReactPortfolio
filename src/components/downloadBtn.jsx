import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadBtn = () => {
    const downloadPdf = () => {
    const input = document.getElementById('pdfDoc');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'a4'
        });

        // Document properties
        pdf.setProperties({
            title: 'Resume',
            subject: 'A formatted version of the resume',
            author: 'Brett Czerwinski',
        });

        // Custom font and style
        pdf.setFont('helvetica');
        pdf.setFontSize(12);
        pdf.setTextColor(60);

        // Add image
        pdf.addImage(imgData, 'PNG', 40, 40, 512, 512);

        // Add text with custom formatting
        pdf.text("Brett Czerwinski's Resume", 40, 30);

        // Footer
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            pdf.setPage(i);
            pdf.text(40, pdf.internal.pageSize.height - 20, 'Page ' + String(i));
        }

        pdf.save("brett-czerwinski-resume.pdf");
    });
};
return (
    <button onClick={downloadPdf} className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">
        Download Resume
    </button>
);
};

export default DownloadBtn;
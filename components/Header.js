// Header.js
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ColumnsIcon, PenToolIcon, ImageIcon, SettingsIcon, CloudIcon } from "./icons";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Header() {
  const handleDownloadPDF = async () => {
    const element = document.querySelector('.a4-document');
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const clonedElement = element.cloneNode(true);
    clonedElement.style.width = pdfWidth + 'pt';
    document.body.appendChild(clonedElement);

    const totalPages = Math.ceil(clonedElement.clientHeight / pdfHeight);
    for (let page = 1; page <= totalPages; page++) {
      const canvas = await html2canvas(clonedElement, {
        scale: 2,
        y: (page - 1) * pdfHeight,
        height: pdfHeight,
      });
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      if (page < totalPages) {
        pdf.addPage();
      }
    }

    document.body.removeChild(clonedElement);
    pdf.save('document.pdf');
  };

  return (
    <div className="flex items-center justify-between bg-[#2c3e50] p-4 text-white">
      <h1 className="text-xl font-bold">Magical Resume</h1>
      <div className="flex items-center space-x-4">
        <ColumnsIcon className="h-5 w-5" />
        <PenToolIcon className="h-5 w-5" />
        <ImageIcon className="h-5 w-5" />
        <SettingsIcon className="h-5 w-5" />
        <CloudIcon className="h-5 w-5" />
        <Button className="bg-[#1abc9c] text-white" onClick={handleDownloadPDF}>
          Download
        </Button>
        <Switch id="optimize-toggle" />
        <Label className="text-sm" htmlFor="optimize-toggle">
          Optimizer
        </Label>
        <Badge variant="secondary">13</Badge>
        <Button className="block" variant="outline">
          My Documents
        </Button>
      </div>
    </div>
  );
}
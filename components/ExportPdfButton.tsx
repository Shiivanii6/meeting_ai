"use client";

import jsPDF from "jspdf";

export default function ExportPdfButton({
  title,
  transcript,
  summary,
  actionItems,
}: {
  title: string;
  transcript: string;
  summary: string;
  actionItems: string;
}) {
    function exportPdf() {
        const doc = new jsPDF();
      
        doc.setFontSize(24);
        doc.text("MeetFlow AI Report", 20, 20);
      
        doc.setFontSize(12);
        doc.text(
          `Generated: ${new Date().toLocaleDateString()}`,
          20,
          30
        );
      
        doc.setFontSize(18);
        doc.text(title, 20, 45);
      
        let y = 60;
      
        doc.setFontSize(14);
        doc.text("Transcript", 20, y);
      
        y += 10;
      
        const transcriptLines = doc.splitTextToSize(
          transcript || "",
          170
        );
      
        doc.text(transcriptLines, 20, y);
      
        y += transcriptLines.length * 6 + 15;
      
        doc.text("Summary", 20, y);
      
        y += 10;
      
        const summaryLines = doc.splitTextToSize(
          summary || "",
          170
        );
      
        doc.text(summaryLines, 20, y);
      
        y += summaryLines.length * 6 + 15;
      
        doc.text("Action Items", 20, y);
      
        y += 10;
      
        const actionLines = doc.splitTextToSize(
          actionItems || "",
          170
        );
      
        doc.text(actionLines, 20, y);
      
        doc.save(`${title}-report.pdf`);
      }
  return (
    <button
      onClick={exportPdf}
      className="bg-green-600 hover:bg-green-500 px-5 py-3 rounded-xl"
    >
      📄 Export Report
    </button>
  );
}
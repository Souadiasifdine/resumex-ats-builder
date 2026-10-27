import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ArrowLeft, Download, Edit, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResume } from "@/context/ResumeContext";
import TemplateRenderer from "@/components/Templates/TemplateRenderer";
import AtsPanel from "@/components/AtsPanel";

const MyResume = () => {
  const { resumeData } = useResume();
  const printRef = useRef(null);
  const hasContent = Boolean(
    resumeData.header.fullName || resumeData.summary || resumeData.experience.length || resumeData.projects.length,
  );

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${resumeData.header.fullName || "Resume"} — ResumeX`,
  });

  if (!hasContent) {
    return (
      <div className="flex min-h-[calc(100dvh-72px)] items-center justify-center px-5 py-16">
        <div className="max-w-lg border-y border-border py-10 text-center">
          <FileText className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
          <h1 className="mt-5 font-display text-4xl font-bold text-[#10172a]">Your next draft starts here.</h1>
          <p className="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">There is no resume content yet. Add your details in the builder, then return here to review and export.</p>
          <Button asChild className="mt-7 h-12 rounded-lg bg-primary px-6 text-primary-foreground hover:bg-[#2547b8]"><Link to="/builder"><Edit className="mr-2 h-4 w-4" /> Open builder</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100dvh-72px)] bg-background py-8 md:py-12">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-8 flex flex-col gap-5 border-b border-border pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <Link to="/builder" className="mb-3 inline-flex items-center text-sm font-medium text-[#10172a] underline decoration-[#b6bdd0] underline-offset-4 hover:decoration-primary"><ArrowLeft className="mr-2 h-4 w-4" /> Back to editor</Link>
            <h1 className="font-display text-4xl font-bold text-[#10172a]">Review your resume</h1>
            <p className="mt-2 text-muted-foreground">Check every detail before creating your PDF.</p>
          </div>
          <Button type="button" onClick={() => handlePrint()} className="h-12 rounded-lg bg-primary px-6 text-primary-foreground hover:bg-[#2547b8]">
            <Download className="mr-2 h-5 w-5" /> Download PDF
          </Button>
        </header>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="space-y-5">
            <AtsPanel />
            <div className="border-y border-border py-5">
              <div className="flex items-center gap-2 text-sm font-semibold"><Printer className="h-4 w-4 text-primary" /> Export note</div>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">Your browser's print dialog will open. Choose <strong>Save as PDF</strong>, A4 paper, and enable background graphics if your template uses color.</p>
              <Button asChild variant="outline" className="mt-4 h-11 w-full rounded-lg"><Link to="/builder"><Edit className="mr-2 h-4 w-4" /> Continue editing</Link></Button>
            </div>
          </aside>

          <div className="min-w-0 overflow-x-auto border border-[#d5dae5] bg-[#e6e9f1] p-3 custom-scrollbar sm:p-6">
            <div className="preview-wrapper mx-auto w-full md:w-[210mm]">
              <div ref={printRef} className="resume-preview-container mx-auto w-full bg-white md:w-[210mm] md:min-h-[297mm]">
                <TemplateRenderer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;

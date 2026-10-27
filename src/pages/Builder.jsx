import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Award, Briefcase, ChevronLeft, Code, Eye, FileText, FolderGit2, GraduationCap, RotateCcw, Sparkles, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useResume } from "@/context/ResumeContext";
import HeaderForm from "@/components/Form/HeaderForm";
import SummaryForm from "@/components/Form/SummaryForm";
import EducationForm from "@/components/Form/EducationForm";
import SkillsForm from "@/components/Form/SkillsForm";
import ExperienceForm from "@/components/Form/ExperienceForm";
import ProjectsForm from "@/components/Form/ProjectsForm";
import CertificationsForm from "@/components/Form/CertificationsForm";
import TemplateSwitcher from "@/components/TemplateSwitcher";
import TemplateRenderer from "@/components/Templates/TemplateRenderer";
import AtsPanel from "@/components/AtsPanel";

const formSteps = [
  { id: "header", label: "Personal", icon: User, component: HeaderForm },
  { id: "summary", label: "Summary", icon: FileText, component: SummaryForm },
  { id: "experience", label: "Experience", icon: Briefcase, component: ExperienceForm },
  { id: "projects", label: "Projects", icon: FolderGit2, component: ProjectsForm },
  { id: "skills", label: "Skills", icon: Code, component: SkillsForm },
  { id: "education", label: "Education", icon: GraduationCap, component: EducationForm },
  { id: "certifications", label: "Certificates", icon: Award, component: CertificationsForm },
];

const Builder = () => {
  const [showPreview, setShowPreview] = useState(false);
  const { resumeData, loadSampleData, clearResume } = useResume();
  const navigate = useNavigate();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!showPreview) return;
    closeButtonRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setShowPreview(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showPreview]);

  const handleLoadSample = () => {
    const hasDraft = resumeData.header.fullName || resumeData.summary || resumeData.experience.length;
    if (!hasDraft || window.confirm("Replace your current draft with the sample resume?")) {
      loadSampleData();
    }
  };

  return (
    <div className="min-h-[calc(100dvh-72px)] bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-5 py-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-foreground">Resume builder</h1>
            <p className="mt-1.5 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[#0e7c57]" aria-hidden="true" /> Saved on this device
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button type="button" variant="ghost" onClick={handleLoadSample} className="h-11 rounded-xl px-4 text-sm font-semibold hover:bg-secondary">
              <Sparkles className="mr-2 h-4 w-4 text-primary" /> Load sample
            </Button>
            <Button type="button" variant="ghost" onClick={clearResume} className="h-11 rounded-xl px-4 text-sm font-semibold hover:bg-secondary">
              <RotateCcw className="mr-2 h-4 w-4" /> Clear
            </Button>
            <Button type="button" variant="outline" onClick={() => setShowPreview(true)} className="h-11 rounded-xl font-semibold lg:hidden">
              <Eye className="mr-2 h-4 w-4" /> Preview
            </Button>
            <Button type="button" onClick={() => navigate("/my-resume")} className="h-11 rounded-xl bg-primary px-5 font-semibold text-primary-foreground shadow-sm hover:bg-[#2547b8]">
              Review & download <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-8 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="min-w-0 space-y-7">
          <AtsPanel />
          <div className="form-section">
            <TemplateSwitcher />
          </div>
          <div className="form-section">
            <Tabs defaultValue="header" className="w-full">
              <ScrollArea className="w-full whitespace-nowrap pb-3">
                <TabsList className="inline-flex h-auto w-max justify-start gap-1.5 rounded-lg bg-transparent p-0">
                  {formSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <TabsTrigger
                        key={step.id}
                        value={step.id}
                        className="flex min-h-10 items-center gap-2 rounded-full px-4 text-[13px] font-semibold text-muted-foreground shadow-none transition-colors hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{step.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              {formSteps.map((step) => {
                const FormComponent = step.component;
                return (
                  <TabsContent key={step.id} value={step.id} className="mt-5 focus-visible:outline-none">
                    <FormComponent />
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </div>

        <div className="hidden min-w-0 lg:block">
          <div className="sticky top-24 h-[calc(100dvh-120px)] min-h-[560px]">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between px-1">
                <div><p className="text-sm font-bold text-foreground">Live preview</p><p className="text-xs text-muted-foreground">Updates as you type</p></div>
                <span className="rounded-md bg-secondary px-2 py-1 text-[11px] font-bold text-muted-foreground">A4</span>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto rounded-xl bg-[#e6e9f1] p-4 custom-scrollbar">
                <div className="origin-top scale-[0.55] xl:scale-[0.7]">
                  <TemplateRenderer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background p-4 lg:hidden" role="dialog" aria-modal="true" aria-label="Resume preview">
          <div className="mb-3 flex items-center justify-between text-foreground">
            <Button ref={closeButtonRef} type="button" variant="ghost" onClick={() => setShowPreview(false)} className="h-11 rounded-xl px-2 font-semibold text-foreground hover:bg-secondary">
              <ChevronLeft className="mr-1 h-4 w-4" /> Back to editor
            </Button>
            <button type="button" onClick={() => setShowPreview(false)} aria-label="Close preview" className="flex h-11 w-11 items-center justify-center rounded-xl hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><X className="h-5 w-5" /></button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto bg-[#e6e9f1] p-3">
            <TemplateRenderer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Builder;

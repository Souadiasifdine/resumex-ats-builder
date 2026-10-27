import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Check, Download, LayoutTemplate, ListChecks, LockKeyhole, PenLine, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScoreRing from "@/components/ScoreRing";
import { useResume, sampleResumeData } from "@/context/ResumeContext";
import { analyzeResume } from "@/lib/ats";

const steps = [
  { icon: PenLine, title: "Write your evidence", text: "Add roles, projects, education, and skills in short guided sections. Your draft saves in this browser as you type." },
  { icon: ListChecks, title: "Fix what the checklist flags", text: "Nine visible checks point to missing details, vague claims, and bullets that need a measurable result." },
  { icon: LayoutTemplate, title: "Pick a layout and export", text: "Choose from 16 templates, check the live A4 preview, and save a text-based PDF." },
];

const Home = () => {
  const { loadSampleData } = useResume();
  const navigate = useNavigate();
  const demoAnalysis = analyzeResume(sampleResumeData);

  const openDemo = () => {
    loadSampleData();
    navigate("/builder");
  };

  return (
    <div className="overflow-x-hidden bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_1fr] lg:py-24">
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-[13px] font-semibold text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[#0e7c57]" aria-hidden="true" />
              Free, private, no account
            </span>
            <h1 className="mt-6 text-[42px] font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[64px]">
              A clear resume, with feedback on every line.
            </h1>
            <p className="mt-6 max-w-[540px] text-lg leading-8 text-muted-foreground">
              Fill in your details, watch the page update live, and fix what the checklist flags. Nothing is uploaded: your draft stays in your browser.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="h-14 rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_rgba(47,85,212,0.6)] hover:bg-[#2547b8]">
                <Link to="/builder">Build my resume <ArrowRight className="ml-2.5 h-5 w-5" /></Link>
              </Button>
              <Button type="button" variant="outline" onClick={openDemo} className="h-14 rounded-xl border-input bg-card px-7 text-base font-semibold text-foreground hover:bg-secondary">
                Try with sample data
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0e7c57]" /> 16 templates</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0e7c57]" /> 9 visible checks</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0e7c57]" /> PDF without sign-up</li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
            <div className="rounded-[28px] border border-border bg-[#e9ecf4] p-5 sm:p-9">
              <div className="rounded-xl bg-white p-6 shadow-resume sm:p-8">
                <div className="flex items-start justify-between gap-4 border-b border-[#e3e6ee] pb-4">
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Amina Benali</h2>
                    <p className="mt-0.5 text-xs font-semibold text-muted-foreground">Junior Data Analyst</p>
                  </div>
                  <span className="rounded-md bg-secondary px-2 py-1 text-[10px] font-bold text-muted-foreground">A4</span>
                </div>
                <h3 className="mt-5 text-[11px] font-bold text-foreground">Experience</h3>
                <p className="mt-2 text-xs font-bold text-foreground">Business Intelligence Intern</p>
                <p className="text-[10px] text-muted-foreground">Atlas Retail, 2025</p>
                <ul className="mt-2.5 space-y-2 text-[10.5px] leading-4 text-[#4b5468]">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4b5468]" />Automated weekly reporting, reducing preparation time by 40%.</li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4b5468]" /><span className="rounded bg-[#dfe7ff] px-1 py-0.5 text-foreground">Built a dashboard for the sales team.</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4b5468]" />Cleaned 12 data sources with Python and SQL.</li>
                </ul>
                <h3 className="mt-5 text-[11px] font-bold text-foreground">Skills</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Python", "SQL", "Power BI", "Pandas", "Excel"].map((skill) => (
                    <span key={skill} className="rounded-md bg-secondary px-2 py-1 text-[10px] font-semibold text-[#4b5468]">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-4 w-full max-w-[290px] rounded-2xl border border-border bg-card p-4 shadow-[0_18px_40px_-16px_rgba(16,23,42,0.35)] sm:absolute sm:-left-10 sm:bottom-16 sm:mt-0">
              <p className="text-[13px] font-bold text-foreground">Suggestion</p>
              <p className="mt-1 text-[13px] leading-5 text-muted-foreground">Add a number to this bullet, like how many users or how much time it saved.</p>
            </div>

            <div className="relative ml-auto mt-4 flex w-fit items-center gap-4 rounded-2xl border border-border bg-card p-4 pr-6 shadow-[0_18px_40px_-16px_rgba(16,23,42,0.35)] sm:absolute sm:-right-4 sm:-top-6 sm:mt-0">
              <ScoreRing score={demoAnalysis.score} size={72} stroke={8} />
              <div>
                <p className="text-sm font-bold text-foreground">Readiness</p>
                <p className="text-xs text-muted-foreground">Updates as you type</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground md:text-5xl">From a blank page to a resume you can defend.</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">Three steps. Every one of them works without an account.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-3xl border border-border bg-card p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8edff] text-primary"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-muted-foreground">{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-2.5 leading-7 text-muted-foreground">{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-12 rounded-[32px] border border-border bg-card p-7 md:p-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3f5ec] text-[#0e7c57]"><ShieldCheck className="h-6 w-6" aria-hidden="true" /></span>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">You see exactly what is being checked.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">The score looks at things you control: contact details, evidence, action verbs, and measurable results. It does not promise an interview and it does not pretend to be a company's real ATS.</p>
            <Button asChild variant="outline" className="mt-8 h-12 rounded-xl border-input bg-card px-6 font-semibold text-foreground hover:bg-secondary">
              <Link to="/about">Read the resume guide <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="rounded-3xl bg-background p-6 sm:p-8">
            <div className="flex items-center gap-5 border-b border-border pb-6">
              <ScoreRing score={demoAnalysis.score} size={92} stroke={10} />
              <div>
                <p className="text-base font-bold text-foreground">Sample readiness report</p>
                <p className="mt-1 text-sm text-muted-foreground">Yours updates with your content.</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {demoAnalysis.checks.map((check) => (
                <li key={check.id} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e3f5ec] text-[#0e7c57]"><Check className="h-3 w-3" strokeWidth={3} /></span>
                  {check.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8">
        <div className="flex flex-col gap-8 rounded-[32px] bg-foreground px-7 py-12 text-background md:px-14 md:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] md:text-5xl">Start with one clear detail about your work.</h2>
            <p className="mt-4 flex items-center gap-2 text-[#aab3cb]"><LockKeyhole className="h-4 w-4" /> Your draft stays on this device.</p>
          </div>
          <Button asChild className="h-14 shrink-0 rounded-xl bg-white px-7 text-base font-semibold text-foreground hover:bg-[#e9ecf4]">
            <Link to="/builder"><Download className="mr-2.5 h-5 w-5" /> Start building</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-7 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>ResumeX, modified from the open-source project by <a className="font-semibold text-foreground underline underline-offset-4 hover:text-primary" href="https://github.com/rafivalih/ResumeX" target="_blank" rel="noreferrer">Rafivali Shaik</a></p>
          <p>Built with React, Vite, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  { title: "Lead with evidence", text: "Replace “responsible for social media” with “grew average post reach by 35% in three months.” Specific outcomes are easier to trust and remember." },
  { title: "Tailor, don't copy", text: "Mirror relevant keywords from the job description only when they truthfully describe your skills and experience. Relevance matters more than repetition." },
  { title: "Keep parsing simple", text: "Use familiar headings such as Experience, Education, Skills, and Projects. Avoid photos, skill bars, decorative tables, and text embedded in images." },
  { title: "Make every line earn space", text: "For a first role, one page is usually enough. Put your strongest and most relevant evidence first, and remove repeated or generic claims." },
];

const faqs = [
  { question: "Does a high readiness score guarantee ATS success?", answer: "No. The score is a transparent checklist of nine content signals. Different employers and ATS platforms parse documents differently, so always review the exported PDF and tailor it to the role." },
  { question: "Where is my personal information stored?", answer: "Your draft and selected template are stored in your browser's local storage on this device. ResumeX does not require an account or send your draft to a server. Clearing browser data removes the saved draft." },
  { question: "Which template should I choose?", answer: "Start with One Page ATS or Classic when applying through an online portal. Choose a layout that keeps your content readable; design should support the evidence, not compete with it." },
  { question: "How do I save the resume as a PDF?", answer: "Open Review & download, select Download PDF, then choose Save as PDF in your browser's print dialog. Use A4 paper and check that no section is cut off before submitting." },
];

const GuideItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left font-semibold text-[#10172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {question}<ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="max-w-3xl pb-6 leading-7 text-muted-foreground">{answer}</p>}
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-background">
      <header className="border-b border-border bg-[#eceff6]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#5b6475]">A practical resume guide</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight text-[#10172a] md:text-6xl">Write for the person. Prepare for the parser.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#566074]">A good resume makes your evidence easy to find. These principles help you communicate clearly without relying on buzzwords or unverified ATS promises.</p>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <section className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <h2 className="font-display text-3xl font-bold text-[#10172a]">Four rules worth keeping</h2>
          <div>
            {principles.map((principle, index) => (
              <article key={principle.title} className="grid gap-4 border-t border-border py-7 first:pt-0 sm:grid-cols-[40px_1fr]">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <div><h3 className="text-xl font-semibold text-[#10172a]">{principle.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{principle.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-y border-border bg-card py-8 md:px-8">
          <div className="flex items-start gap-3"><LockKeyhole className="mt-1 h-5 w-5 shrink-0 text-[#0e7c57]" /><div><h2 className="text-xl font-semibold text-[#10172a]">Privacy by default</h2><p className="mt-2 max-w-3xl leading-7 text-muted-foreground">No login, no cloud profile, and no hidden upload. Your work stays in this browser so you can draft without handing over personal information. The trade-off is that it does not sync between devices.</p></div></div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Before you export</p><h2 className="mt-3 font-display text-3xl font-bold text-[#10172a]">Common questions</h2></div>
          <div>{faqs.map((faq) => <GuideItem key={faq.question} {...faq} />)}</div>
        </section>

        <section className="mt-16 bg-[#10172a] px-6 py-10 text-[#f5f6fa] md:px-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div><h2 className="font-display text-3xl font-bold">Put the guidance into practice.</h2><p className="mt-3 flex items-center gap-2 text-sm text-[#c9d0e2]"><Check className="h-4 w-4 text-[#7ee0b2]" /> Live feedback while you write</p></div>
            <Button asChild className="h-12 shrink-0 rounded-lg bg-primary px-6 text-primary-foreground hover:bg-[#2547b8]"><Link to="/builder">Open builder <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

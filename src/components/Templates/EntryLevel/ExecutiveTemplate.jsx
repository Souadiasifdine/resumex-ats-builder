import { useResume } from "@/context/ResumeContext";

const ExecutiveTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, experience, education, skills, projects, certifications } = resumeData;

  return (
    <div className="min-h-[11in] bg-white px-10 py-9 font-serif text-[12px] leading-relaxed text-slate-800">
      <header className="border-b-2 border-slate-800 pb-5 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-slate-950">{header.fullName || "Your Name"}</h1>
        <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-600">{header.jobTitle || "Professional Title"}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 font-sans text-[10px] text-slate-600">
          {[header.email, header.phone, header.location, header.linkedin, header.github].filter(Boolean).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </header>

      {summary && (
        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-950">Executive Profile</h2>
          <p className="mt-2">{summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mt-5">
          <h2 className="border-b border-slate-300 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">Leadership Experience</h2>
          {experience.map((item) => (
            <article key={item.id} className="mt-3 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-bold text-slate-950">{item.position}</h3>
                <span className="shrink-0 font-sans text-[10px] text-slate-500">{item.startDate} — {item.endDate}</span>
              </div>
              <p className="font-semibold text-slate-600">{item.company}</p>
              <ul className="ml-4 mt-1 list-disc space-y-1">
                {item.bulletPoints.map((point, index) => <li key={index}>{point}</li>)}
              </ul>
            </article>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section className="mt-5">
          <h2 className="border-b border-slate-300 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">Selected Initiatives</h2>
          {projects.map((item) => (
            <article key={item.id} className="mt-3 break-inside-avoid">
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <ul className="ml-4 mt-1 list-disc space-y-1">
                {item.bulletPoints.map((point, index) => <li key={index}>{point}</li>)}
              </ul>
            </article>
          ))}
        </section>
      )}

      <div className="mt-5 grid grid-cols-2 gap-6">
        {education.length > 0 && (
          <section>
            <h2 className="border-b border-slate-300 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">Education</h2>
            {education.map((item) => (
              <div key={item.id} className="mt-2">
                <h3 className="font-bold">{item.degree}</h3>
                <p>{item.school}</p>
                <p className="font-sans text-[10px] text-slate-500">{item.date}{item.grade ? ` · ${item.grade}` : ""}</p>
              </div>
            ))}
          </section>
        )}
        {(skills.technical.length > 0 || skills.soft.length > 0) && (
          <section>
            <h2 className="border-b border-slate-300 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">Capabilities</h2>
            <p className="mt-2"><strong>Technical:</strong> {skills.technical.join(", ")}</p>
            {skills.soft.length > 0 && <p className="mt-1"><strong>Professional:</strong> {skills.soft.join(", ")}</p>}
          </section>
        )}
      </div>

      {certifications.length > 0 && (
        <section className="mt-5">
          <h2 className="border-b border-slate-300 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">Certifications</h2>
          {certifications.map((item) => (
            <p key={item.id} className="mt-2"><strong>{item.title}</strong> · {item.organization} · {item.startDate}</p>
          ))}
        </section>
      )}
    </div>
  );
};

export default ExecutiveTemplate;

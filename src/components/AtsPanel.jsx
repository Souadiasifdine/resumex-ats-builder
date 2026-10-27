import { Check, CircleAlert } from "lucide-react";
import { useResume } from "@/context/ResumeContext";
import { analyzeResume } from "@/lib/ats";
import ScoreRing from "@/components/ScoreRing";

const AtsPanel = ({ compact = false }) => {
  const { resumeData } = useResume();
  const analysis = analyzeResume(resumeData);
  const passed = analysis.checks.filter((check) => check.passed).length;

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6" aria-label="ATS readiness checklist">
      <div className="flex items-center gap-5">
        <ScoreRing score={analysis.score} size={compact ? 76 : 88} stroke={9} />
        <div className="min-w-0">
          <h2 className="text-base font-bold tracking-tight text-foreground">ATS readiness</h2>
          <p className="mt-0.5 text-sm font-semibold text-primary">{analysis.label}</p>
          <p className="mt-1 text-xs text-muted-foreground">{passed} of {analysis.checks.length} content checks passed</p>
        </div>
      </div>

      {!compact && (
        <div className="mt-5 space-y-2.5">
          {analysis.suggestions.slice(0, 3).map((check) => (
            <div key={check.id} className="flex gap-2.5 rounded-xl bg-[#fff5e6] px-3.5 py-3 text-sm">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#c46a0a]" aria-hidden="true" />
              <p className="leading-5 text-[#6b4a1c]">{check.hint}</p>
            </div>
          ))}
          {analysis.suggestions.length === 0 && (
            <div className="flex gap-2.5 rounded-xl bg-[#e3f5ec] px-3.5 py-3 text-sm text-[#0b5c41]">
              <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p className="leading-5">All content checks passed. Review the wording and tailor it to the role.</p>
            </div>
          )}
        </div>
      )}

      <details className="group mt-4 text-sm">
        <summary className="cursor-pointer rounded-md font-semibold text-foreground underline decoration-input underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          View all checks
        </summary>
        <ul className="mt-3 space-y-2.5 border-t border-border pt-3">
          {analysis.checks.map((check) => (
            <li key={check.id} className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <span className={`mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${check.passed ? "bg-[#e3f5ec] text-[#0e7c57]" : "bg-[#fff0d9] text-[#c46a0a]"}`} aria-hidden="true">
                {check.passed ? <Check className="h-2.5 w-2.5" strokeWidth={3} /> : <CircleAlert className="h-2.5 w-2.5" strokeWidth={3} />}
              </span>
              <span className="leading-4">{check.label}</span>
            </li>
          ))}
        </ul>
      </details>
      <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
        A transparent content checklist, not a guarantee of ATS parsing or interview outcomes.
      </p>
    </section>
  );
};

export default AtsPanel;

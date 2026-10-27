import { describe, expect, it } from "vitest";
import { analyzeResume } from "./ats";
import { defaultResumeData, sampleResumeData } from "@/context/ResumeContext";

describe("analyzeResume", () => {
  it("returns zero for an empty resume", () => {
    expect(analyzeResume(defaultResumeData).score).toBe(0);
  });

  it("passes all checks for the complete fictional sample", () => {
    const result = analyzeResume(sampleResumeData);
    expect(result.score).toBe(100);
    expect(result.suggestions).toHaveLength(0);
  });

  it("removes summary points and returns a useful suggestion", () => {
    const result = analyzeResume({ ...sampleResumeData, summary: "" });
    expect(result.score).toBe(85);
    expect(result.suggestions.map((check) => check.id)).toContain("summary");
  });

  it("rejects an invalid email without discarding other progress", () => {
    const result = analyzeResume({
      ...sampleResumeData,
      header: { ...sampleResumeData.header, email: "not-an-email" },
    });
    expect(result.score).toBe(90);
    expect(result.suggestions.map((check) => check.id)).toContain("contact");
  });
});

const ACTION_VERBS = [
  "built", "created", "improved", "reduced", "increased", "led", "designed",
  "developed", "automated", "analyzed", "launched", "delivered", "optimized",
];

const BUZZWORDS = ["hardworking", "hard worker", "team player", "passionate", "go-getter"];

const collectBullets = (resume) => [
  ...(resume.experience || []),
  ...(resume.projects || []),
].flatMap((item) => item.bulletPoints || []);

export function analyzeResume(resume) {
  const bullets = collectBullets(resume);
  const allText = [resume.summary, ...bullets].join(" ").toLowerCase();
  const hasAnyContent = Boolean(
    resume.header.fullName || resume.summary || bullets.length ||
    resume.education.length || resume.skills.technical.length,
  );

  const checks = [
    {
      id: "identity",
      label: "Clear professional identity",
      hint: "Add your full name and target job title.",
      weight: 10,
      passed: Boolean(resume.header.fullName.trim() && resume.header.jobTitle.trim()),
    },
    {
      id: "contact",
      label: "Complete contact details",
      hint: "Add a valid email address and phone number.",
      weight: 10,
      passed: /^\S+@\S+\.\S+$/.test(resume.header.email) && resume.header.phone.trim().length >= 7,
    },
    {
      id: "summary",
      label: "Focused professional summary",
      hint: "Aim for a specific summary between 120 and 500 characters.",
      weight: 15,
      passed: resume.summary.trim().length >= 120 && resume.summary.trim().length <= 500,
    },
    {
      id: "skills",
      label: "Relevant technical skills",
      hint: "List at least three tools, languages, or technical skills.",
      weight: 10,
      passed: resume.skills.technical.length >= 3,
    },
    {
      id: "evidence",
      label: "Experience or project evidence",
      hint: "Add at least one role, internship, or substantial project.",
      weight: 15,
      passed: resume.experience.length > 0 || resume.projects.length > 0,
    },
    {
      id: "education",
      label: "Education included",
      hint: "Add your degree, school, and graduation date.",
      weight: 10,
      passed: resume.education.some((item) => item.degree && item.school),
    },
    {
      id: "impact",
      label: "Measurable achievement",
      hint: "Use a number, percentage, time saving, or scale in an achievement.",
      weight: 15,
      passed: bullets.some((bullet) => /\d/.test(bullet)),
    },
    {
      id: "verbs",
      label: "Action-oriented language",
      hint: "Start achievements with verbs such as built, improved, or analyzed.",
      weight: 10,
      passed: ACTION_VERBS.some((verb) => new RegExp(`\\b${verb}\\b`, "i").test(bullets.join(" "))),
    },
    {
      id: "specificity",
      label: "Specific language, not buzzwords",
      hint: "Replace generic claims with evidence of what you achieved.",
      weight: 5,
      passed: !BUZZWORDS.some((word) => allText.includes(word)),
    },
  ];

  const score = hasAnyContent
    ? checks.reduce((total, check) => total + (check.passed ? check.weight : 0), 0)
    : 0;

  return {
    score,
    checks,
    suggestions: checks.filter((check) => !check.passed),
    label: score >= 85 ? "Strong foundation" : score >= 60 ? "Getting there" : "Needs attention",
  };
}

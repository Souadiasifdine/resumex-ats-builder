import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "resume-builder-data";
const TEMPLATE_KEY = "resume-template";

export const defaultResumeData = {
  header: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    leetcode: "",
    location: "",
  },
  summary: "",
  education: [],
  skills: { technical: [], soft: [] },
  experience: [],
  projects: [],
  certifications: [],
};

export const sampleResumeData = {
  header: {
    fullName: "Amina Benali",
    jobTitle: "Junior Data Analyst",
    email: "amina.benali@example.com",
    phone: "+213 555 014 228",
    linkedin: "https://www.linkedin.com/in/aminabenali",
    github: "https://github.com/aminabenali",
    leetcode: "",
    location: "Algiers, Algeria",
  },
  summary:
    "Junior data analyst with hands-on experience turning operational data into clear decisions. Built dashboards and forecasting prototypes using Python, SQL, and Power BI during academic and internship projects. Curious, rigorous, and focused on measurable business outcomes.",
  education: [
    {
      id: "demo-edu-1",
      school: "University of Algiers 1",
      degree: "Bachelor's degree in Computer Science",
      date: "Jun 2025",
      grade: "Distinction",
    },
  ],
  skills: {
    technical: ["Python", "SQL", "Power BI", "Pandas", "Excel", "Data visualization"],
    soft: ["Communication", "Problem solving", "Adaptability"],
  },
  experience: [
    {
      id: "demo-exp-1",
      company: "Atlas Retail — Data Intern",
      position: "Business Intelligence Intern",
      startDate: "Feb 2025",
      endDate: "May 2025",
      bulletPoints: [
        "Automated a weekly sales reporting workflow with Python, reducing preparation time by 40%.",
        "Built a Power BI dashboard tracking 6 core retail KPIs for the operations team.",
      ],
    },
  ],
  projects: [
    {
      id: "demo-project-1",
      title: "Graduate Employment Insights",
      liveDemo: "https://github.com/aminabenali",
      Github: "",
      bulletPoints: [
        "Analyzed 1,200 survey responses and presented 3 factors associated with faster graduate employment.",
      ],
    },
  ],
  certifications: [
    {
      id: "demo-cert-1",
      title: "Google Data Analytics Certificate",
      certId: "",
      organization: "Coursera",
      startDate: "Nov 2024",
      endDate: "",
      noExpiry: true,
      url: "",
    },
  ],
};

const ResumeContext = createContext(undefined);

const readSavedResume = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultResumeData;
    const parsed = JSON.parse(saved);
    return {
      ...defaultResumeData,
      ...parsed,
      header: { ...defaultResumeData.header, ...parsed.header },
      skills: { ...defaultResumeData.skills, ...parsed.skills },
      education: Array.isArray(parsed.education) ? parsed.education : [],
      experience: Array.isArray(parsed.experience) ? parsed.experience : [],
      projects: Array.isArray(parsed.projects) ? parsed.projects : [],
      certifications: Array.isArray(parsed.certifications) ? parsed.certifications : [],
    };
  } catch {
    return defaultResumeData;
  }
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(readSavedResume);
  const [selectedTemplate, setSelectedTemplate] = useState(
    () => localStorage.getItem(TEMPLATE_KEY) || "classic",
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
  }, [resumeData]);

  useEffect(() => {
    localStorage.setItem(TEMPLATE_KEY, selectedTemplate);
  }, [selectedTemplate]);

  const updateResumeData = (data) => {
    setResumeData((previous) => ({ ...previous, ...data }));
  };

  const updateHeader = (header) => {
    setResumeData((previous) => ({
      ...previous,
      header: { ...previous.header, ...header },
    }));
  };

  const loadSampleData = () => {
    setResumeData(sampleResumeData);
    setSelectedTemplate("onepageats");
  };

  const clearResume = () => {
    if (window.confirm("Clear every field in this resume? This cannot be undone.")) {
      setResumeData(defaultResumeData);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateResumeData,
        updateHeader,
        selectedTemplate,
        setSelectedTemplate,
        loadSampleData,
        clearResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};

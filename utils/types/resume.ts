export interface ResumeData {
  title: string;
  content: {
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
  };
}

type Experience = {
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Education = {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
};

type Skill = {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
};

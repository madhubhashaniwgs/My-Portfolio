export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "tools";

export type ProficiencyLevel = "Proficient" | "Hands-on" | "Familiar";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  description: string;
  color?: string;
  relatedProjectIds: string[];
}

export type ProjectType =
  | "Individual Project"
  | "Group Project"
  | "Second-Year Academic Group Project";

export type ProjectStatus = "Completed" | "In Development" | "Planned" | "Ongoing";

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectHighlightItem {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  fullName?: string;
  type: ProjectType;
  category: "Full-Stack" | "Backend"| "Frontend" | "AI & Web" | "Mobile" | "Web" | "IoT";
  description: string;
  detailedOverview: string;
  problemStatement: string;
  technologies: string[];
  features?: string[];
  keyHighlights: string[];
  detailedHighlights?: ProjectHighlightItem[];
  businessRules?: string[];
  sensors?: string[];
  architectureOverview?: string;
  myContribution?: string;
  challengesAndSolutions: ProjectChallenge[];
  lessonsLearned: string[];
  status: ProjectStatus;
  statusNote?: string;
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  liveDemoUrl?: string;
  imageUrl?: string; 
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  faculty?: string;
  period: string;
  cgpa?: string;
  coursework: string[];
  highlight?: string;
  logoUrl?: string;
}

export interface Education {
  institution: string;
  faculty: string;
  degree: string;
  cgpa: string;
  maxCgpa: string;
  academicPeriod: string;
  relevantCoursework: string[];
  academicProjectsSummary: string;
  items: EducationItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId?: string;
  imageUrl?: string;      
  verificationUrl?: string;
  category: "Verified Skill Assessment" | "Course Completion" | "Professional Certificate";
  skillsCovered: string[];
  description?: string;
}


export interface Activity {
  id: string;
  title: string;
  organization: string;
  institution?: string;
  roles: string[];
  category: "Society" | "Leadership" | "Volunteer" | "Sports";
  description?: string;
  year: string;
  image?: string;
}


export type MilestoneType =
  | "Academic Milestone"
  | "Project Milestone"
  | "Technical Learning";

export interface ExperienceMilestone {
  id: string;
  year: string;
  title: string;
  milestoneType: MilestoneType;
  affiliation: string;
  description: string;
  technologiesUsed?: string[];
}

export interface Profile {
  fullName: string;
  title: string;
  institution: string;
  degree: string;
  currentStatus: string;
  location: string;
  email: string;
  githubUrl: string;
  whatsappUrl: string;
  linkedinUrl: string;
  resumeDownloadUrl: string;
  headline: {
    primary: string;
    secondary: string;
  };
  rotatingPhrases: string[];
  shortBio: string;
  fullBio: string[];
  coreInterests: string[];
  problemSolvingApproach: string;
  careerObjectives: string;
  isInternshipAvailable: boolean;
}

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
  relatedProjectIds: string[];
}

export type ProjectType =
  | "Individual Project"
  | "Second-Year Academic Group Project";

export type ProjectStatus = "Completed" | "In Development" | "Planned";

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: ProjectType;
  category: "Full-Stack" | "Backend / Concurrency" | "AI & Web" | "Mobile / IoT";
  description: string;
  detailedOverview: string;
  problemStatement: string;
  technologies: string[];
  keyHighlights: string[];
  architectureOverview?: string;
  myContribution?: string; // Explicitly for group projects like Assura
  challengesAndSolutions: ProjectChallenge[];
  lessonsLearned: string[];
  status: ProjectStatus;
  statusNote?: string; // For explicit scope boundaries (e.g. DriveGuard backend planned)
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
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
}

export interface Certification {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  category: "Verified Skill Assessment" | "Course Completion";
  skillsCovered: string[];
}

export interface Activity {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  category: "Society" | "Competition" | "Workshop" | "Volunteer" | "Hackathon";
  description: string;
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
  isInternshipAvailable: boolean; // Set to false until confirmed by user
}


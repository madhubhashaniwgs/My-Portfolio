import { ExperienceMilestone } from "@/types/portfolio";

/**
 * Chronological learning and engineering milestones.
 * Strictly distinguishes academic foundations and project milestones from formal employment.
 */
export const experienceMilestones: ExperienceMilestone[] = [
  {
    id: "milestone-1",
    year: "Academic Progression",
    title: "Commenced BSc in Information Technology",
    milestoneType: "Academic Milestone",
    affiliation: "University of Moratuwa, Sri Lanka",
    description:
      "Undertaking rigorous coursework in computer science fundamentals, data structures, algorithms, operating systems, software architecture, and database theory.",
  },
  {
    id: "milestone-2",
    year: "Academic Group Project",
    title: "Assura – Fixed Asset Management System",
    milestoneType: "Project Milestone",
    affiliation: "University of Moratuwa",
    description:
      "Collaborated in a team of undergraduates to build an organizational asset management platform. Spearheaded Employee and Division Head transfer and request workflows, connecting Angular frontend views with ASP.NET Core REST API endpoints.",
    technologiesUsed: ["Angular", "TypeScript", "ASP.NET Core", "MySQL"],
  },
  {
    id: "milestone-3",
    year: "Individual Project",
    title: "SyncReserve – High-Concurrency Reservation Engine",
    milestoneType: "Project Milestone",
    affiliation: "Independent Engineering Exploration",
    description:
      "Engineered an event and seat reservation engine to solve race conditions during high-concurrency ticket checkouts. Implemented JPA pessimistic write locking and explicit transaction isolation in PostgreSQL.",
    technologiesUsed: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    id: "milestone-4",
    year: "Individual Project",
    title: "MockMate – AI Technical Interview Evaluator",
    milestoneType: "Project Milestone",
    affiliation: "Independent Engineering Exploration",
    description:
      "Designed an interactive mock interview preparation tool leveraging the Gemini API to generate domain-specific questions and structured response evaluations.",
    technologiesUsed: ["React", "Node.js", "Express.js", "PostgreSQL", "Gemini API"],
  },
  {
    id: "milestone-5",
    year: "Ongoing Exploration",
    title: "DriveGuard – Smartphone Sensor Telemetry",
    milestoneType: "Technical Learning",
    affiliation: "Independent Research",
    description:
      "Prototyping a mobile telemetry application capturing smartphone IMU accelerometer and gyroscope data streams for vehicle motion analysis.",
    technologiesUsed: ["Flutter", "Dart", "sensors_plus", "Python"],
  },
];


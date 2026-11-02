import { Profile } from "@/types/portfolio";

export const profileData: Profile = {
  // Configurable display name placeholder - update with candidate's actual full name
  fullName: "Software Engineering Undergraduate",
  title: "Undergraduate Software Engineer",
  institution: "University of Moratuwa, Sri Lanka",
  degree: "BSc in Information Technology",
  currentStatus: "Undergraduate Student",
  location: "Sri Lanka",

  // Contact and Social Links (Placeholders until user provides specific URLs)
  email: "contact@example.com",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  resumeDownloadUrl: "/documents/resume-placeholder.pdf",

  headline: {
    primary: "Building Digital Experiences.",
    secondary: "Solving Real-World Problems.",
  },

  rotatingPhrases: [
    "Full-Stack Applications",
    "Scalable Software Solutions",
    "Modern Web Experiences",
    "Meaningful Digital Products",
  ],

  shortBio:
    "Information Technology undergraduate at the University of Moratuwa with a strong foundation in full-stack software development, database design, and concurrent transaction management.",

  fullBio: [
    "I am an Information Technology undergraduate at the University of Moratuwa, Sri Lanka, actively preparing for Software Engineering internship opportunities.",
    "My academic journey has built a disciplined foundation in data structures, algorithms, object-oriented design, database systems, and computer architecture.",
    "Through individual and collaborative software projects, I enjoy translating theoretical concepts into robust applications—exploring concurrency control, transactional integrity, RESTful architecture, and interactive web interfaces.",
  ],

  coreInterests: [
    "Full-Stack Web Development",
    "Concurrent Transaction Management",
    "Backend Architecture & Microservices",
    "Mobile Applications & Sensor Telemetry",
    "Database Modeling & Performance",
  ],

  problemSolvingApproach:
    "I approach software engineering by decomposing complex requirements into modular, testable components, ensuring database integrity through proper constraints and locking strategies, and prioritizing maintainable code over quick patches.",

  careerObjectives:
    "Seeking a Software Engineering internship where I can contribute to mission-critical systems, collaborate with experienced engineering teams, and expand my technical depth in modern software architecture.",

  // STRICT RULE: Set to false until candidate explicitly confirms availability
  isInternshipAvailable: false,
};


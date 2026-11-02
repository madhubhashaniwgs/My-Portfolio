import { Skill, SkillCategory } from "@/types/portfolio";

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "languages", label: "Programming Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools & DevOps" },
];

export const skillsData: Skill[] = [
  // --- Programming Languages ---
  {
    id: "java",
    name: "Java",
    category: "languages",
    proficiency: "Proficient",
    description: "Strong OOP fundamentals, multithreading, collections framework, and JVM backend development.",
    relatedProjectIds: ["syncreserve"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    proficiency: "Proficient",
    description: "Type-safe application engineering across modern frontend frameworks and Node.js environments.",
    relatedProjectIds: ["assura", "mockmate"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "languages",
    proficiency: "Proficient",
    description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation, and full-stack runtime tooling.",
    relatedProjectIds: ["mockmate"],
  },
  {
    id: "python",
    name: "Python",
    category: "languages",
    proficiency: "Hands-on",
    description: "Scripting, algorithmic problem solving, REST APIs, and backend telemetry processing.",
    relatedProjectIds: ["driveguard"],
  },
  {
    id: "csharp",
    name: "C#",
    category: "languages",
    proficiency: "Hands-on",
    description: "Enterprise backend development with .NET, LINQ queries, and strongly typed REST APIs.",
    relatedProjectIds: ["assura"],
  },

  // --- Frontend ---
  {
    id: "react",
    name: "React",
    category: "frontend",
    proficiency: "Proficient",
    description: "Component-driven architecture, custom hooks, state management, and modern SPA design.",
    relatedProjectIds: ["mockmate"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    proficiency: "Hands-on",
    description: "App Router, React Server Components (RSC), SSR/SSG caching, and production web engineering.",
    relatedProjectIds: [],
  },
  {
    id: "angular",
    name: "Angular",
    category: "frontend",
    proficiency: "Hands-on",
    description: "Modular enterprise UI development with TypeScript, services, dependency injection, and RxJS.",
    relatedProjectIds: ["assura"],
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "frontend",
    proficiency: "Hands-on",
    description: "Cross-platform mobile UI development, state management, and mobile hardware sensor integration.",
    relatedProjectIds: ["driveguard"],
  },

  // --- Backend ---
  {
    id: "springboot",
    name: "Spring Boot",
    category: "backend",
    proficiency: "Proficient",
    description: "Enterprise Java framework: Spring Data JPA, Spring Security, transaction isolation, and REST APIs.",
    relatedProjectIds: ["syncreserve"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    proficiency: "Proficient",
    description: "Asynchronous runtime for server-side applications, modular services, and API controllers.",
    relatedProjectIds: ["mockmate"],
  },
  {
    id: "expressjs",
    name: "Express.js",
    category: "backend",
    proficiency: "Proficient",
    description: "Minimalist web framework for building RESTful endpoints, middleware, and request validation.",
    relatedProjectIds: ["mockmate"],
  },
  {
    id: "aspnetcore",
    name: "ASP.NET Core Web API",
    category: "backend",
    proficiency: "Hands-on",
    description: "High-performance enterprise RESTful APIs, dependency injection, and Entity Framework Core.",
    relatedProjectIds: ["assura"],
  },

  // --- Databases ---
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "databases",
    proficiency: "Proficient",
    description: "Relational modeling, ACID transactions, row-level pessimistic locking, and indexing strategies.",
    relatedProjectIds: ["syncreserve", "mockmate"],
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "databases",
    proficiency: "Hands-on",
    description: "Relational database schema design, normalization, foreign keys, and query optimization.",
    relatedProjectIds: ["assura"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "databases",
    proficiency: "Familiar",
    description: "Document-oriented NoSQL database modeling, BSON schema structures, and aggregation pipelines.",
    relatedProjectIds: [],
  },

  // --- Tools and DevOps ---
  {
    id: "git",
    name: "Git",
    category: "tools",
    proficiency: "Proficient",
    description: "Distributed version control, branch management, merge conflict resolution, and collaborative workflow.",
    relatedProjectIds: ["syncreserve", "mockmate", "assura", "driveguard"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    proficiency: "Proficient",
    description: "Repository hosting, pull requests, code reviews, issue tracking, and GitHub Actions CI pipelines.",
    relatedProjectIds: ["syncreserve", "mockmate", "assura", "driveguard"],
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    proficiency: "Hands-on",
    description: "Containerization of full-stack services, Dockerfile authoring, and multi-container Docker Compose.",
    relatedProjectIds: ["syncreserve"],
  },
  {
    id: "aws",
    name: "AWS",
    category: "tools",
    proficiency: "Familiar",
    description: "Foundational cloud computing services: EC2 virtual servers, S3 storage, and cloud deployment concepts.",
    relatedProjectIds: [],
  },
];


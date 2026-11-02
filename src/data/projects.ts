import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "syncreserve",
    slug: "syncreserve",
    title: "SyncReserve",
    subtitle: "High-Concurrency Event & Seat Reservation System",
    type: "Individual Project",
    category: "Backend / Concurrency",
    description:
      "A concurrent event and seat reservation management platform engineered to eliminate double bookings using database-level pessimistic locking and transactional boundaries.",
    detailedOverview:
      "SyncReserve addresses the challenge of race conditions in ticket and seat reservation systems during sudden traffic spikes. Built with Spring Boot and PostgreSQL, it guarantees transactional consistency, preventing duplicate seat allocations when multiple users attempt concurrent checkouts.",
    problemStatement:
      "In high-demand reservation systems, standard read-then-write operations fail under concurrent user access, resulting in severe data anomalies such as double-booked seats and inventory inconsistency.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Docker",
    ],
    keyHighlights: [
      "Pessimistic locking mechanism (PESSIMISTIC_WRITE) preventing race conditions on shared seat records",
      "Strict transaction isolation boundaries with declarative Spring @Transactional management",
      "Compound unique database constraints safeguarding seat allocation at the schema layer",
      "Role-based access control with stateless JWT authentication and authorization",
      "Containerized deployment configuration using Docker and Docker Compose",
    ],
    architectureOverview:
      "Layered enterprise architecture consisting of REST controllers, transactional service boundaries, JPA repository layer with pessimistic row-locking queries, and PostgreSQL persistence with foreign key cascade guarantees.",
    challengesAndSolutions: [
      {
        challenge:
          "Race conditions occurred when concurrent threads checked seat availability simultaneously before committing the reservation.",
        solution:
          "Applied JPA repository queries with @Lock(LockModeType.PESSIMISTIC_WRITE), forcing subsequent transactions to wait until the acquiring transaction completes.",
      },
      {
        challenge:
          "Risk of deadlocks when acquiring locks across multiple seats in an arbitrary order.",
        solution:
          "Enforced a deterministic ordering strategy when locking multiple seat IDs within a single transaction scope.",
      },
    ],
    lessonsLearned: [
      "Deepened understanding of database lock contention and performance trade-offs versus optimistic concurrency.",
      "Hands-on mastery of transaction boundaries and ACID guarantees in distributed multi-user environments.",
    ],
    status: "Completed",
    githubUrl: "https://github.com/placeholder/syncreserve",
    liveDemoUrl: undefined, // Optional / Not deployed
    featured: true,
  },
  {
    id: "mockmate",
    slug: "mockmate",
    title: "MockMate",
    subtitle: "AI-Powered Technical Interview Preparation Platform",
    type: "Individual Project",
    category: "AI & Web",
    description:
      "An intelligent interview preparation platform that generates context-aware technical questions and provides structured evaluation of candidate responses.",
    detailedOverview:
      "MockMate simulates real-world technical interviews by generating tailored coding and conceptual questions across various domains. It evaluates user responses against evaluation rubrics using the Gemini API and provides targeted feedback to help students prepare for technical evaluations.",
    problemStatement:
      "Undergraduates often lack access to tailored technical mock interviews with structured, objective feedback on their answers before appearing for internship evaluations.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Gemini API",
      "JWT",
    ],
    keyHighlights: [
      "Dynamic prompt engineering to generate domain-specific questions tailored to user difficulty preferences",
      "Automated response evaluation assessing answer correctness, technical clarity, and completeness",
      "Persistent user sessions with JWT authentication and interview history tracking in PostgreSQL",
      "Interactive React SPA interface with real-time feedback and review logs",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Inconsistent LLM output formats making automated response scoring difficult to parse reliably.",
        solution:
          "Structured Gemini API prompts with strict JSON schema response constraints and server-side Zod validation.",
      },
      {
        challenge:
          "Handling API latency while generating feedback without degrading user interface responsiveness.",
        solution:
          "Implemented clear loading skeletons and asynchronous response pipelines on the Node.js backend.",
      },
    ],
    lessonsLearned: [
      "Effective prompt engineering patterns for consistent structured JSON extraction from generative AI models.",
      "Building resilient Node/Express middleware for validation, authentication, and error propagation.",
    ],
    status: "Completed",
    githubUrl: "https://github.com/placeholder/mockmate",
    liveDemoUrl: undefined,
    featured: true,
  },
  {
    id: "assura",
    slug: "assura",
    title: "Assura",
    subtitle: "Enterprise Fixed Asset Management System",
    type: "Second-Year Academic Group Project",
    category: "Full-Stack",
    description:
      "A comprehensive fixed asset management platform supporting organizational asset procurement, assignment, transfers, and maintenance tracking.",
    detailedOverview:
      "Assura was developed as a second-year academic group project at the University of Moratuwa. The system streamlines asset tracking across departments, providing multi-role workflows for employees, division heads, and inventory administrators.",
    problemStatement:
      "Manual and spreadsheet-based asset tracking leads to misplaced inventory, untracked departmental transfers, and lack of accountability across institutional assets.",
    technologies: [
      "Angular",
      "TypeScript",
      "ASP.NET Core Web API",
      "MySQL",
    ],
    myContribution:
      "Designed and implemented the end-to-end Employee and Division Head workflows, including asset request submission, inter-departmental transfers, and asset return lifecycles. Integrated the Angular frontend views with backend ASP.NET Core REST API endpoints and handled form validations and status state transitions.",
    keyHighlights: [
      "Role-based workflows tailored for Employees and Division Heads",
      "Asset lifecycle management from initial requisition through assignment, transfer, and return",
      "High-performance REST API services built with ASP.NET Core and Entity Framework Core",
      "Structured relational database schema normalized to 3NF in MySQL",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Managing multi-stage approval states where transfers required authorization from both releasing and receiving division heads.",
        solution:
          "Implemented state-machine transition validation in ASP.NET Core controllers to prevent unauthorized state jumps.",
      },
      {
        challenge:
          "Synchronizing form states and complex asset tables across Angular components.",
        solution:
          "Utilized Angular reactive forms with custom validators and RxJS observables for data stream management.",
      },
    ],
    lessonsLearned: [
      "Gained practical experience collaborating within an academic engineering team and merging git branches.",
      "Learned architectural principles of ASP.NET Core Web API, dependency injection, and REST client integration in Angular.",
    ],
    status: "Completed",
    githubUrl: "https://github.com/placeholder/assura",
    liveDemoUrl: undefined,
    featured: true,
  },
  {
    id: "driveguard",
    slug: "driveguard",
    title: "DriveGuard",
    subtitle: "Smartphone Sensor Telemetry & Driving Behavior Analyzer",
    type: "Individual Project",
    category: "Mobile / IoT",
    description:
      "A mobile research application capturing smartphone accelerometer and gyroscope data to analyze driving events and motion telemetry.",
    detailedOverview:
      "DriveGuard is an exploratory project investigating how built-in smartphone inertial measurement unit (IMU) sensors can identify driving events such as harsh acceleration, sharp braking, and abrupt cornering.",
    problemStatement:
      "Dedicated telematics hardware units are expensive. Utilizing existing smartphone sensors enables accessible driver behavior monitoring, but requires continuous high-frequency data filtering.",
    technologies: [
      "Flutter",
      "Dart",
      "sensors_plus",
      "Python",
      "FastAPI (Planned)",
    ],
    keyHighlights: [
      "Continuous real-time sampling of tri-axial accelerometer and gyroscope data streams",
      "Low-overhead mobile event detection algorithms for threshold-based motion changes",
      "Local CSV and SQLite logging for sensor calibration and offline metric analysis",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "High frequency sensor sampling causes device battery drain and UI thread stutter.",
        solution:
          "Adjusted sensor sampling intervals and decoupled sensor event streams using Dart background isolates.",
      },
      {
        challenge:
          "Filtering out random phone handling vibrations from actual vehicle movement.",
        solution:
          "Applied basic low-pass filtering logic to damp high-frequency noise from road surface variations.",
      },
    ],
    lessonsLearned: [
      "Practical experience with mobile hardware sensor access and asynchronous stream handling in Flutter.",
      "Understanding signal filtering principles and telemetry data serialization.",
    ],
    status: "In Development",
    statusNote:
      "Sensor collection application implemented in Flutter. Telemetry backend integration with Python & FastAPI is currently planned and in development.",
    githubUrl: "https://github.com/placeholder/driveguard",
    liveDemoUrl: undefined,
    featured: true,
  },
];


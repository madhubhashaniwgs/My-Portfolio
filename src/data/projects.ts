import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
   {
    id: "assura",
    slug: "assura",
    title: "Assura",
    subtitle: "Fixed Asset Management System",
    type: "Group Project",
    category: "Full-Stack",

    description:
      "A fixed asset management system developed as a second-year academic group project at the University of Moratuwa to support asset requests, assignments, transfers, procurement, and tracking.",

    detailedOverview:
      "Assura is an academic group project developed to support fixed asset management workflows within an organization. The application uses Angular and TypeScript for the frontend, ASP.NET Core Web API for backend services, and MySQL for data storage.",

    problemStatement:
      "Managing organizational assets manually can make it difficult to track requests, assignments, transfers, and returns across departments. Assura provides structured workflows to support these asset management activities.",

    technologies: [
      "Angular",
      "TypeScript",
      "ASP.NET Core Web API",
      "MySQL",
      "REST APIs",
    ],

    features: [
      "Employee asset request workflows",
      "Division Head asset request handling",
      "Asset transfers between divisions",
      "Asset return workflows",
      "Frontend integration with backend REST APIs",
    ],

    keyHighlights: [
      "Developed Employee and Division Head workflows",
      "Implemented asset request handling, transfers, and returns",
      "Integrated Angular frontend workflows with ASP.NET Core REST APIs",
      "Contributed to a team-developed enterprise-style asset management application",
    ],

    myContribution:
      "Contributed to this second-year academic group project by implementing Employee and Division Head workflows, including asset request handling, inter-departmental transfers, and asset returns. Integrated Angular frontend workflows with backend ASP.NET Core REST API endpoints.",

    challengesAndSolutions: [
      {
        challenge:
          "Supporting asset management processes that involve multiple workflow stages and departments.",

        solution:
          "Implemented frontend workflows for employee requests, division-level handling, transfers, and returns, integrating them with backend REST APIs.",
      },
    ],

    lessonsLearned: [
      "Collaborating on a full-stack academic group project",
      "Developing frontend applications with Angular and TypeScript",
      "Integrating frontend workflows with ASP.NET Core REST APIs",
      "Working with relational databases and enterprise application workflows",
    ],

    status: "Completed",
    githubUrl: "https://github.com/System-Street-Studio",
    liveDemoUrl: "https://assura-fams.vercel.app/",
    imageUrl: "/images/Assura1.png",
    featured: true,
  },
  {
    id: "syncreserve",
    slug: "syncreserve",
    title: "SyncReserve",
    subtitle: "Concurrent Event and Seat Reservation Platform",
    type: "Individual Project",
    category: "Full-Stack",

    description:
      "A full-stack reservation platform designed to prevent double bookings and maintain data consistency when multiple users attempt to reserve the same seat concurrently.",

    detailedOverview:
      "SyncReserve is an individual software engineering project focused on handling concurrent reservation requests reliably. It uses Java, Spring Boot, and PostgreSQL to manage reservations, with database transactions, pessimistic locking, and unique constraints to protect reservation integrity.",

    problemStatement:
      "In reservation systems, simultaneous requests for the same seat can cause race conditions and duplicate bookings. SyncReserve addresses this challenge through transaction management and database-level safeguards.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Docker",
    ],

    features: [
      "Event and seat reservation management",
      "Database transactions for consistent reservation operations",
      "Pessimistic locking to coordinate concurrent reservation requests",
      "Unique database constraints to prevent duplicate seat reservations",
      "JWT-based authentication",
      "Role-based access control",
      "Dockerized application setup",
    ],

    keyHighlights: [
      "Implemented pessimistic locking using PESSIMISTIC_WRITE",
      "Used Spring transactional boundaries to manage reservation operations",
      "Added database constraints to provide an additional safeguard against duplicate reservations",
      "Integrated JWT authentication and role-based authorization",
      "Prepared the application for containerized execution using Docker",
    ],

    myContribution:
      "Designed and developed the application individually, focusing on reservation processing, database consistency, concurrency control, authentication, authorization, and Docker-based setup.",

    challengesAndSolutions: [
      {
        challenge:
          "Handling simultaneous reservation requests for the same seat without creating duplicate bookings.",

        solution:
          "Used pessimistic database locking, transactional processing, and unique constraints to protect reservation integrity.",
      },
    ],

    lessonsLearned: [
      "Understanding race conditions and concurrent database operations",
      "Applying pessimistic locking and transaction management in Spring Boot",
      "Using database constraints to enforce data integrity",
      "Integrating JWT authentication and authorization",
      "Containerizing a full-stack application with Docker",
    ],

    status: "Completed",
    githubUrl: "https://github.com/madhubhashaniwgs/SyncReserve.git",
    liveDemoUrl: "syncreserve-frontend.vercel.app",
    imageUrl: "/images/SyncReserve.png",
    featured: true,
  },

  {
    id: "mockmate",
    slug: "mockmate",
    title: "MockMate",
    subtitle: "AI-Powered Interview Practice Platform",
    type: "Individual Project",
    category: "Full-Stack",

    description:
      "An AI-powered interview practice application that helps users prepare for interviews by generating questions and evaluating their answers using the Gemini API.",

    detailedOverview:
      "MockMate is a full-stack web application built to support interview preparation through AI-assisted practice. The application combines a React frontend, a Node.js and Express backend, and a PostgreSQL database. The Gemini API is used to generate interview questions and evaluate submitted answers.",

    problemStatement:
      "Preparing for interviews can be challenging without convenient access to practice questions and feedback. MockMate provides an interactive platform for practicing interview questions with AI-assisted answer evaluation.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Gemini API",
      "JWT",
      "bcrypt",
    ],

    features: [
      "AI-generated interview questions",
      "AI-assisted evaluation of submitted answers",
      "React-based user interface",
      "Node.js and Express backend",
      "PostgreSQL database integration",
      "JWT-based authentication",
      "Password hashing with bcrypt",
    ],

    keyHighlights: [
      "Integrated the Gemini API for interview question generation",
      "Used the Gemini API to evaluate user-submitted answers",
      "Developed a full-stack application using React and Node.js",
      "Integrated PostgreSQL for persistent data storage",
      "Implemented authentication using JWT and password hashing with bcrypt",
    ],

    myContribution:
      "Designed and developed the application individually, integrating the frontend, backend, PostgreSQL database, Gemini API functionality, and authentication mechanisms.",

    challengesAndSolutions: [
      {
        challenge:
          "Integrating AI-generated interview content and answer evaluation into a full-stack application.",

        solution:
          "Integrated the Gemini API through the backend to support question generation and answer evaluation.",
      },
    ],

    lessonsLearned: [
      "Integrating external AI APIs into web applications",
      "Building REST-based full-stack applications",
      "Connecting a React frontend with a Node.js and Express backend",
      "Working with PostgreSQL for persistent data storage",
      "Implementing authentication using JWT and bcrypt",
    ],

    status: "Completed",
    githubUrl: "https://github.com/madhubhashaniwgs/MockMate.git",
    liveDemoUrl: "https://mockmate-frontend-delta.vercel.app",
    imageUrl: "/images/Mockmate.png",
    featured: true,
  },
  {
    id: "personal-portfolio",
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "Responsive Portfolio for Software Engineering",
    type: "Individual Project",
    category: "Frontend",

    description:
      "A modern, responsive personal portfolio website showcasing my technical skills, software projects, education, certifications, and extracurricular activities.",

    detailedOverview:
      "Designed and developed a personal portfolio website to present my software engineering journey, technical experience, academic background, and projects through a structured and interactive interface.",

    problemStatement:
      "A traditional CV provides limited space to demonstrate technical projects and development experience. This portfolio provides a dedicated platform to showcase projects, technical skills, and professional achievements in greater detail.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    features: [
    "Fully responsive layout optimized for desktop, tablet, and mobile devices",
    "Dark and light mode theme switching capabilities",
    "Interactive project showcase with detailed view modals",
    "Categorized technical skills section with official brand technology icons",
    "Comprehensive education, academic coursework, and certifications display", 
    "Direct contact integration with social media and email links",
    "Smooth scroll navigation and active section tracking",
  ],

  keyHighlights: [
    "Engineered a modular component architecture using Next.js and React",
    "Structured portfolio data cleanly using TypeScript types and interfaces",
    "Implemented interactive UI animations, glassmorphism design, and custom gradients",
    "Created dedicated detail modals for each project with architectural overviews",
    "Optimized web performance and responsive styling via Tailwind CSS",
  ],

  myContribution:
    "Individually designed and developed the entire portfolio website from scratch using Next.js, React, TypeScript, and Tailwind CSS. Focused heavily on modern UI/UX design principles, responsive layout structuring, interactive components, and clean code maintainability.",

    challengesAndSolutions: [
      {
        challenge:
          "Presenting projects, technical skills, education, and extracurricular activities in a consistent and user-friendly interface.",

        solution:
          "Organized the portfolio into reusable components and structured data modules to improve consistency and maintainability.",
      },
    ],

    lessonsLearned: [
      "Building responsive user interfaces with Next.js and Tailwind CSS",
      "Creating reusable React components",
      "Structuring application data with TypeScript",
      "Designing user-friendly layouts and interactive elements",
    ],

    status: "Completed",
    githubUrl: "https://github.com/madhubhashaniwgs/My-Portfolio.git",
    liveDemoUrl: "",
    imageUrl: "/images/Portfolio1.png",
    featured: true,
  },
  {
    id: "driveguard",
    slug: "driveguard",
    title: "DriveGuard",
    subtitle: "Smartphone Sensor-Based Driving Monitor",
    type: "Individual Project",
    category: "Mobile",

    description:
      "A Flutter mobile application that collects smartphone motion sensor data and analyzes movement patterns to support driving-related monitoring.",

    detailedOverview:
      "DriveGuard is a mobile application project built with Flutter and Dart. It uses the smartphone's built-in accelerometer and gyroscope to collect motion data. The project focuses on real-time sensor monitoring, sensor data recording, filtering, and calculating movement-related metrics, with backend integration planned for future development.",

    problemStatement:
      "Understanding vehicle movement patterns can be challenging without accessible motion data. DriveGuard explores how built-in smartphone sensors can be used to collect and process motion data without requiring external sensor hardware.",

    technologies: [
      "Flutter",
      "Dart",
      "sensors_plus",
      "Smartphone Accelerometer",
      "Smartphone Gyroscope",
      "Python",
      "FastAPI",
      "REST API",
    ],

    features: [
      "Real-time accelerometer data collection",
      "Live gyroscope readings",
      "Recording of raw motion sensor data",
      "Sensor data filtering and processing",
      "Gravity estimation for motion analysis",
      "Calculation of acceleration and angular velocity metrics",
      "Designed for smartphone-only sensor data collection",
    ],

    keyHighlights: [
      "Integrated smartphone accelerometer and gyroscope streams using Flutter",
      "Implemented sensor data recording for testing and analysis",
      "Developed separate components for sensor services, data models, filtering, and metrics",
      "Explored gravity estimation and linear acceleration calculations",
      "Designed the application architecture with future backend integration in mind",
    ],

    myContribution:
      "Individually developed the Flutter application and implemented smartphone sensor data collection, sensor data recording, filtering, gravity estimation, and motion-related metric calculations.",

    challengesAndSolutions: [
      {
        challenge:
          "Raw smartphone sensor readings can fluctuate even when the device is stationary.",

        solution:
          "Developed sensor filtering and gravity estimation components to support more meaningful motion-related calculations.",
      },
      {
        challenge:
          "Managing sensor streams and processing their readings in a maintainable application structure.",

        solution:
          "Separated sensor services, data models, recording, filtering, and metrics calculations into dedicated components.",
      },
    ],

    lessonsLearned: [
      "Working with smartphone hardware sensors in Flutter",
      "Handling asynchronous sensor streams",
      "Recording and processing time-series sensor data",
      "Structuring a mobile application using separate service and data components",
      "Understanding acceleration, gravity, and angular velocity measurements",
    ],

    status: "Ongoing",
    githubUrl: "https://github.com/madhubhashaniwgs/DriveGuard.git",
    liveDemoUrl: "",
    imageUrl: "/images/DriveGuard.jpeg",
    featured: true,
  },
  {
    id: "pacman-live",
    slug: "pacman-live",
    title: "Pac-Man live",
    subtitle: "IoT-Based Pac-Man Game",
    type: "Group Project",
    category: "IoT",

    description:
      "The Pac-Man live project is a hardware-based game project that explores embedded programming and hardware interaction using microcontroller platforms.",

    detailedOverview:
      "Pac-Man Live is a hardware-based game project developed using microcontroller platforms, including ESP32 and Arduino Nano. The project explores embedded programming and the integration of hardware components to implement a Pac-Man-inspired gaming experience.",

    problemStatement:
      "Developing interactive hardware-based games requires combining programming logic with microcontroller capabilities. This project explores how embedded platforms can be used to create an interactive gaming application.",

    technologies: [
      "ESP32",
      "Arduino Nano",
      "Embedded C/C++",
     
    ],

    features: [
      "Pac-Man-inspired gaming concept",
      "Microcontroller-based game implementation",
      "Embedded programming",
      "Hardware and software integration",
    ],

    keyHighlights: [
      "Explored game development using microcontroller platforms",
      "Worked with ESP32 and Arduino Nano",
      "Applied embedded programming concepts",
      "Explored hardware and software integration in an interactive project",
    ],

    myContribution:
      "Worked on the development of a Pac-Man-inspired Live game project using microcontroller platforms, applying embedded programming concepts and exploring hardware-software integration.",

    challengesAndSolutions: [
      {
        challenge:
          "Implementing an interactive game using the limited resources of a microcontroller platform.",

        solution:
          "Explored microcontroller-based development to implement the gaming concept within an embedded hardware environment.",
      },
    ],

    lessonsLearned: [
      "Fundamentals of embedded systems development",
      "Working with ESP32 and Arduino Nano platforms",
      "Understanding hardware-software integration",
      "Applying programming concepts to an interactive hardware project",
    ],

    status: "Completed",
    githubUrl: "",
    liveDemoUrl: "",
    imageUrl: "/images/Pacman-Live.jpg",
    featured: false,
  },

];
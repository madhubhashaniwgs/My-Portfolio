import { Education } from "@/types/portfolio";

export const educationData: Education = {
  institution: "University of Moratuwa",
  faculty: "Faculty of Information Technology",
  degree: "Bachelor of Science Honours in Information Technology",
  cgpa: "3.53",
  maxCgpa: "4.00",
  academicPeriod: "2024 - Present",
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Computer Networks",
    "Software Engineering",
    "Operating Systems",
    "Object-Oriented Analysis & Design",
    "Web Technologies",
  ],
  academicProjectsSummary:
    "Pac-Man (an embedded systems game project using ESP32 and Arduino Nano) and Assura (Fixed Asset Management System with Angular & ASP.NET Core).",
  items: [
    {
      id: "mora-it",
      degree: "Bachelor of Science Honours in Information Technology",
      institution: "University of Moratuwa",
      faculty: "Faculty of Information Technology",
      logoUrl: "/images/uni-logo.webp",
      period: "2024 - Present",
      cgpa: "3.53 / 4.00",
      coursework: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Computer Networks",
        "Software Engineering",
        "Operating Systems",
        "Object-Oriented Analysis & Design",
        "Web Technologies",
      ],
      highlight: "Building a strong foundation in Software Engineering through academic coursework and hands-on projects",
    },
    {
      id: "school-al",
      degree: "G.C.E. Advanced Level (Physical Science Stream)",
      institution: "ST. Thomas' Girls High School Matara",
      logoUrl: "/images/school-logo.webp",
      period: "2019 - 2022",
      coursework: [
        "Chemistry - A",
        "Physics - A",
        "Combined Mathematics - B",
        "Z-Score: 1.9575",
        "District Rank: 29",
      ],
      highlight: "Developed analytical thinking, mathematical reasoning, and problem-solving skills through the Physical Science stream.",
    },
   
  ],
};

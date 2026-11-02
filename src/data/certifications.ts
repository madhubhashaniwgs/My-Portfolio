import { Certification } from "@/types/portfolio";

export const certificationsData: Certification[] = [
  {
    id: "hackerrank-java-basic",
    title: "Java (Basic)",
    issuingOrganization: "HackerRank",
    issueDate: "Verified Skill Assessment",
    credentialId: "[HackerRank Credential ID]",
    verificationUrl: "https://www.hackerrank.com/certificates/",
    category: "Verified Skill Assessment",
    skillsCovered: [
      "Java Core Language",
      "Object-Oriented Programming",
      "Inheritance & Polymorphism",
      "Exception Handling",
      "Java Collections",
    ],
  },
  {
    id: "hackerrank-sql-basic",
    title: "SQL (Basic)",
    issuingOrganization: "HackerRank",
    issueDate: "Verified Skill Assessment",
    credentialId: "[HackerRank Credential ID]",
    verificationUrl: "https://www.hackerrank.com/certificates/",
    category: "Verified Skill Assessment",
    skillsCovered: [
      "Relational Queries",
      "INNER, LEFT, RIGHT JOINs",
      "Aggregations (GROUP BY, HAVING)",
      "Subqueries & Filtering",
      "Data Manipulation",
    ],
  },
];


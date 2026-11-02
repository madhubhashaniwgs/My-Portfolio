import { Activity } from "@/types/portfolio";

export const activityTags = [
  "Leadership",
  "Teamwork",
  "Communication",
  "Collaboration",
  "Responsibility",
];

export const activitiesData: Activity[] = [
  {
    id: "ieee-wie-uom",
    title: "Leadership & Committee Involvement",
    organization: "IEEE Women in Engineering (WIE) UOM",
    institution: "University of Moratuwa",
    roles: [
      "Membership Development Committee Member (2026)",
      "Logistics Lead – Futuro 6.0 (2026)",
      "Logistics Committee Member – Hackelight 2.0 (2025)",
    ],
    category: "Leadership",
    year: "2025 – 2026",
    description:
      "Active involvement in organizing technical initiatives, managing logistics for major events, and contributing to community development programs.",
  },
  {
    id: "careerx",
    title: "Session Organizing Committee Member – CareerX",
    organization: "IEEE Professional Communication Society UOM",
    institution: "University of Moratuwa",
    roles: ["Session Organizing Committee Member - CareerX (2026)"],
    category: "Society",
    year: "2026",
    description:
      "Supporting session organization and coordination for the CareerX initiative.",
  },
  {
    id: "resume-centre",
    title: "Delegates Handling Committee Member",
    organization: "Rotaract Club of University of Moratuwa",
    institution: "University of Moratuwa",
    roles: ["Delegates Handling Committee Member - Resume Centre Official Career Fair (2026)"],
    category: "Volunteer",
    year: "2026",
    description:
      "Contributing to delegate handling and coordination.",
  },
];

export function hasActivities(): boolean {
  return activitiesData.length > 0;
}
export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  category: "Backend & Concurrency" | "System Design" | "DevOps & Containers" | "Mobile & Telemetry";
  tags: string[];
  content: string; // Structured markdown or formatted sections
}


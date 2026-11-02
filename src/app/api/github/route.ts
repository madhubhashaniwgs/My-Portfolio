import { NextResponse } from "next/server";
import { projectsData } from "@/data/projects";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    // Return structured project repositories with fallback
    const repoSummaries = projectsData.map((project) => ({
      name: project.title,
      description: project.description,
      language: project.technologies[0] || "Code",
      stars: 0,
      url: project.githubUrl,
      type: project.type,
      status: project.status,
    }));

    return NextResponse.json({
      success: true,
      repositories: repoSummaries,
      source: "cached_portfolio_registry",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to fetch GitHub repository data" },
      { status: 500 }
    );
  }
}


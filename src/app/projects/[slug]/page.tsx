import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Clock,
  Code2,
} from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | SWE Portfolio`,
    description: project.description,
  };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Top Navigation & Breadcrumbs */}
      <div>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-aurora-purple transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        {/* Case Study Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-aurora-purple/10 text-aurora-purple border border-aurora-purple/20">
              {project.type}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border text-muted-foreground">
              {project.category}
            </span>
            {project.status === "Completed" ? (
              <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <CheckCircle className="w-3 h-3" />
                <span>Completed</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <Clock className="w-3 h-3" />
                <span>{project.status}</span>
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-aurora-cyan font-mono">
            {project.subtitle}
          </p>

          <p className="text-base text-muted-foreground max-w-3xl leading-relaxed pt-2">
            {project.detailedOverview}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-foreground hover:border-aurora-purple/50 text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4 text-aurora-purple" />
                <span>Source Code Repository</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-aurora-gradient text-white text-xs font-medium shadow-sm hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6 border-t border-border/50">
        {/* Left 2 Cols: Technical Deep Dive */}
        <div className="lg:col-span-2 space-y-10">
          {/* Problem Statement */}
          <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Problem Statement & Context</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          {/* Individual Contribution if group project */}
          {project.myContribution && (
            <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-3 border-aurora-purple/30 bg-gradient-to-br from-surface to-aurora-purple/5">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Code2 className="w-5 h-5 text-aurora-purple" />
                <span>My Specific Contribution</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.myContribution}
              </p>
            </section>
          )}

          {/* Scope Boundaries if in-development */}
          {project.statusNote && (
            <section className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-2">
              <h2 className="text-sm font-bold text-amber-600 dark:text-amber-400">
                Scope & In-Development Boundaries
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.statusNote}
              </p>
            </section>
          )}

          {/* Architecture Highlights */}
          {project.architectureOverview && (
            <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-3">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Layers className="w-5 h-5 text-aurora-indigo" />
                <span>Architecture & System Design</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.architectureOverview}
              </p>
            </section>
          )}

          {/* Technical Challenges & Solutions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-aurora-cyan" />
              <span>Engineering Challenges & Implemented Solutions</span>
            </h2>
            <div className="space-y-4">
              {project.challengesAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl space-y-3 border border-border/70"
                >
                  <div className="text-xs font-mono text-red-500 dark:text-red-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Challenge #{idx + 1}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {item.challenge}
                  </p>
                  <div className="pt-2 border-t border-border/40 text-xs text-muted-foreground space-y-1">
                    <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                      Solution Implemented:
                    </span>
                    <p className="leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-lg font-bold text-foreground">
              Key Lessons Learned
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-aurora-purple shrink-0 mt-0.5" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Col: Metadata, Tech Stack, & Quick Facts */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl space-y-4 sticky top-28">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-surface border border-border/80 text-xs font-mono text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-border/50 space-y-3 text-xs">
              <div>
                <span className="text-muted-foreground block">Project Classification</span>
                <span className="font-medium text-foreground">{project.type}</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Domain Area</span>
                <span className="font-medium text-foreground">{project.category}</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Status</span>
                <span className="font-medium text-foreground">{project.status}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <Link
                href="/#projects"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-surface hover:bg-muted/30 text-foreground text-xs font-medium transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Projects List</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


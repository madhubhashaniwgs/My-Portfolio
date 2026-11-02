"use client";

import * as React from "react";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/portfolio";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import {
  ExternalLink,
  Github,
  CheckCircle,
  X,
  Info,
} from "lucide-react";

// Updated Filter categories matching your project types/categories
const FILTER_CATEGORIES = ["All", "Full-Stack", "Frontend", "Mobile" , "Backend", "IoT"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = React.useState<string>("All");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  // Fixed filtering logic (checks both category and type fields to prevent mismatch)
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return (
      project.category?.toLowerCase() === activeFilter.toLowerCase() ||
      project.type?.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  const getStatusLabel = (status: string | undefined) => {
    if (!status) return "In Progress";
    switch (status.toLowerCase()) {
      case "completed":
        return "Completed";
      case "ongoing":
      case "in progress":
        return "Ongoing";
      default:
        return status;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border/40 scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* Section Header */}
        <RevealOnScroll className="flex flex-col items-center text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-500/20">
            SELECTED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            My <span className="text-cyan-600 dark:text-cyan-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl pt-1 leading-relaxed">
            A showcase of projects spanning Full-Stack, Web Development, and Mobile Engineering, demonstrating my passion for building practical and impactful software.
          </p>
        </RevealOnScroll>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20 font-bold"
                  : "bg-surface/80 border border-border/80 text-muted-foreground hover:text-foreground hover:border-cyan-500/50 dark:hover:border-cyan-400/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-28">
          {filteredProjects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, "0");
            const isEven = index % 2 === 1;

            return (
              <RevealOnScroll key={project.id}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  
                  {/* Text Details */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      
                      {/* Individual / Group Project Badge */}
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 font-medium">
                        {project.type}
                      </span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 dark:border-emerald-500/20 ml-auto">
                        {getStatusLabel(project.status)}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        {/* Heading gradient with improved light mode contrast */}
                        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-700 dark:from-purple-500 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        <span className="text-3xl font-mono font-extrabold text-muted-foreground/20">
                          {projectNumber}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-surface/80 border border-border/70 text-xs font-mono text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] text-xs font-bold transition-all cursor-pointer shadow-sm"
                      >
                        <Info className="w-4 h-4" />
                        <span>View Details</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground hover:border-cyan-500 dark:hover:border-cyan-400 text-xs font-semibold transition-all cursor-pointer shadow-sm"
                        >
                          <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground hover:border-cyan-500 dark:hover:border-cyan-400 text-xs font-semibold transition-all cursor-pointer shadow-sm"
                        >
                          <ExternalLink className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
             
                  {/* Mockup / Image Preview Box with Top Corner Badge */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl bg-black/60 border border-border/80 overflow-hidden shadow-2xl hover:border-cyan-500/40 transition-all group">
                      
                      <div className="px-4 py-3 bg-surface/90 border-b border-border/60 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[11px] font-mono text-muted-foreground truncate max-w-[200px]">
                          {project.title}
                        </span>
                      </div>

                      {/* Image Container */}
                      <div className="relative w-full h-[280px] sm:h-[340px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-cyan-500/[0.06] overflow-hidden">
                        
                        {/* Top Left Corner Badge */}
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-cyan-600 dark:bg-cyan-500 text-[10px] font-mono font-bold text-white shadow-md">
                          {project.category} {project.category === "Mobile" ? "App" : "Platform"}
                        </div>

                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center space-y-4 p-6">
                            <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-mono font-bold text-2xl shadow-inner group-hover:scale-105 transition-transform">
                              {project.title.substring(0, 2).toUpperCase()}
                            </div>
                            <h4 className="font-bold text-foreground text-lg">{project.title}</h4>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />

          <div className="relative glass-panel max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl border border-border p-6 sm:p-8 shadow-2xl space-y-6 z-10 text-left">
            <div className="flex items-start justify-between pb-4 border-b border-border/50">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-medium">
                    {selectedProject.type}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 font-medium">
                    {selectedProject.category}
                  </span>
                  {/* Status inside Modal */}
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 dark:border-emerald-500/20">
                    {getStatusLabel(selectedProject.status)}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground pt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                type="button"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Overview & Architecture
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedProject.detailedOverview || selectedProject.description}
              </p>
            </div>

            {selectedProject.myContribution && (
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 space-y-1 text-xs">
                <span className="font-bold text-cyan-600 dark:text-cyan-400 block">
                  My Specific Contribution:
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.myContribution}
                </p>
              </div>
            )}

            {selectedProject.features && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Key Implemented Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-surface border border-border text-xs font-mono text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-foreground hover:border-cyan-500 dark:hover:border-cyan-400 text-xs font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>View GitHub</span>
                  </a>
                )}
                {selectedProject.liveDemoUrl && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold shadow-sm hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
"use client";

import * as React from "react";
import { profileData } from "@/data/profile";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import {
  Code2,
  Database,
  Server,
  GraduationCap,
  GitBranch,
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      tag: "Web Development",
      description:
        "Building user-focused web applications by integrating responsive frontends with backend services and REST APIs.",
    },
    {
      icon: Server,
      title: "Backend Engineering",
      tag: "Java & Spring Boot",
      description:
        "Developing backend applications with a focus on object-oriented design, maintainable code, authentication, and reliable business logic.",
    },
    {
      icon: Database,
      title: "Databases & APIs",
      tag: "Data Management",
      description:
        "Working with relational databases, data modelling, SQL queries, and REST API integration to support application functionality.",
    },
    {
      icon: GitBranch,
      title: "Problem Solving",
      tag: "Continuous Learning",
      description:
        "Strengthening software engineering fundamentals through practical projects, debugging, version control, and learning new technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-t border-border/40 scroll-mt-20"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header (Centered like other sections) */}
        <RevealOnScroll className="flex flex-col items-center text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-500/20">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Building Practical, <span className="text-cyan-600 dark:text-cyan-400">Reliable Software</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground pt-1 leading-relaxed">
            An IT undergraduate passionate about software engineering, full-stack development, and building practical solutions to real-world problems.
          </p>
        </RevealOnScroll>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Full Bio & Academic Card */}
          <RevealOnScroll className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed glass-panel p-6 sm:p-8 rounded-2xl border border-border/70 shadow-xl">
              {profileData.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Academic Credential Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-border/70 shadow-xl space-y-4 transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors shadow-sm">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-600 dark:from-purple-500 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent transition-all">
                    University of Moratuwa
                  </h3>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                    Faculty of Information Technology
                  </p>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <p className="text-sm sm:text-base font-semibold text-foreground">
                  BSc (Hons) in Information Technology
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  2024 – Present
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20">
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    Current CGPA
                  </span>
                  <p className="text-base font-bold text-cyan-600 dark:text-cyan-400">
                    3.53 / 4.00
                  </p>
                </div>

                <p className="flex-1 min-w-[180px] text-xs text-muted-foreground leading-relaxed">
                  Developing a strong foundation in software engineering, algorithms, databases, and full-stack application development.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Professional Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <RevealOnScroll key={item.title}>
                  <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-border/70 shadow-xl transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-cyan-500/[0.04] hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] group">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-medium">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-600 dark:from-purple-500 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent transition-all">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
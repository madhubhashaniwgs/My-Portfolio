"use client";

import * as React from "react";
import { activitiesData, activityTags } from "@/data/activities";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Users, Briefcase, Mountain, Trophy, CheckCircle2 } from "lucide-react";

export function ActivitiesSection() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Society":
        return <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "Leadership":
        return <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "Volunteer":
        return <Mountain className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "Sports":
        return <Trophy className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      default:
        return <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="activities" className="py-16 md:py-24 border-t border-border/40 scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header (Centered) */}
        <RevealOnScroll className="flex flex-col items-center text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-500/20">
            BEYOND ACADEMICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Activities & <span className="text-cyan-600 dark:text-cyan-400">Leadership</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl pt-1 leading-relaxed">
            I value teamwork, collaboration, and taking responsibility beyond technical projects. My involvement in university clubs has helped me develop communication, coordination, and leadership skills.
          </p>
        </RevealOnScroll>

        {/* Competencies Badges Row (Centered) */}
        <div className="flex flex-wrap justify-center gap-2">
          {activityTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-surface/80 border border-border/80 text-foreground shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* Grid of Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {activitiesData.map((activity) => (
            <div
              key={activity.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-border/70 shadow-xl flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-cyan-500/[0.04] hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 border-b border-border/50 pb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors">
                    {getIcon(activity.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-600 dark:from-purple-500 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent transition-all leading-snug">
                      {activity.organization}
                    </h3>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-0.5 flex items-center gap-1">
                      <span>{activity.institution || "Extracurricular Involvement"}</span>
                      {activity.year && <span>• {activity.year}</span>}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Role & Contribution:
                  </span>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {activity.roles.map((role, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activity.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {activity.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
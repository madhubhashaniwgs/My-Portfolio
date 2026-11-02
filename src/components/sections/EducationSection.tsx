"use client";

import * as React from "react";
import Image from "next/image";
import { educationData } from "@/data/education";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-border/40 scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header (Centered like Skills & Certificates) */}
        <RevealOnScroll className="flex flex-col items-center text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-500/20">
            EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Academic Qualifications & <span className="text-cyan-600 dark:text-cyan-400">Coursework</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl pt-1">
            My academic journey and core coursework building a strong foundation in Information Technology and software engineering.
          </p>
        </RevealOnScroll>

        {/* Education Cards Stack */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.items.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-border/70 shadow-xl space-y-6 transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] group"
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border/50 pb-6">
                <div className="flex items-start gap-4">
                  {/* Institute Logo / Graduation Cap Fallback */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 flex items-center justify-center shrink-0 overflow-hidden text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors shadow-sm">
                    {item.logoUrl ? (
                      <Image
                        src={item.logoUrl}
                        alt={item.institution}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-600 dark:from-purple-500 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                      {item.institution} {item.faculty ? `• ${item.faculty}` : ""}
                    </p>
                    {item.highlight && (
                      <p className="text-xs text-muted-foreground mt-1 max-w-2xl leading-relaxed">
                        {item.highlight}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{item.period}</span>
                  </span>
                  {item.cgpa && (
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                      CGPA: {item.cgpa}
                    </span>
                  )}
                </div>
              </div>

              {/* Coursework & Modules Pills */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Key Coursework & Modules:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface/70 border border-border/60 text-xs text-muted-foreground group-hover:border-cyan-500/50 group-hover:text-foreground transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{course}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
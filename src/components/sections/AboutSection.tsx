"use client";

import * as React from "react";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { toast } from "@/hooks/useToast";
import {
  GraduationCap,
  Target,
  Wrench,
  Compass,
  Download,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export function AboutSection() {
  const handleDownloadCv = () => {
    toast({
      title: "Downloading Curriculum Vitae",
      description: "Saved resume-placeholder.pdf to your device.",
      type: "success",
    });
  };

  return (
    <section id="about" className="py-20 border-t border-border/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <RevealOnScroll className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aurora-purple/10 border border-aurora-purple/20 text-aurora-purple text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Mindset & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="aurora-gradient-text">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Academic foundation, core engineering principles, and preparation for industry impact.
          </p>
        </RevealOnScroll>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic & Personal Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-aurora-purple" />
                <span>Academic Foundation</span>
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {profileData.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Academic Highlight Pill */}
              <div className="pt-4 mt-2 border-t border-border/50 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <span className="text-muted-foreground">Institution: </span>
                  <span className="font-semibold text-foreground">{profileData.institution}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">CGPA: </span>
                  <span className="font-bold text-aurora-cyan">{educationData.cgpa} / {educationData.maxCgpa}</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Problem Solving Approach */}
            <RevealOnScroll delay={0.1} className="glass-panel p-6 sm:p-8 rounded-2xl space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Wrench className="w-5 h-5 text-aurora-indigo" />
                <span>Problem-Solving Approach</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {profileData.problemSolvingApproach}
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Column: Focus Areas & Career Objectives (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Interests */}
            <RevealOnScroll delay={0.15} className="glass-panel p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-aurora-cyan" />
                <span>Technical Interests</span>
              </h3>
              <div className="space-y-2.5">
                {profileData.coreInterests.map((interest, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-aurora-purple shrink-0 mt-0.5" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Career Objective & CV CTA */}
            <RevealOnScroll delay={0.2} className="glass-panel p-6 rounded-2xl space-y-4 border-aurora-purple/20 bg-gradient-to-br from-surface to-aurora-purple/5">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <Target className="w-4 h-4 text-aurora-purple" />
                <span>Internship Objective</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {profileData.careerObjectives}
              </p>

              <div className="pt-2">
                <a
                  href={profileData.resumeDownloadUrl}
                  download
                  onClick={handleDownloadCv}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-aurora-gradient text-white font-medium text-xs shadow-sm hover:opacity-90 transition-opacity"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

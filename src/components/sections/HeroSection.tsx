"use client";

import * as React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { TypewriterRotating } from "@/components/animations/TypewriterRotating";
import { toast } from "@/hooks/useToast";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
  Terminal,
  Code2,
  Database,
  Layers,
  Cpu,
} from "lucide-react";

export function HeroSection() {
  const handleDownloadCv = () => {
    toast({
      title: "Downloading Curriculum Vitae",
      description: "Saved resume-placeholder.pdf to your device.",
      type: "success",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center py-12 md:py-20"
    >
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        {/* Academic / Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aurora-purple/30 bg-surface/70 backdrop-blur-md shadow-sm text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-aurora-cyan animate-pulse" />
          <span className="text-muted-foreground">{profileData.institution}</span>
          <span className="text-border">|</span>
          <span className="aurora-gradient-text font-semibold">{profileData.degree}</span>
        </div>

        {/* Main Headline with Rotating Phrases */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12]">
            {profileData.headline.primary}
            <br />
            <span className="text-foreground">Solving with </span>
            <TypewriterRotating phrases={profileData.rotatingPhrases} />
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-2">
            {profileData.shortBio}
          </p>
        </div>

        {/* Call to Actions & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-aurora-gradient text-white font-medium text-sm shadow-lg shadow-aurora-purple/20 hover:opacity-95 hover:shadow-aurora-purple/30 transition-all duration-200"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={profileData.resumeDownloadUrl}
            download
            onClick={handleDownloadCv}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/80 bg-surface/80 hover:bg-surface text-foreground font-medium text-sm transition-all duration-200 shadow-sm"
          >
            <Download className="w-4 h-4 text-aurora-purple" />
            <span>Download CV</span>
          </a>

          <div className="flex items-center gap-2 pl-2">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border/80 bg-surface/60 hover:bg-surface hover:text-aurora-purple text-muted-foreground transition-all duration-200 shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border/80 bg-surface/60 hover:bg-surface hover:text-aurora-cyan text-muted-foreground transition-all duration-200 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Distinctive Developer Visual / Interactive Teaser */}
        <div className="pt-10 max-w-2xl mx-auto w-full">
          <div className="relative rounded-2xl p-1 bg-gradient-to-r from-aurora-purple/30 via-aurora-indigo/20 to-aurora-cyan/30 shadow-2xl">
            <div className="rounded-xl bg-surface/90 backdrop-blur-xl border border-border/60 p-5 text-left font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-aurora-purple" />
                  <span>developer@uom:~$</span>
                </div>
                <span className="text-[10px] text-muted-foreground">bash</span>
              </div>

              <div className="space-y-1.5 text-muted-foreground">
                <p>
                  <span className="text-aurora-purple font-semibold">const</span> candidate = &#123;
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-400">&apos;Software Engineering Intern&apos;</span>,
                </p>
                <p className="pl-4">
                  university: <span className="text-emerald-400">&apos;University of Moratuwa, Sri Lanka&apos;</span>,
                </p>
                <p className="pl-4">
                  cgpa: <span className="text-aurora-cyan font-bold">&apos;3.53 / 4.00&apos;</span>,
                </p>
                <p className="pl-4">
                  coreFocus: [<span className="text-aurora-sky">&apos;Java&apos;</span>, <span className="text-aurora-sky">&apos;Spring Boot&apos;</span>, <span className="text-aurora-sky">&apos;PostgreSQL&apos;</span>, <span className="text-aurora-sky">&apos;React&apos;</span>, <span className="text-aurora-sky">&apos;Docker&apos;</span>]
                </p>
                <p>&#125;;</p>
              </div>

              {/* Floating Tech Badges Bar */}
              <div className="pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-aurora-purple" />
                  <span>Concurrency & Locks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-aurora-indigo" />
                  <span>Transactional Integrity</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-aurora-cyan" />
                  <span>Full-Stack APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

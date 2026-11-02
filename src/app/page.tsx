import Link from "next/link";
import { ArrowRight, Code2, Sparkles, Terminal, Laptop } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Foundation Hero Placeholder */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center py-16 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aurora-purple/30 bg-aurora-purple/10 text-aurora-purple text-xs font-mono tracking-wide">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-aurora-cyan" />
          <span>{profileData.institution} • {profileData.degree}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Building <span className="aurora-gradient-text">Digital Experiences</span>.{" "}
          Solving Real-World Problems.
        </h1>

        <p className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {profileData.shortBio}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-aurora-gradient text-white font-medium text-sm shadow-lg shadow-aurora-purple/20 hover:opacity-95 transition-all duration-200"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={profileData.resumeDownloadUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-surface/60 hover:bg-surface text-foreground font-medium text-sm transition-all duration-200"
          >
            <span>Download CV</span>
          </a>
        </div>

        {/* Foundation verification card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-12 text-left">
          <div className="glass-panel p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-aurora-purple/15 text-aurora-purple flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Midnight Aurora Theme</h3>
            <p className="text-sm text-muted-foreground">
              Fully calibrated Dark and Light modes with zero-flashing theme persistence and WCAG-compliant contrast.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-aurora-indigo/15 text-aurora-indigo flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Responsive Layout</h3>
            <p className="text-sm text-muted-foreground">
              Mobile-first navigation drawer, sticky glassmorphic navbar with active section observer, and progress indicator.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-aurora-cyan/15 text-aurora-cyan flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Architecture Ready</h3>
            <p className="text-sm text-muted-foreground">
              Modular structure established for command palette, developer terminal, project case studies, and MDX engine.
            </p>
          </div>
        </div>
      </section>

      {/* Anchor targets for section navigation verification */}
      <section id="about" className="py-20 border-t border-border/40">
        <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
        <p className="text-muted-foreground mt-2">Section placeholder ready for Phase 3 core implementation.</p>
      </section>

      <section id="skills" className="py-20 border-t border-border/40">
        <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
        <p className="text-muted-foreground mt-2">Section placeholder ready for Phase 3 core implementation.</p>
      </section>

      <section id="projects" className="py-20 border-t border-border/40">
        <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-muted-foreground mt-2">Section placeholder ready for Phase 3 core implementation.</p>
      </section>

      <section id="education" className="py-20 border-t border-border/40">
        <h2 className="text-2xl font-bold tracking-tight">Education & Coursework</h2>
        <p className="text-muted-foreground mt-2">Section placeholder ready for Phase 3 core implementation.</p>
      </section>

      <section id="certifications" className="py-20 border-t border-border/40">
        <h2 className="text-2xl font-bold tracking-tight">Certifications & Courses</h2>
        <p className="text-muted-foreground mt-2">Section placeholder ready for Phase 3 core implementation.</p>
      </section>

      <section id="contact" className="py-20 border-t border-border/40">
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        <p className="text-muted-foreground mt-2">Section placeholder ready for Phase 3 core implementation.</p>
      </section>
    </div>
  );
}


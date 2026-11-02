"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CommandPaletteModal } from "@/components/command-palette/CommandPaletteModal";
import { IntroLoader } from "@/components/sections/IntroLoaderSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Intro Loader එක screen එක උඩින් පෙන්වයි */}
      {loading && <IntroLoader onFinish={() => setLoading(false)} />}

      {/* Main Sections - loading එක complete වුණාම පේන්න පටන් ගනී */}
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ActivitiesSection />
        <ContactSection />
        <CommandPaletteModal />
      </div>
    </div>
  );
}
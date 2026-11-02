"use client";

import * as React from "react";
import { skillsData, skillCategories } from "@/data/skills";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import {
  Code,
  Layers,
  Server,
  Database,
  Wrench,
  CheckCircle,
} from "lucide-react";

import {
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiSharp,
  SiCplusplus,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiDotnet,
  SiC,
} from "react-icons/si";

export function SkillsSection() {
  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case "languages":
        return <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "frontend":
        return <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "backend":
        return <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "databases":
        return <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  const getRealSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    
    // Frameworks & Libraries
    if (name.includes("react")) return <SiReact className="w-4 h-4 text-[#61DAFB]" />;
    if (name.includes("angular")) return <SiAngular className="w-4 h-4 text-[#DD0031]" />;
    if (name.includes("next")) return <SiNextdotjs className="w-4 h-4 text-foreground" />;
    if (name.includes("node")) return <SiNodedotjs className="w-4 h-4 text-[#539E43]" />;
    if (name.includes("nest")) return <SiNestjs className="w-4 h-4 text-[#E0234E]" />;
    if (name.includes("express")) return <SiExpress className="w-4 h-4 text-foreground" />;
    if (name.includes("spring")) return <SiSpringboot className="w-4 h-4 text-[#6DB33F]" />;
    if (name.includes(".net") || name.includes("dotnet")) return <SiDotnet className="w-4 h-4 text-[#512BD4]" />;
    
    // Languages
    if (name.includes("typescript") || name.includes("ts")) return <SiTypescript className="w-4 h-4 text-[#3178C6]" />;
    if (name.includes("javascript") || name.includes("js")) return <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />;
    if (name.includes("c#")) return <SiSharp className="w-4 h-4 text-[#512BD4]" />;
    if (name.includes("c++")) return <SiCplusplus className="w-4 h-4 text-[#00599C]" />;
    if (name === "c" || name.includes(" c ")) return <SiC className="w-4 h-4 text-[#A8B9CC]" />;
    if (name.includes("python")) return <SiPython className="w-4 h-4 text-[#3776AB]" />;
    
    // Databases
    if (name.includes("postgres")) return <SiPostgresql className="w-4 h-4 text-[#4169E1]" />;
    if (name.includes("mysql")) return <SiMysql className="w-4 h-4 text-[#4479A1]" />;
    if (name.includes("mongo")) return <SiMongodb className="w-4 h-4 text-[#47A248]" />;
    
    // Tools & DevOps
    if (name.includes("docker")) return <SiDocker className="w-4 h-4 text-[#2496ED]" />;
    if (name.includes("github")) return <SiGithub className="w-4 h-4 text-foreground" />;
    if (name.includes("git")) return <SiGit className="w-4 h-4 text-[#F05032]" />;
    if (name.includes("postman")) return <SiPostman className="w-4 h-4 text-[#FF6C37]" />;
    if (name.includes("figma")) return <SiFigma className="w-4 h-4 text-[#F24E1E]" />;
    
    // Styling & Markup
    if (name.includes("tailwind")) return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />;
    if (name.includes("bootstrap")) return <SiBootstrap className="w-4 h-4 text-[#7952B3]" />;
    if (name.includes("html")) return <SiHtml5 className="w-4 h-4 text-[#E34F26]" />;
    if (name.includes("css")) return <SiCss className="w-4 h-4 text-[#1572B6]" />;

    // Default Fallback
    return <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border/40 scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <RevealOnScroll className="space-y-3 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-500/20">
            TECHNOLOGIES I USE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            My <span className="text-cyan-600 dark:text-cyan-400">Tech Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto pt-1">
            A collection of technologies, frameworks, and tools I use to build scalable web applications, AI-powered solutions, and intuitive digital experiences.
          </p>
        </RevealOnScroll>

        {/* 5-Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category) => {
            const categorySkills = skillsData.filter(
              (s) => s.category === category.id
            );

            return (
              <div
                key={category.id}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-border/70 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-cyan-500/60 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3.5 border-b border-border/50 pb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-600 dark:from-purple-500 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent transition-all">
                        {category.label}
                      </h3>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {categorySkills.length} Technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Vertical List with Real Brand Icons */}
                  <div className="flex flex-col gap-2.5 pt-5">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-surface/50 border border-border/60 hover:border-cyan-500/60 hover:bg-surface/80 transition-all shadow-sm"
                      >
                        <div className="shrink-0 flex items-center justify-center">
                          {getRealSkillIcon(skill.name)}
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 text-[11px] text-muted-foreground flex items-center justify-between">
                  <span>Proficiency: Hands-on / Applied</span>
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import * as React from "react";
import { skillsData, skillCategories } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { SkillCategory, Skill } from "@/types/portfolio";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import {
  Code,
  Layers,
  Server,
  Database,
  Wrench,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [selectedSkill, setSelectedSkill] = React.useState<Skill | null>(null);

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "languages":
        return <Code className="w-3.5 h-3.5" />;
      case "frontend":
        return <Layers className="w-3.5 h-3.5" />;
      case "backend":
        return <Server className="w-3.5 h-3.5" />;
      case "databases":
        return <Database className="w-3.5 h-3.5" />;
      case "tools":
        return <Wrench className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const getProficiencyStyle = (level: string) => {
    switch (level) {
      case "Proficient":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "Hands-on":
        return "bg-aurora-purple/10 text-aurora-purple border-aurora-purple/20";
      case "Familiar":
        return "bg-aurora-cyan/10 text-aurora-cyan border-aurora-cyan/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-border/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <RevealOnScroll className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aurora-cyan/10 border border-aurora-cyan/20 text-aurora-cyan text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical <span className="aurora-gradient-text">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Technologies and tools used across academic coursework, system architecture, and project implementations.
          </p>
        </RevealOnScroll>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => {
              setActiveCategory("all");
              setSelectedSkill(null);
            }}
            type="button"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeCategory === "all"
                ? "bg-aurora-gradient text-white shadow-md shadow-aurora-purple/20 font-semibold"
                : "border border-border/80 bg-surface/60 hover:bg-surface text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>All Technologies</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">
              {skillsData.length}
            </span>
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedSkill(null);
              }}
              type="button"
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-aurora-gradient text-white shadow-md shadow-aurora-purple/20 font-semibold"
                  : "border border-border/80 bg-surface/60 hover:bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;
            const relatedProjects = projectsData.filter((p) =>
              skill.relatedProjectIds.includes(p.id)
            );

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 text-left relative overflow-hidden group ${
                  isSelected
                    ? "glass-panel border-aurora-purple shadow-lg shadow-aurora-purple/10 ring-1 ring-aurora-purple/40"
                    : "glass-panel border-border/70 hover:border-aurora-purple/40 hover:translate-y-[-2px]"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground text-base tracking-tight group-hover:text-aurora-purple transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${getProficiencyStyle(
                      skill.proficiency
                    )}`}
                  >
                    {skill.proficiency}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {skill.description}
                </p>

                {/* Related Projects Indicator */}
                {relatedProjects.length > 0 && (
                  <div className="pt-2.5 border-t border-border/40 flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">Applied in:</span>
                    <div className="flex flex-wrap items-center gap-1">
                      {relatedProjects.map((proj) => (
                        <a
                          key={proj.id}
                          href={`#project-${proj.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-surface border border-border/60 text-foreground hover:text-aurora-purple hover:border-aurora-purple/40 transition-colors"
                        >
                          <span>{proj.title}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { toast } from "@/hooks/useToast";
import {
  Home,
  User,
  Wrench,
  FolderGit2,
  GraduationCap,
  Award,
  Mail,
  Github,
  Linkedin,
  Download,
  Moon,
  Sun,
  Monitor,
  Search,
  ExternalLink,
} from "lucide-react";

export function CommandPaletteModal() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigateTo = (path: string) => {
    setOpen(false);
    if (path.startsWith("#")) {
      const el = document.getElementById(path.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/" + path);
      }
    } else {
      router.push(path);
    }
  };

  const openUrl = (url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownloadCv = () => {
    setOpen(false);
    toast({
      title: "Downloading Curriculum Vitae",
      description: "Saved resume-placeholder.pdf to your device.",
      type: "success",
    });
    const link = document.createElement("a");
    link.href = profileData.resumeDownloadUrl;
    link.download = "resume-placeholder.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      {/* Backdrop click to close */}
      <div
        className="fixed inset-0"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl rounded-2xl glass-panel border border-border/80 shadow-2xl overflow-hidden z-10">
        <Command className="w-full bg-transparent text-foreground">
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 border-b border-border/50">
            <Search className="w-4 h-4 text-aurora-purple shrink-0" />
            <Command.Input
              autoFocus
              placeholder="Type a command or search sections..."
              className="w-full py-4 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-sans"
            />
            <kbd className="px-2 py-0.5 text-[10px] font-mono bg-muted/60 border border-border/60 rounded text-muted-foreground">
              ESC
            </kbd>
          </div>

          {/* List Results */}
          <Command.List className="max-h-80 overflow-y-auto p-2 space-y-1">
            <Command.Empty className="py-8 text-center text-xs text-muted-foreground">
              No matching commands found.
            </Command.Empty>

            {/* Navigation Group */}
            <Command.Group
              heading="Navigation"
              className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1.5"
            >
              <Command.Item
                onSelect={() => navigateTo("#home")}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Home className="w-4 h-4 text-aurora-purple" />
                <span>Home / Overview</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("#about")}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <User className="w-4 h-4 text-aurora-purple" />
                <span>About Me</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("#education")}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-aurora-sky" />
                <span>Education & Coursework</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("#skills")}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Wrench className="w-4 h-4 text-aurora-indigo" />
                <span>Technical Skills</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("#projects")}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <FolderGit2 className="w-4 h-4 text-aurora-cyan" />
                <span>Featured Projects</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("#certifications")}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Award className="w-4 h-4 text-aurora-purple" />
                <span>Certifications</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("#activities")}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Activities & Leadership</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("#contact")}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 text-aurora-cyan" />
                <span>Get in Touch</span>
              </Command.Item>
            </Command.Group>

            {/* Case Studies */}
            <Command.Group
              heading="Project Case Studies"
              className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1.5"
            >
              {projectsData.map((project) => (
                <Command.Item
                  key={project.id}
                  onSelect={() => navigateTo(`/projects/${project.slug}`)}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FolderGit2 className="w-4 h-4 text-aurora-purple" />
                    <span>{project.title}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {project.category}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Actions & External Links */}
            <Command.Group
              heading="Actions & Profiles"
              className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1.5"
            >
              <Command.Item
                onSelect={handleDownloadCv}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Download className="w-4 h-4 text-aurora-cyan" />
                <span>Download Curriculum Vitae (PDF)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => openUrl(profileData.githubUrl)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Github className="w-4 h-4 text-foreground" />
                <span>Open GitHub Profile</span>
              </Command.Item>
              <Command.Item
                onSelect={() => openUrl(profileData.linkedinUrl)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Linkedin className="w-4 h-4 text-aurora-indigo" />
                <span>Open LinkedIn Profile</span>
              </Command.Item>
            </Command.Group>

            {/* Theme Commands */}
            <Command.Group
              heading="Theme Preferences"
              className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1.5"
            >
              <Command.Item
                onSelect={() => {
                  setTheme("dark");
                  setOpen(false);
                }}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Moon className="w-4 h-4 text-aurora-purple" />
                <span>Switch to Dark Theme</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  setTheme("light");
                  setOpen(false);
                }}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Switch to Light Theme</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  setTheme("system");
                  setOpen(false);
                }}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Monitor className="w-4 h-4 text-aurora-cyan" />
                <span>Sync with System Theme</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          {/* Footer note */}
          <div className="px-4 py-2 bg-surface/50 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Navigate with ↑ ↓ and Press Enter</span>
            <span className="font-mono">Midnight Aurora UX</span>
          </div>
        </Command>
      </div>
    </div>
  );
}


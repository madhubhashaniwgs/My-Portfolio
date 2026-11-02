"use client";

import * as React from "react";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/60 bg-card/60 backdrop-blur-xl py-8 mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Copyright text */}
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Saranga Madhubhashani. Crafted with using Next.js & Tailwind.
        </p>

        {/* Social Icons (GitHub, LinkedIn, Email) */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-border/80 bg-surface/70 hover:bg-surface text-purple-400 hover:text-cyan-400 hover:border-cyan-400 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-border/80 bg-surface/70 hover:bg-surface text-purple-400 hover:text-cyan-400 hover:border-cyan-400 transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="p-2 rounded-xl border border-border/80 bg-surface/70 hover:bg-surface text-purple-400 hover:text-cyan-400 hover:border-cyan-400 transition-all shadow-sm"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a href={profileData.whatsappUrl} target="_blank" rel="noopener noreferrer" 
          className="p-2 rounded-xl border border-border/80 bg-surface/70 hover:bg-surface text-purple-400 hover:text-cyan-400 hover:border-cyan-400 transition-all shadow-sm"
          aria-label="WhatsApp">
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border/80 bg-surface/60 hover:bg-surface text-xs text-foreground hover:border-cyan-400 transition-all duration-200 shadow-sm group cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
"use client";

import * as React from "react";
import Link from "next/link";
import { X, FileText, Github, Linkedin } from "lucide-react";
import { profileData } from "@/data/profile";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
}

export function MobileNav({ isOpen, onClose, navItems, activeSection }: MobileNavProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background/95 border-l border-border p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between z-10">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border/50">
            <span className="font-bold text-lg aurora-gradient-text">Navigation</span>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-purple"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive =
                item.href === `#${activeSection}` ||
                (activeSection === "" && item.href === "#");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "bg-aurora-purple/15 text-aurora-purple border border-aurora-purple/30 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-aurora-purple shadow-[0_0_6px_#8B5CF6]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-border/50 flex flex-col gap-3">
          <a
            href={profileData.resumeDownloadUrl}
            download
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-aurora-gradient text-white font-medium text-sm shadow-md hover:opacity-90 transition-opacity"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </a>

          <div className="flex items-center justify-center gap-4 pt-2 text-muted-foreground">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MobileNav } from "./MobileNav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { profileData } from "@/data/profile";
import { Menu, Download } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Activities", href: "#activities" },
  { name: "Contact", href: "#contact" },
];

const SECTION_IDS = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "certifications",
  "activities",
  "contact",
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-black/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          
          {/* Logo / Brand Image */}
          <Link
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl"
            aria-label="Saranga Madhubhashani Home"
          >
           <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white text-sm font-extrabold shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              SM
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/60 backdrop-blur-md border border-border shadow-inner">
            {NAV_ITEMS.map((item) => {
              const target = item.href.replace("#", "");
              const isActive = (activeSection === target) || (target === "home" && !activeSection);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/15 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Quick CV Download with Interactive Hover Effect */}
            <a
              href={profileData.resumeDownloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-all duration-300 font-sans"
            >
              <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="lg:hidden p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}
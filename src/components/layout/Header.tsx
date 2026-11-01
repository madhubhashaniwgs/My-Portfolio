"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MobileNav } from "./MobileNav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, Command, Download, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const SECTION_IDS = ["about", "skills", "projects", "education", "certifications", "contact"];

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

  const openCommandPalette = () => {
    // Trigger keyboard shortcut event for Cmd+K / Ctrl+K
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      ctrlKey: true,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 glass-panel border-b border-border/70 shadow-lg shadow-black/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-purple rounded-lg p-1"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-xl bg-surface border border-border/80 flex items-center justify-center shadow-sm group-hover:border-aurora-purple/60 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all duration-300">
              <Sparkles className="w-4 h-4 text-aurora-purple group-hover:text-aurora-cyan transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base flex items-center gap-1">
                Portfolio
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-aurora-cyan animate-pulse" />
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground -mt-0.5">
                UoM • IT Undergrad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-border/50 shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-aurora-purple/15 border border-aurora-purple/30 -z-10" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={openCommandPalette}
              type="button"
              className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-border/70 bg-surface/50 hover:bg-surface hover:border-aurora-purple/40 text-muted-foreground hover:text-foreground text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-purple/50 shadow-sm"
              aria-label="Open Command Palette (Ctrl+K or Cmd+K)"
              title="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-aurora-purple" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-muted rounded border border-border/60">
                ⌘K
              </kbd>
            </button>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Quick CV Download */}
            <a
              href="/documents/resume-placeholder.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-aurora-gradient text-white shadow-sm hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-purple"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="lg:hidden p-2 rounded-xl border border-border/70 bg-surface/50 text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-purple"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}


"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-full bg-muted/40 border border-border/50 animate-pulse"
        aria-hidden="true"
      />
    );
  }

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  const getLabel = () => {
    if (theme === "dark") return "Dark theme (click to switch to Light)";
    if (theme === "light") return "Light theme (click to switch to System)";
    return "System theme (click to switch to Dark)";
  };

  return (
    <button
      onClick={cycleTheme}
      type="button"
      className="relative flex items-center justify-center w-9 h-9 rounded-xl border border-border/60 bg-surface/60 hover:bg-surface hover:border-aurora-purple/40 text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-purple/50 shadow-sm"
      aria-label={getLabel()}
      title={getLabel()}
    >
      {theme === "dark" && (
        <Moon className="w-4 h-4 text-aurora-purple transition-transform duration-200 hover:rotate-12" />
      )}
      {theme === "light" && (
        <Sun className="w-4 h-4 text-amber-500 transition-transform duration-200 hover:rotate-45" />
      )}
      {theme === "system" && (
        <Monitor className="w-4 h-4 text-aurora-cyan transition-transform duration-200" />
      )}
    </button>
  );
}


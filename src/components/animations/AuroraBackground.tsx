"use client";

import * as React from "react";

export function AuroraBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Aurora Ambient Gradients */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Glow 1: Top Center / Left */}
        <div className="absolute -top-[25%] left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-aurora-purple/15 via-aurora-indigo/10 to-transparent blur-[120px] dark:opacity-40 opacity-25 animate-aurora-glow" />

        {/* Glow 2: Middle Right */}
        <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-aurora-cyan/15 via-aurora-indigo/10 to-transparent blur-[140px] dark:opacity-35 opacity-20 animate-aurora-glow [animation-delay:4s]" />

        {/* Glow 3: Subtle Base Accent */}
        <div className="absolute -bottom-[20%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-aurora-purple/10 via-aurora-sky/10 to-transparent blur-[130px] dark:opacity-30 opacity-15" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {children}
    </div>
  );
}


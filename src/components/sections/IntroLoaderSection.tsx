"use client";

import React, { useState, useEffect } from "react";

export function IntroLoader({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 500); 
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground transition-opacity duration-500 ${!isVisible ? "opacity-0" : "opacity-100"}`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Logo / Monogram */}
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-extrabold shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-bounce">
          SM
        </div>
        
        {/* Loading Text / Name */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold tracking-wider bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            SARANGA MADHUBHASHANI
          </h2>
          <p className="text-xs font-mono text-muted-foreground animate-pulse">
            Initializing Portfolio...
          </p>
        </div>

        {/* Progress Bar Line */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterRotatingProps {
  phrases: string[];
  intervalMs?: number;
}

export function TypewriterRotating({
  phrases,
  intervalMs = 3200,
}: TypewriterRotatingProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!phrases || phrases.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [phrases, intervalMs]);

  const currentPhrase = phrases[index] || "";

  return (
    <span className="inline-block relative min-h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentPhrase}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-block aurora-gradient-text font-bold"
        >
          {currentPhrase}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

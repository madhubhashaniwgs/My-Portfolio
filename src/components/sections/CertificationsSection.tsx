"use client";

import * as React from "react";
import Image from "next/image";
import { certificationsData } from "@/data/certifications";
import { Certification } from "@/types/portfolio";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import {
  Award,
  ExternalLink,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Maximize2,
} from "lucide-react";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = React.useState<Certification | null>(null);
  const [fullScreenImage, setFullScreenImage] = React.useState<string | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-border/40 scroll-mt-20 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header (Centered) */}
        <RevealOnScroll className="flex flex-col items-center text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-500/20">
            CONTINUOUS LEARNING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            My <span className="text-cyan-600 dark:text-cyan-400">Certificates</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl pt-1">
            Certifications that demonstrate my commitment to continuous learning and professional development.
          </p>
        </RevealOnScroll>

        {/* Certificates Container with Large Side Arrows */}
        <div className="relative px-2 sm:px-12">
          
          {/* Left Big Arrow */}
          <button
            onClick={() => scroll("left")}
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/90 backdrop-blur-md border border-border text-foreground hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-xl hidden sm:flex items-center justify-center group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Right Big Arrow */}
          <button
            onClick={() => scroll("right")}
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/90 backdrop-blur-md border border-border text-foreground hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-xl hidden sm:flex items-center justify-center group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Scrollable Certificates Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="w-[320px] sm:w-[360px] shrink-0 snap-start glass-panel p-6 rounded-2xl border border-border/70 shadow-xl flex flex-col justify-between hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 cursor-pointer group"
              >
                <div className="space-y-4">
                  
                  {/* Certificate Thumbnail / Preview Box */}
                  <div className="relative w-full h-44 rounded-xl bg-surface/80 border border-border/60 overflow-hidden flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                    {cert.imageUrl ? (
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2 text-cyan-600 dark:text-cyan-400/80">
                        <FileText className="w-12 h-12 stroke-[1.5]" />
                        <span className="text-xs font-mono font-medium">Certificate Document</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-3 pt-1">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20">
                      {cert.category}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-600 dark:from-purple-500 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-cyan-400 dark:group-hover:from-cyan-400 dark:group-hover:to-cyan-200 transition-all leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      {cert.issuingOrganization}
                    </p>
                  </div>

                  {/* Skills Covered Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skillsCovered.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-surface border border-border/60 text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsCovered.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-muted-foreground">
                        +{cert.skillsCovered.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Certificate Action Link with Gradient */}
                <div className="pt-4 mt-5 border-t border-border/40 flex items-center justify-between text-xs font-bold transition-all group-hover:scale-[1.02]">
                  <span className="text-cyan-600 dark:text-cyan-400">
                    View Certificate
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal Dialog for Certificate Details & Verification */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedCert(null)}
            aria-hidden="true"
          />

          <div className="relative glass-panel max-w-lg w-full rounded-3xl border border-border p-6 sm:p-8 shadow-2xl space-y-6 z-10 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-border/50">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span className="font-bold text-base text-foreground">
                  Certificate Details
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                type="button"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-bold text-foreground">
                {selectedCert.title}
              </h4>
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <span>Issued by <strong className="text-cyan-600 dark:text-cyan-400">{selectedCert.issuingOrganization}</strong></span>
                <span>•</span>
                <span>{selectedCert.issueDate}</span>
              </p>

              {/* Certificate Image Preview with Full-Screen / View Button */}
              {selectedCert.imageUrl && (
                <div className="relative w-full h-52 rounded-xl overflow-hidden border border-border/60 bg-surface/50 mt-2 group">
                  <Image
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                  {/* Fullscreen view shortcut button overlay */}
                  <button
                    onClick={() => setFullScreenImage(selectedCert.imageUrl ?? null)}
                    type="button"
                    className="absolute bottom-2 right-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity border border-white/20 shadow-md"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              )}

              {selectedCert.description && (
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                  {selectedCert.description}
                </p>
              )}

              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Skills & Concepts Covered:
                </span>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {selectedCert.skillsCovered.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Buttons with Close and View Credentials */}
            <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-3">
              {selectedCert.verificationUrl ? (
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 transition-colors"
                >
                  <span>View Credentials</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : <div />}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  type="button"
                  className="px-4 py-2 rounded-xl border border-border bg-surface text-xs font-medium text-foreground hover:bg-muted/30 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Image Lightbox Modal */}
      {fullScreenImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in">
          <button
            onClick={() => setFullScreenImage(null)}
            type="button"
            className="absolute top-5 right-5 p-2 rounded-full bg-card/80 text-foreground hover:bg-muted transition-colors border border-border shadow-xl z-50"
            aria-label="Close full screen view"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={fullScreenImage}
              alt="Full screen certificate view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { TypewriterRotating } from "@/components/animations/TypewriterRotating";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative py-10 lg:py-18 flex items-center justify-center overflow-hidden bg-background text-foreground w-full">
      
      {/* Background Glow Colors */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-600 dark:bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600 dark:bg-cyan-400"></span>
              </span>
              Hello, I'm
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                {/* Saranga name: Light mode madhye purple, Dark mode madhye white/foreground */}
                <span className="block text-purple-700 dark:text-foreground font-black">{profileData.headline.primary}</span>
                <span className="block text-cyan-600 dark:text-cyan-400 mt-1">{profileData.headline.secondary}</span>
              </h1>
              
              {/* Rotating Phrases with Left Border */}
              <div className="text-xl sm:text-2xl font-semibold text-purple-600 dark:text-purple-300 pt-2 pl-4 border-l-4 border-cyan-600 dark:border-cyan-400 my-2">
                <TypewriterRotating phrases={profileData.rotatingPhrases} />
              </div>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
              {profileData.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
             <Button 
              asChild 
              size="lg" 
              className="group rounded-full px-6 bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-all duration-300 font-sans cursor-pointer"
            >
              <a href="#contact">
                Hire Me <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Button>

              {/* Download CV Button */}
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 bg-transparent text-cyan-600 dark:text-cyan-400 border border-cyan-600 dark:border-cyan-500 hover:bg-muted/40 hover:text-cyan-700 dark:hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer">
                <a href={profileData.resumeDownloadUrl} download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 text-cyan-600 dark:text-cyan-400" /> Download CV
                </a>
              </Button>
            </div>

            {/* Social Links Only */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-3">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-transparent border border-purple-500/60 hover:border-purple-500 hover:bg-purple-500/10 text-foreground transition-colors shadow-sm shadow-purple-500/10"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-transparent border border-purple-500/60 hover:border-purple-500 hover:bg-purple-500/10 text-foreground transition-colors shadow-sm shadow-purple-500/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 rounded-full bg-transparent border border-purple-500/60 hover:border-purple-500 hover:bg-purple-500/10 text-foreground transition-colors shadow-sm shadow-purple-500/10"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </a>
                <a
                  href={profileData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-transparent border border-purple-500/60 hover:border-purple-500 hover:bg-purple-500/10 text-foreground transition-colors shadow-sm shadow-purple-500/10"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </a>
              </div>
            </div>
          </div>
            

          {/* Right Content - Circle Photo with Lowered Internship Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pb-12">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Enhanced Background glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/50 to-purple-600/50 blur-3xl animate-pulse"></div>
              
              {/* Circular Container */}
              <div className="relative w-full h-full rounded-full border-4 border-cyan-600/70 dark:border-cyan-400/70 overflow-hidden shadow-2xl shadow-cyan-500/20 bg-transparent flex items-center justify-center">
                <Image
                  src="/images/profile.jpg" 
                  alt={profileData.fullName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Available for Internship Badge positioned further below */}
            {profileData.isInternshipAvailable && (
              <div className="absolute bottom-1 sm:bottom-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-emerald-500/40 dark:border-emerald-400/40 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 shadow-xl shadow-emerald-500/10 z-20">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Available for Internship
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-2xl bg-aurora-purple/15 text-aurora-purple border border-aurora-purple/30 flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(139,92,246,0.3)]">
        <Compass className="w-8 h-8 animate-spin [animation-duration:12s]" />
      </div>

      <span className="text-xs font-mono uppercase tracking-widest text-aurora-cyan mb-2">
        HTTP 404 • Resource Not Found
      </span>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
        Page Lost in the <span className="aurora-gradient-text">Aurora</span>
      </h1>

      <p className="text-base text-muted-foreground max-w-md mb-8 leading-relaxed">
        The route you are trying to access does not exist or may have been relocated. Use the navigation links below to return to safety.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-aurora-gradient text-white font-medium text-sm shadow-md hover:opacity-90 transition-opacity"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface/60 hover:bg-surface text-foreground font-medium text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore Projects</span>
        </Link>
      </div>
    </div>
  );
}


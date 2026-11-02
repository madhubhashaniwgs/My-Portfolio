import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { BookOpen, Clock, Tag, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Engineering Notes & Articles | SWE Portfolio",
  description:
    "Engineering insights on concurrency, pessimistic locking, database constraints, mobile telemetry, and modern full-stack development.",
};

export default function BlogListingPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-aurora-purple transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio Home</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aurora-purple/10 border border-aurora-purple/20 text-aurora-purple text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Writing & Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Engineering <span className="aurora-gradient-text">Notes</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl">
            In-depth breakdowns of system architectures, concurrency patterns, and lessons learned from practical software projects.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-border/50">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="glass-panel p-6 rounded-2xl border border-border/70 flex flex-col justify-between hover:border-aurora-purple/40 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="text-aurora-cyan font-medium">{post.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime}</span>
                </span>
              </div>

              <h2 className="text-lg font-bold text-foreground group-hover:text-aurora-purple transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-1 pt-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface border border-border/60 text-[10px] font-mono text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-border/50">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-aurora-purple hover:text-aurora-cyan transition-colors"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


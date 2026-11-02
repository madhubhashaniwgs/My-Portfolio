import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { ArrowLeft, Clock, Calendar, Tag, BookOpen } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Technical Blog`,
    description: post.summary,
  };
}

export default function BlogPostReaderPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-aurora-purple transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4 pb-6 border-b border-border/50">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="px-2.5 py-0.5 rounded-full bg-aurora-purple/10 text-aurora-purple border border-aurora-purple/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
            <span>•</span>
            <span>{post.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed">
            {post.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-surface border border-border/70 text-xs font-mono text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Body Content */}
      <div className="prose prose-invert max-w-none space-y-6 text-foreground text-sm sm:text-base leading-relaxed">
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-border/70 space-y-6 font-sans">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();

            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-foreground pt-4 pb-1 border-b border-border/30"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            if (trimmed.startsWith("```")) {
              const lines = trimmed.split("\n");
              const language = lines[0].replace("```", "").trim();
              const code = lines.slice(1, -1).join("\n");

              return (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-border/80 bg-black/60 shadow-lg font-mono text-xs my-4"
                >
                  <div className="bg-surface/80 px-4 py-2 border-b border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>{language || "code"}</span>
                    <span className="text-[10px] text-aurora-cyan">syntax preview</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-foreground/90">
                    <code>{code}</code>
                  </pre>
                </div>
              );
            }

            if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
              const items = trimmed.split("\n");
              return (
                <ul key={idx} className="space-y-2 pl-4 list-disc text-muted-foreground text-sm">
                  {items.map((it, i) => (
                    <li key={i}>{it.replace(/^[0-9]+\.\s+|^-\s+/, "")}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={idx} className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {trimmed}
              </p>
            );
          })}
        </div>
      </div>

      {/* Return to blog */}
      <div className="pt-6 border-t border-border/50 flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-aurora-purple hover:text-aurora-cyan transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Explore All Engineering Notes</span>
        </Link>
      </div>
    </article>
  );
}


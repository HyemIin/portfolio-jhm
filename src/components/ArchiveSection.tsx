"use client";

import { useState } from "react";
import { blogPostsByProject, BlogPost } from "@/data/blog-posts";

const themeColors: Record<string, string> = {
  "성능 개선": "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20",
  "동시성/성능": "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20",
  "트러블슈팅": "from-amber-500/20 to-amber-600/5 border-amber-500/20",
  "기능 구현": "from-blue-500/20 to-blue-600/5 border-blue-500/20",
  "Spring 심화": "from-green-500/20 to-green-600/5 border-green-500/20",
  "인증/보안": "from-red-500/20 to-red-600/5 border-red-500/20",
};

function ThemeIcon({ theme, className = "h-5 w-5" }: { theme: string; className?: string }) {
  switch (theme) {
    case "Spring 심화":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.59 5.41a10.34 10.34 0 01.88 3.43c-2.79 1.74-5.2 3.98-6.05 7.15-.68 2.53-2.1 3.75-3.55 4.43a10.1 10.1 0 01-3.74-1.5c1.35-1.47 2.35-3.27 2.35-5.42 0-2.92-1.98-5.13-4.48-6.5a9.96 9.96 0 014.18-4.77c.9 1.28 2.4 2.13 4.1 2.13 1.86 0 3.47-1.02 4.32-2.52l.02.02 1.97 3.55zm-8.59 5.59a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "인증/보안":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "트러블슈팅":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.71-.71a1.5 1.5 0 012.12 0l3.57 3.57 7.07-7.07a1.5 1.5 0 012.12 0l.71.71a1.5 1.5 0 010 2.12L13.54 15.17a1.5 1.5 0 01-2.12 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5" />
        </svg>
      );
    case "성능 개선":
    case "동시성/성능":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case "기능 구현":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
  }
}

function BlogCard({ post }: { post: BlogPost }) {
  const colors =
    themeColors[post.theme] || "from-accent/20 to-accent/5 border-accent/20";

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:-translate-y-0.5 hover:border-accent/30"
    >
      <div
        className={`flex h-24 items-center justify-center bg-gradient-to-br ${colors}`}
      >
        <ThemeIcon theme={post.theme} className="h-8 w-8 text-muted" />
      </div>
      <div className="p-3.5">
        <p className="mb-1 line-clamp-2 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </p>
        <p className="text-[11px] text-muted">{post.date}</p>
      </div>
    </a>
  );
}

export default function ArchiveSection() {
  const allPosts = Object.values(blogPostsByProject).flat();
  const themes = [...new Set(allPosts.map((p) => p.theme))];
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  const filtered = allPosts.filter((p) => p.theme === activeTheme);

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* Left: keyword list */}
      <div className="lg:col-span-1">
        <nav className="sticky top-24 space-y-1">
          {themes.map((theme) => {
            const count = allPosts.filter((p) => p.theme === theme).length;
            return (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-all ${
                  activeTheme === theme
                    ? "bg-accent/10 font-semibold text-accent"
                    : "text-muted hover:bg-card hover:text-foreground"
                }`}
              >
                <ThemeIcon theme={theme} className="h-4 w-4 shrink-0" />
                <span className="flex-1">{theme}</span>
                <span className="text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right: post blocks */}
      <div className="lg:col-span-4">
        <div className="mb-4 flex items-center gap-2">
          <ThemeIcon theme={activeTheme} className="h-5 w-5" />
          <h3 className="text-lg font-semibold">{activeTheme}</h3>
          <span className="text-sm text-muted">({filtered.length})</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.url} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

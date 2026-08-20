"use client";

import { useState } from "react";
import { blogPostsByProject, BlogPost } from "@/data/blog-posts";

const themeColors: Record<string, string> = {
  "백엔드 개발": "from-green-500/20 to-green-600/5 border-green-500/20",
  "네트워크": "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20",
  "데이터베이스": "from-orange-500/20 to-orange-600/5 border-orange-500/20",
  "설계/패턴": "from-violet-500/20 to-violet-600/5 border-violet-500/20",
  "DevOps": "from-sky-500/20 to-sky-600/5 border-sky-500/20",
};

function ThemeIcon({ theme, className = "h-5 w-5" }: { theme: string; className?: string }) {
  switch (theme) {
    case "백엔드 개발":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 6 17 6 11C6 5 12 3 12 3C12 3 18 5 18 11C18 17 12 21 12 21Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3V21" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8C8 8 10 10 12 10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8C16 8 14 10 12 10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 13C9 13 10.5 14.5 12 14.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 13C15 13 13.5 14.5 12 14.5" />
        </svg>
      );
    case "네트워크":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      );
    case "데이터베이스":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      );
    case "설계/패턴":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" />
        </svg>
      );
    case "DevOps":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
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

const PAGE_SIZE = 3;

export default function ArchiveSection() {
  const allPosts = Object.values(blogPostsByProject).flat();
  const themes = [...new Set(allPosts.map((p) => p.theme))];
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [page, setPage] = useState(0);

  const filtered = allPosts.filter((p) => p.theme === activeTheme);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* Left: keyword list (desktop vertical, mobile horizontal scroll) */}
      <div className="lg:col-span-1">
        {/* Mobile: horizontal tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {themes.map((theme) => {
            const count = allPosts.filter((p) => p.theme === theme).length;
            return (
              <button
                key={theme}
                onClick={() => { setActiveTheme(theme); setPage(0); }}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-all ${
                  activeTheme === theme
                    ? "bg-accent text-white"
                    : "border border-card-border bg-card text-muted"
                }`}
              >
                <ThemeIcon theme={theme} className="h-3.5 w-3.5 shrink-0" />
                <span>{theme}</span>
                <span className="text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
        {/* Desktop: vertical nav */}
        <nav className="sticky top-24 hidden space-y-1 lg:block">
          {themes.map((theme) => {
            const count = allPosts.filter((p) => p.theme === theme).length;
            return (
              <button
                key={theme}
                onClick={() => { setActiveTheme(theme); setPage(0); }}
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
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {paged.map((post) => (
            <BlogCard key={post.url} post={post} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="rounded-lg border border-card-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:hover:border-card-border disabled:hover:text-muted"
            >
              이전
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-8 w-8 rounded-lg text-xs font-medium transition-colors ${
                  page === i
                    ? "bg-accent text-white"
                    : "border border-card-border text-muted hover:border-accent/30 hover:text-accent"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="rounded-lg border border-card-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:hover:border-card-border disabled:hover:text-muted"
            >
              다음
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

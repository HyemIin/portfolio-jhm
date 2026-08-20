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

const themeEmojis: Record<string, string> = {
  "백엔드 개발": "🌱",
  "네트워크": "🌐",
  "데이터베이스": "🗄️",
  "설계/패턴": "🧩",
  "DevOps": "🚀",
};

function ThemeIcon({ theme }: { theme: string }) {
  return <span>{themeEmojis[theme] || "📝"}</span>;
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
        <ThemeIcon theme={post.theme} />
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
                <ThemeIcon theme={theme} />
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
                <ThemeIcon theme={theme} />
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
          <ThemeIcon theme={activeTheme} />
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

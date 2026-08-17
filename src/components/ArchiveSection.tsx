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

const themeIcons: Record<string, string> = {
  "성능 개선": "⚡",
  "동시성/성능": "⚡",
  "트러블슈팅": "🔧",
  "기능 구현": "⚙️",
  "Spring 심화": "🌱",
  "인증/보안": "🔒",
};

function BlogCard({ post }: { post: BlogPost }) {
  const colors =
    themeColors[post.theme] || "from-accent/20 to-accent/5 border-accent/20";
  const icon = themeIcons[post.theme] || "📝";

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
        <span className="text-3xl">{icon}</span>
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
                <span>{themeIcons[theme] || "📝"}</span>
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
          <span className="text-xl">{themeIcons[activeTheme] || "📝"}</span>
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

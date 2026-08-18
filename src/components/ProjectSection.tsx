"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectTopics } from "@/data/project-topics";

export default function ProjectSection() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const activeProject = projects.find((p) => p.slug === activeSlug)!;
  const topics = projectTopics[activeSlug] || [];

  return (
    <div>
      {/* Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {projects.map((p) => (
          <button
            key={p.slug}
            onClick={() => setActiveSlug(p.slug)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              activeSlug === p.slug
                ? "bg-accent text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                : "border border-card-border bg-card text-muted hover:border-accent/30 hover:text-foreground"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Split layout */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Left: project description + links */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-card-border bg-card p-6">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-semibold text-accent">
                {activeProject.category}
              </span>
              {activeProject.company && (
                <>
                  <span className="h-1 w-1 rounded-full bg-card-border" />
                  <span className="text-xs font-medium text-muted">
                    {activeProject.company}
                  </span>
                </>
              )}
              <span className="text-xs text-muted">{activeProject.date}</span>
            </div>
            <h3 className="mb-3 text-xl font-bold">{activeProject.title}</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted">
              {activeProject.description}
            </p>

            <div className="mb-5 space-y-2.5 border-t border-card-border pt-5">
              <div className="flex gap-3 text-sm">
                <span className="w-14 flex-shrink-0 font-medium text-accent">
                  Role
                </span>
                <span className="text-muted">{activeProject.role}</span>
              </div>
              {activeProject.team && (
                <div className="flex gap-3 text-sm">
                  <span className="w-14 flex-shrink-0 font-medium text-accent">
                    Team
                  </span>
                  <span className="text-muted">{activeProject.team}</span>
                </div>
              )}
            </div>

            <div className="mb-5 border-t border-card-border pt-5">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-card-border pt-5">
              <Link
                href={`/projects/${activeProject.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-card-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-accent"
              >
                프로젝트 상세
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              {activeProject.links?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-accent/80"
                >
                  {link.label}
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: topic blocks */}
        <div className="lg:col-span-3">
          <div className="grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/projects/${activeProject.slug}/${topic.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-card-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/30"
              >
                <div>
                  <p className="mb-1 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    {topic.title}
                  </p>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted">
                    {topic.summary}
                  </p>
                </div>
                <svg
                  className="mt-3 h-4 w-4 self-end text-muted transition-colors group-hover:text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            ))}

            {topics.length === 0 && (
              <div className="sm:col-span-2 flex h-48 items-center justify-center rounded-2xl border border-dashed border-card-border">
                <div className="text-center">
                  <p className="mb-1 text-2xl opacity-30">📝</p>
                  <p className="text-sm text-muted">
                    상세 콘텐츠가 준비 중입니다
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

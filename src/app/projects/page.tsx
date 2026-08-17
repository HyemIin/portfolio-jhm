"use client";

import { useState } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import FilterBar from "@/components/FilterBar";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const counts: Record<string, number> = { All: projects.length };
  for (const p of projects) {
    counts[p.category] = (counts[p.category] ?? 0) + 1;
  }

  return (
    <div className="mx-auto max-w-6xl px-8 py-20">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
        All Projects
      </h2>
      <p className="mb-8 text-2xl font-bold">
        전체 프로젝트 <span className="text-muted">({projects.length})</span>
      </p>

      <div className="mb-8">
        <FilterBar
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
          counts={counts}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="h-full overflow-hidden rounded-2xl border border-card-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)]">
        <div className="aspect-[16/9] overflow-hidden bg-background">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm font-medium tracking-wider text-muted/50">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="text-xs font-medium text-accent">
              {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-card-border" />
            <span className="text-xs text-muted">{project.date}</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="rounded-md bg-card px-2 py-0.5 text-xs text-muted">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

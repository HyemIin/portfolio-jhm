import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | 정혜민 Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#projects"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
        Projects
      </Link>

      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-full bg-accent-muted px-3 py-1 text-xs font-semibold text-accent">
          {project.category}
        </span>
        {project.company && (
          <>
            <span className="h-1 w-1 rounded-full bg-card-border" />
            <span className="text-sm font-medium text-muted">{project.company}</span>
          </>
        )}
        <span className="text-sm text-muted">{project.date}</span>
      </div>

      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{project.title}</h1>
      <p className="mb-10 text-lg leading-relaxed text-muted">
        {project.overview}
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-card-border bg-card p-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Role
          </p>
          <p>{project.role}</p>
        </div>
        {project.team && (
          <div className="rounded-2xl border border-card-border bg-card p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
              Team
            </p>
            <p>{project.team}</p>
          </div>
        )}
      </div>

      <section className="mb-10">
        <h2 className="mb-5 text-xl font-semibold">주요 성과</h2>
        <ul className="space-y-3">
          {project.highlights.map((h, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-5 text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-card-border bg-card px-3 py-1.5 text-sm text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {project.links && project.links.length > 0 && (
        <section>
          <h2 className="mb-5 text-xl font-semibold">Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/30 hover:text-accent"
              >
                {link.label}
                <svg
                  className="h-3.5 w-3.5"
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
        </section>
      )}
    </div>
  );
}

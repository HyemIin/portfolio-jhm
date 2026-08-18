import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectTopics } from "@/data/project-topics";

export function generateStaticParams() {
  const params: { slug: string; topic: string }[] = [];
  for (const [slug, topics] of Object.entries(projectTopics)) {
    for (const t of topics) {
      params.push({ slug, topic: t.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic: topicSlug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const topics = projectTopics[slug] || [];
  const topic = topics.find((t) => t.slug === topicSlug);
  if (!project || !topic) return { title: "Not Found" };
  return {
    title: `${topic.title} | ${project.title} | 정혜민 Portfolio`,
    description: topic.summary,
  };
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="my-8">
      <ol className="relative ml-4 border-l border-card-border">
        {steps.map((step, i) => (
          <li key={i} className="mb-0 pb-6 pl-6 last:pb-0">
            <span className="absolute -left-[9px] flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-card-border bg-background text-[10px] font-medium text-muted">
              {i + 1}
            </span>
            <p className="text-sm text-muted">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

const sectionConfig = {
  problem: { label: "문제", color: "bg-red-400" },
  solution: { label: "해결", color: "bg-blue-400" },
  result: { label: "성과", color: "bg-emerald-400" },
  retrospect: { label: "회고", color: "bg-amber-400" },
} as const;

function ContentSection({
  type,
  paragraphs,
}: {
  type: keyof typeof sectionConfig;
  paragraphs: string[];
}) {
  const config = sectionConfig[type];
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">{config.label}</h2>
      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="leading-[1.8] text-muted">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

export default async function TopicDetail({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic: topicSlug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const topics = projectTopics[slug] || [];
  const topic = topics.find((t) => t.slug === topicSlug);
  if (!project || !topic) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Breadcrumb */}
      <Link
        href={`/projects/${project.slug}`}
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
        {project.title}
      </Link>

      {/* Header */}
      <div className="mb-4">
        <span className="rounded-full bg-accent-muted px-3 py-1 text-xs font-semibold text-accent">
          {project.title}
        </span>
      </div>

      <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">{topic.title}</h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        {topic.summary}
      </p>

      <hr className="mb-8 border-card-border" />

      {/* Flow diagram */}
      {topic.flow && <FlowDiagram steps={topic.flow} />}

      {/* Content sections */}
      <div className="space-y-10">
        <ContentSection type="problem" paragraphs={topic.problem} />
        <ContentSection type="solution" paragraphs={topic.solution} />
        <ContentSection type="result" paragraphs={topic.result} />
        {topic.retrospect && topic.retrospect.length > 0 && (
          <ContentSection type="retrospect" paragraphs={topic.retrospect} />
        )}
      </div>

      {/* Other topics */}
      {topics.length > 1 && (
        <div className="mt-14 border-t border-card-border pt-8">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent">
            Other Topics
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {topics
              .filter((t) => t.slug !== topic.slug)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/projects/${project.slug}/${t.slug}`}
                  className="group rounded-xl border border-card-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-accent/30"
                >
                  <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    {t.title}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs text-muted">
                    {t.summary}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      )}
    </article>
  );
}

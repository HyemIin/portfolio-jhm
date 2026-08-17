import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectTopics } from "@/data/project-topics";

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

const serviceInfo: Record<
  string,
  { what: string; how: string; result: string; achievements?: string[] }
> = {
  "dq-platform": {
    what: "WEF 2025 및 2022 개정 교과 핵심역량 기반 6대 유형, 12 코어 스킬, 30 진로 갈래를 진단합니다. 흥미/성격이 아닌 미래 역량 중심으로 강점 진로 분야를 분석합니다.",
    how: "게임형 시나리오 속 100% 논서술형 문항(6부서 24문항, 45~90분 몰입형 스토리 미션)으로 학생의 역량을 측정합니다. Gemini, OpenAI, Claude 등 Multi-LLM이 1차 자동 채점하고, 전문가가 2차 검증하는 하이브리드 방식입니다.",
    result: "학생/교사(학부모) 맞춤형 리포트와 AI 액션 플랜을 제공합니다. 2030/2040 미래 직업 매칭(AI 대체율 포함)과 수업 활용 가이드(4~8차시)도 함께 제공됩니다.",
    achievements: [
      "미래 역량 진단 시스템 특허 출원 (10-2025-0130902)",
      "2026 KERIS 부산 에듀테크 소프트랩 실증 사업 선정",
      "2025 RISE CUK-GAIA Alliance 우수 사례 선정",
      "총 2,000건 현장 검사 운영",
    ],
  },
  "m42-delivery": {
    what: "약국에서 환자에게 의약품을 배송하는 과정을 관리하는 플랫폼입니다. 배송 기사의 현재 위치를 관제 화면에서 실시간으로 확인할 수 있습니다.",
    how: "SSE + 코루틴 Flow 기반 실시간 위치 스트리밍, Nginx 캐시 일관성 확보, Spring Actuator 기반 배포 검증 시스템으로 운영 안정성을 확보했습니다.",
    result: "응답 지연시간 45% 단축, 송수신 데이터 90% 절감, 캐시 관련 버그 재발률 0%를 달성했습니다.",
  },
  gasip: {
    what: "가천대학교 학생들이 교수와 강의를 평가하고 공유할 수 있는 커뮤니티 서비스입니다. 80명 이상의 실사용자를 확보했습니다.",
    how: "Redis 싱글스레드를 활용한 조회수 동시성 제어와 Nginx micro caching 기반 인기글 캐싱으로 성능을 최적화했습니다.",
    result: "조회수 처리 속도 77% 단축(26초에서 6초), 인기글 TPS 185% 향상, 응답 시간 70% 단축을 달성했습니다.",
  },
  stormcrawler: {
    what: "Apache StormCrawler(GitHub Stars 1.0k+)에 기여한 오픈소스 프로젝트입니다. 대규모 웹 크롤링 파이프라인에서 안정적인 ACK 처리를 보장합니다.",
    how: "하드코딩된 waitAck 캐시의 TTL과 용량을 설정 파일 기반으로 동적 관리할 수 있도록 개선했습니다.",
    result: "ACK 누락률 0%, 대량 데이터 처리 안정성 및 인덱싱 효율을 향상시켰습니다.",
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const info = serviceInfo[slug];
  const topics = projectTopics[slug] || [];

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

      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-full bg-accent-muted px-3 py-1 text-xs font-semibold text-accent">
          {project.category}
        </span>
        {project.company && (
          <>
            <span className="h-1 w-1 rounded-full bg-card-border" />
            <span className="text-sm font-medium text-muted">
              {project.company}
            </span>
          </>
        )}
        <span className="text-sm text-muted">{project.date}</span>
      </div>

      <h1 className="mb-3 text-3xl font-bold sm:text-4xl">{project.title}</h1>
      <p className="mb-6 text-lg leading-relaxed text-gray-300">
        {project.overview}
      </p>

      {/* Service link */}
      {project.links && project.links.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/80"
            >
              {link.label} 바로가기
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
      )}

      {/* Role / Team */}
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

      {/* Service overview cards */}
      {info && (
        <section className="mb-10">
          <h2 className="mb-5 text-xl font-semibold">서비스 소개</h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-card-border bg-card p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                무엇을 하는가
              </p>
              <p className="text-sm leading-relaxed text-muted">{info.what}</p>
            </div>
            <div className="rounded-2xl border border-card-border bg-card p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                어떻게 만들었는가
              </p>
              <p className="text-sm leading-relaxed text-muted">{info.how}</p>
            </div>
            <div className="rounded-2xl border border-card-border bg-card p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                어떤 성과가 있는가
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {info.result}
              </p>
            </div>
            {info.achievements && (
              <div className="rounded-2xl border border-card-border bg-card p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  주요 실적
                </p>
                <ul className="space-y-1.5">
                  {info.achievements.map((a, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Tech Stack */}
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

      {/* Topics */}
      {topics.length > 0 && (
        <section>
          <h2 className="mb-5 text-xl font-semibold">상세 기술 문서</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {topics.map((t) => (
              <Link
                key={t.slug}
                href={`/projects/${slug}/${t.slug}`}
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
        </section>
      )}
    </div>
  );
}

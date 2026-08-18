import { projects } from "@/data/projects";
import { profile, experiences, education, skills } from "@/data/profile";
import ProjectSection from "@/components/ProjectSection";
import ArchiveSection from "@/components/ArchiveSection";

export default function Home() {
  return (
    <div>
      {/* ──── ABOUT (introduce) ──── */}
      <section id="about" className="border-b border-card-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-12">
          {/* Left: intro */}
          <div className="lg:col-span-2">
            <p className="mb-4 text-lg font-medium text-white">
              안녕하세요,{" "}
              <span className="font-bold text-white">
                {profile.name}
              </span>
              입니다.
            </p>

            <h1 className="mb-8">
              <span className="block text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                BACKEND &
              </span>
              <span className="block text-3xl font-extrabold leading-tight tracking-tight text-accent sm:text-5xl lg:text-6xl">
                SOFTWARE ENGINEER
              </span>
            </h1>

            <p className="mb-4 max-w-2xl leading-relaxed text-gray-300">
              {profile.bio}
            </p>
            <p className="mb-10 max-w-2xl leading-relaxed text-gray-300">
              코드하나에서 미래 역량 검사 플랫폼 DQ(디큐)을 1인 개발하며 AI 에이전트 기반 1인 풀스택 개발
              체계를 구축했습니다. 서비스 기획과 디자인 검증, 부산교육대학교
              주관 실증사업 참여까지 전 과정을 직접 수행하며 총 2,000건의
              검사를 성공적으로 운영했습니다.
            </p>

            {/* Stats */}
            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold">1+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Years
                </p>
                <p className="text-[10px] text-muted">경력</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{projects.length}+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Projects
                </p>
                <p className="text-[10px] text-muted">완료한 프로젝트</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">1</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  OSS
                </p>
                <p className="text-[10px] text-muted">오픈소스 기여</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">2</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Company
                </p>
                <p className="text-[10px] text-muted">근무 경험</p>
              </div>
            </div>
          </div>

          {/* Right: experience cards */}
          <div>
            <p className="mb-4 text-sm font-medium text-muted">이력</p>
            <div className="space-y-3">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-4 transition-colors ${
                    i === 0
                      ? "border-accent/30 bg-accent/5"
                      : "border-card-border bg-card"
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {exp.logo && (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-5 w-auto object-contain"
                        />
                      )}
                      <p
                        className={`text-sm font-semibold ${
                          i === 0 ? "text-accent" : ""
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-xs text-muted">{exp.period}</p>
                  </div>
                  <p className="mb-1 text-xs text-muted">
                    {exp.role}
                  </p>
                  <p className="text-xs text-muted">
                    {"items" in exp.sections[0] && exp.sections[0].items
                      ? exp.sections[0].items[0]
                      : exp.sections[0].category}
                  </p>
                </div>
              ))}

              {/* Education cards */}
              {education.map((edu, i) => (
                <div
                  key={`edu-${i}`}
                  className="rounded-xl border border-card-border bg-card p-4"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {edu.logo && (
                        <img
                          src={edu.logo}
                          alt={edu.title}
                          className="h-5 w-auto object-contain"
                        />
                      )}
                      <p className="text-sm font-semibold">{edu.title}</p>
                    </div>
                    <p className="text-xs text-muted">{edu.period}</p>
                  </div>
                  <p className="text-xs text-muted">{edu.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── EXPERIENCE ──── */}
      <section id="experience" className="border-b border-card-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Experience
          </h2>
          <p className="mb-10 text-2xl font-bold">경력</p>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="rounded-2xl border border-card-border bg-card p-6"
              >
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-8 w-auto object-contain"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                      <p className="text-sm text-muted">
                        {exp.department} · {exp.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted">{exp.period}</span>
                </div>
                <div className="space-y-5">
                  {exp.sections.map((section) => (
                    <div key={section.category}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                        {section.category}
                      </p>
                      {"subsections" in section && section.subsections ? (
                        <div className="space-y-4 pl-2">
                          {section.subsections.map((sub) => (
                            <div key={sub.label}>
                              <p className="mb-1.5 text-xs font-medium text-foreground/70">
                                {sub.label}
                              </p>
                              <ul className="space-y-1.5">
                                {sub.items.map((item, j) => (
                                  <li key={j} className="flex gap-2 text-sm text-muted">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-1.5">
                          {"items" in section && section.items?.map((item, j) => (
                            <li key={j} className="flex gap-2 text-sm text-muted">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── PROJECTS ──── */}
      <section id="projects" className="border-b border-card-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Projects
          </h2>
          <p className="mb-10 text-2xl font-bold">
            프로젝트 <span className="text-muted">({projects.length})</span>
          </p>
          <ProjectSection />
        </div>
      </section>

      {/* ──── ARCHIVE ──── */}
      <section id="archive" className="border-b border-card-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Archive
          </h2>
          <p className="mb-10 text-2xl font-bold">아카이브</p>
          <ArchiveSection />
        </div>
      </section>

      {/* ──── SKILLS ──── */}
      <section id="skills" className="border-b border-card-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Skills
          </h2>
          <p className="mb-10 text-2xl font-bold">기술 스택</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-card-border bg-card p-6"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

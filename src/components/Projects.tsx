import { ArrowUpRight, Clock } from "lucide-react";
import { projects, type Project } from "@/content/profile";
import { GithubIcon } from "./Hero";
import SectionTitle from "./SectionTitle";
import { Highlight } from "./SkillFilter";
import { BrowserFrame, ProjectMockup } from "./ProjectMockups";

const ACCENT: Record<Project["accent"], { text: string; bg: string; glow: string }> = {
  lime: { text: "text-lime", bg: "bg-lime", glow: "group-hover:shadow-[0_0_80px_-20px_var(--color-lime)]" },
  violet: { text: "text-violet", bg: "bg-violet", glow: "group-hover:shadow-[0_0_80px_-20px_var(--color-violet)]" },
  coral: { text: "text-coral", bg: "bg-coral", glow: "group-hover:shadow-[0_0_80px_-20px_var(--color-coral)]" },
};

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-text px-4 py-2 text-sm font-semibold text-ink hover:bg-lime">
          Ver la app <ArrowUpRight className="size-4" />
        </a>
      ) : (
        !project.example && (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-4 py-2 text-sm text-muted">
            <Clock className="size-4" /> Pronto online
          </span>
        )
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold hover:bg-text/5">
          <GithubIcon className="size-4" /> Código
        </a>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
      {tags.map((t) => (
        <li key={t} className="rounded-md bg-text/5 px-2 py-1 font-mono text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const [featured, ...rest] = [...projects].sort((a, b) => Number(b.featured ?? 0) - Number(a.featured ?? 0));

  return (
    <section id="proyectos" className="mx-auto w-[min(44rem,calc(100%-2rem))] scroll-mt-24 pt-28">
      <SectionTitle index="01" title="Proyectos" />

      {featured && (
        <Highlight skills={featured.tags} className="rounded-3xl">
        <article id={featured.slug} className={`tile group grid scroll-mt-28 gap-8 p-6 transition-shadow duration-500 md:p-10 ${ACCENT[featured.accent].glow}`}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className={`size-2 rounded-full ${ACCENT[featured.accent].bg}`} />
              <span className="label">Destacado · {featured.year}</span>
            </div>
            <div>
              <h3 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{featured.title}</h3>
              <p className={`mt-2 font-serif text-2xl italic ${ACCENT[featured.accent].text}`}>{featured.tagline}</p>
            </div>
            <p className="text-lg leading-relaxed text-muted">{featured.description}</p>
            <Tags tags={featured.tags} />
            <Links project={featured} />
          </div>
          {featured.image && (
            <div className="relative self-center [perspective:1200px]">
              <div className="transition-transform duration-700 [transform:rotateX(4deg)] group-hover:[transform:none]">
                <BrowserFrame url={(featured.url ?? featured.slug).replace(/^https?:\/\//, "")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={featured.image} alt={`Captura de ${featured.title}`} className="w-full" />
                </BrowserFrame>
              </div>
            </div>
          )}
        </article>
        </Highlight>
      )}

      <div className="mt-4 grid gap-4">
        {rest.map((p) => (
          <Highlight key={p.slug} skills={p.tags} className="rounded-3xl">
          <article id={p.slug} className={`tile group flex flex-col gap-5 p-6 transition-shadow duration-500 md:p-8 ${ACCENT[p.accent].glow}`}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className={`size-2 rounded-full ${ACCENT[p.accent].bg}`} />
                <span className="label">{p.year}</span>
              </div>
              {p.example && <span className="rounded-full border border-dashed border-line px-2.5 py-0.5 font-mono text-[0.65rem] tracking-widest text-muted uppercase">Ejemplo</span>}
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">{p.title}</h3>
              <p className={`font-serif text-xl italic ${ACCENT[p.accent].text}`}>{p.tagline}</p>
            </div>
            <p className="text-muted">{p.description}</p>
            <ProjectMockup slug={p.slug} />
            <div className="mt-auto flex flex-col gap-4">
              <Tags tags={p.tags} />
              <Links project={p} />
            </div>
          </article>
          </Highlight>
        ))}
      </div>
    </section>
  );
}

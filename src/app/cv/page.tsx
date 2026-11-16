import type { Metadata } from "next";
import { education, experience, profile, projects, skills } from "@/content/profile";
import Nav from "@/components/Nav";
import PrintButton from "@/components/PrintButton";
import Spotlight from "@/components/Spotlight";
import DevBanner from "@/components/DevBanner";

export const metadata: Metadata = { title: "CV" };

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="break-inside-avoid-page">
      <h2 className="mb-3 flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-zinc-500 uppercase">
        {title}
        <span className="h-px flex-1 bg-zinc-200" />
      </h2>
      {children}
    </section>
  );
}

const clean = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function CvPage() {
  const realProjects = projects.filter((p) => !p.example);
  const { github, linkedin, email } = profile.links;

  return (
    <div className="grain relative isolate min-h-screen pb-20 print:pb-0 print:after:hidden">
      <div className="print:hidden">
        <Spotlight />
      </div>
      <Nav mode="cv" />

      <div className="mx-auto mt-10 mb-6 flex w-[min(210mm,calc(100%-2rem))] flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-muted">La versión para imprimir o guardar como PDF.</p>
        <PrintButton />
      </div>

      {/* La "hoja": en pantalla parece papel; al imprimir, es lo único que sale. */}
      <article className="mx-auto w-[min(210mm,calc(100%-2rem))] rounded-2xl bg-white p-8 text-zinc-800 shadow-[0_30px_120px_-30px_rgb(155_123_255/0.45)] md:p-14 print:w-auto print:rounded-none print:p-0 print:shadow-none">
        <header className="flex flex-wrap items-start justify-between gap-6 border-b-4 border-zinc-900 pb-6">
          <div>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-zinc-950">{profile.name}</h1>
            <p className="mt-1 font-serif text-2xl text-zinc-600 italic">{profile.role}</p>
          </div>
          <ul className="space-y-1 text-right text-sm text-zinc-600">
            <li>{profile.location}</li>
            {email && <li>{email}</li>}
            <li>{clean(github)}</li>
            {linkedin && <li>{clean(linkedin)}</li>}
          </ul>
        </header>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_15rem] print:grid-cols-[1fr_14rem]">
          <div className="space-y-8">
            <CvSection title="Perfil">
              <div className="space-y-2 leading-relaxed">
                {profile.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </CvSection>

            <CvSection title="Experiencia">
              <ol className="space-y-5">
                {experience.map((job) => (
                  <li key={`${job.company}-${job.period}`} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-zinc-950">
                        {job.role} · <span className="font-normal">{job.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-zinc-500">{job.period}</span>
                    </div>
                    <p className="mt-1 text-zinc-600">{job.description}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm marker:text-zinc-400">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </CvSection>

            {realProjects.length > 0 && (
              <CvSection title="Proyectos">
                <ul className="space-y-4">
                  {realProjects.map((p) => (
                    <li key={p.slug} className="break-inside-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-zinc-950">{p.title}</h3>
                        <span className="font-mono text-xs text-zinc-500">{p.year}</span>
                      </div>
                      <p className="mt-1 text-zinc-600">{p.description}</p>
                      <p className="mt-1 font-mono text-xs text-zinc-500">{p.tags.join(" · ")}</p>
                      {(p.url || p.repo) && <p className="mt-1 text-sm text-zinc-500">{clean(p.url || p.repo!)}</p>}
                    </li>
                  ))}
                </ul>
              </CvSection>
            )}
          </div>

          <aside className="space-y-8">
            {skills.map((group) => (
              <CvSection key={group.group} title={group.group}>
                <ul className="space-y-1.5 text-sm">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-zinc-900" /> {item}
                    </li>
                  ))}
                </ul>
              </CvSection>
            ))}
            <CvSection title="Educación">
              <ul className="space-y-3 text-sm">
                {education.map((e) => (
                  <li key={e.title}>
                    <p className="font-semibold text-zinc-950">{e.title}</p>
                    <p className="text-zinc-600">{e.place}</p>
                    <p className="font-mono text-xs text-zinc-500">{e.period}</p>
                  </li>
                ))}
              </ul>
            </CvSection>
          </aside>
        </div>
      </article>
      <DevBanner />
    </div>
  );
}

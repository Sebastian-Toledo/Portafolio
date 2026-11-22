import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { experience, profile, projects, skills } from "@/content/profile";
import RotatingText from "./RotatingText";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
export { GithubIcon };

const chip = "inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-semibold transition-colors hover:bg-text/5";

export default function Hero() {
  const featured = projects.find((p) => p.featured);
  const current = experience[0];
  const [roleMain, roleRest] = profile.role.split(" & ");
  const stack = skills.flatMap((s) => (s.group === "Idiomas" ? [] : s.items));

  return (
    <section className="mx-auto grid w-[min(60rem,calc(100%-2rem))] gap-4 pt-10 md:pt-16" aria-label="Presentación">
      {/* Presentación */}
      <div className="tile rise flex flex-col justify-between gap-10 p-7 md:p-10">
        {current && (
          <p className="label flex items-center gap-2.5">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-lime" />
              <span className="relative inline-flex size-2.5 rounded-full bg-lime" />
            </span>
            Hoy en {current.company}
          </p>
        )}
        <div>
          {/* Lo primero que se lee es el puesto; el nombre va debajo y aparece una sola vez en la página. */}
          <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.9] font-extrabold tracking-tight">
            {roleMain}
            {roleRest && (
              <>
                <br />
                <span className="font-serif font-normal text-lime italic">&amp; {roleRest}</span>
              </>
            )}
          </h1>
          <p className="mt-6 font-display text-2xl font-bold md:text-3xl">{profile.name}</p>
          <p className="mt-2 max-w-xl text-xl text-muted md:text-2xl">
            Desde {profile.location.split(",")[0]}, <span className="text-text"><RotatingText words={profile.rotating} /></span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#proyectos" className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5">
            Ver proyectos <ArrowDownRight className="size-4 transition-transform group-hover:rotate-[-45deg]" />
          </a>
          <Link href="/cv" className={chip}>
            <FileText className="size-4" /> Ver CV
          </Link>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className={chip}>
            <GithubIcon className="size-4" /> GitHub
          </a>
          {profile.links.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={chip}>
              LinkedIn <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>

      {/* Proyecto destacado */}
      {featured && (
        <a
          href={`#${featured.slug}`}
          className="tile group rise flex flex-col justify-between gap-4 p-6 [animation-delay:200ms]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="label">Proyecto destacado</p>
              <p className="mt-2 font-display text-2xl font-bold">{featured.title}</p>
              <p className="text-muted">{featured.tagline}</p>
            </div>
            <ArrowUpRight className="size-6 shrink-0 text-coral transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          {featured.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={featured.image}
              alt=""
              className="-mb-10 rounded-t-xl border border-line object-cover object-top transition-transform duration-500 group-hover:-translate-y-2 h-48"
            />
          )}
        </a>
      )}

      {/* Stack + GitHub */}
      <div className="tile rise flex flex-col justify-between gap-6 py-6 [animation-delay:260ms]">
        <div className="flex items-center justify-between px-6">
          <p className="label">Con qué trabajo</p>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text">
            <GithubIcon className="size-4" /> GitHub
          </a>
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-3 pr-3">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="rounded-full border border-line bg-panel-2 px-4 py-2 text-sm whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>
        </div>
        <p className="px-6 font-serif text-2xl text-muted italic">“Aprender haciendo, y hacerlo con cariño.”</p>
      </div>
    </section>
  );
}

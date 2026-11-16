import Link from "next/link";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { education, experience, profile, skills } from "@/content/profile";
import { GithubIcon } from "./Hero";
import SectionTitle from "./SectionTitle";

const wrap = "mx-auto w-[min(72rem,calc(100%-2rem))] scroll-mt-24 pt-28";

export function Experience() {
  return (
    <section id="experiencia" className={wrap}>
      <SectionTitle index="02" title="Experiencia" subtitle="Dónde trabajé y qué aprendí en el camino." />
      <ol className="relative space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-line md:before:left-[11.5rem]">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative grid gap-3 pl-8 md:grid-cols-[10rem_1fr] md:gap-12 md:pl-0">
            <span className="absolute top-2 left-0 size-[15px] rounded-full border-4 border-ink bg-lime md:left-[calc(11.5rem-7px)]" />
            <p className="label pt-1.5">{job.period}</p>
            <div className="tile p-6 md:ml-8">
              <h3 className="font-display text-xl font-bold">
                {job.role} <span className="font-serif font-normal text-muted italic">en {job.company}</span>
              </h3>
              <p className="mt-2 text-muted">{job.description}</p>
              <ul className="mt-4 space-y-1.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm">
                    <span className="text-lime">→</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} className="tile flex items-center justify-between gap-4 p-5">
            <div>
              <p className="font-semibold">{e.title}</p>
              <p className="text-sm text-muted">{e.place}</p>
            </div>
            <p className="label">{e.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const CHIP_COLORS = ["hover:border-lime hover:text-lime", "hover:border-violet hover:text-violet", "hover:border-coral hover:text-coral"];

export function Skills() {
  return (
    <section id="habilidades" className={wrap}>
      <SectionTitle index="03" title="Habilidades" subtitle="Las herramientas con las que me siento cómodo." />
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, gi) => (
          <div key={group.group} className="tile p-6">
            <p className="label mb-4">{group.group}</p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className={`cursor-default rounded-full border border-line px-4 py-2 transition-colors ${CHIP_COLORS[gi % CHIP_COLORS.length]}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre-mi" className={wrap}>
      <SectionTitle index="04" title="Sobre mí" />
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-xl leading-relaxed text-muted md:text-2xl">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="tile flex flex-col justify-between gap-6 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-violet)_18%,transparent),color-mix(in_srgb,var(--color-coral)_12%,transparent))] p-7">
          <p className="font-serif text-3xl leading-tight italic">
            “Mi proyecto favorito es el recetario de mi mamá: un poco de código y mucho cariño.”
          </p>
          <a href="#con-amor-cristina" className="inline-flex items-center gap-2 font-semibold text-coral hover:underline">
            Conocé “Con amor, mamá” <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { github, linkedin, email } = profile.links;
  return (
    <section id="contacto" className={`${wrap} pb-16`}>
      <div className="tile relative overflow-hidden p-8 text-center md:p-16">
        <div aria-hidden className="absolute inset-x-0 -bottom-1/2 mx-auto h-full w-3/4 rounded-full bg-lime/20 blur-[100px]" />
        <p className="label relative">05 · Contacto</p>
        <h2 className="relative mt-4 font-display text-[clamp(3rem,10vw,8rem)] leading-none font-extrabold tracking-tight">
          ¿Hablamos<span className="font-serif font-normal text-lime italic">?</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-lg text-muted">
          Si tenés una idea, un proyecto o una propuesta, escribime. Respondo rápido.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          {email && (
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink hover:-translate-y-0.5">
              <Mail className="size-4" /> {email}
            </a>
          )}
          <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-6 py-3 font-semibold hover:bg-text/5">
            <GithubIcon className="size-4" /> GitHub
          </a>
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-6 py-3 font-semibold hover:bg-text/5">
              LinkedIn <ArrowUpRight className="size-4" />
            </a>
          )}
          <Link href="/cv" className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-6 py-3 font-semibold hover:bg-text/5">
            <FileText className="size-4" /> Descargar CV
          </Link>
        </div>
      </div>
      <footer className="mt-10 flex flex-wrap justify-between gap-2 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Hecho con Next.js, Tailwind y muchas ganas.</p>
      </footer>
    </section>
  );
}

import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, FileText } from "lucide-react";
import { certificateSlug, certifications, education, experience, formatMonth, profile, projects, skills } from "@/content/profile";
import { GithubIcon } from "./Hero";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import { Highlight, SkillChip } from "./SkillFilter";

const wrap = "mx-auto w-[min(44rem,calc(100%-2rem))] scroll-mt-24 pt-28";

export function Experience() {
  return (
    <section id="experiencia" className={wrap}>
      <SectionTitle index="02" title="Experiencia" />
      <ol className="space-y-4">
        {experience.map((job, ji) => {
          const isCurrent = job.period.includes("Hoy");
          return (
            <li key={job.company} className="tile p-6 md:p-8">
              {/* Encabezado de la empresa */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
                <h3 className="font-display text-3xl font-extrabold tracking-tight">{job.company}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  {isCurrent && (
                    <span className="rounded-full border border-lime/50 px-2.5 py-0.5 font-mono text-xs font-semibold tracking-widest text-lime uppercase">Actual</span>
                  )}
                  <span className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-3 py-1 font-mono text-sm font-semibold text-lime">
                    <CalendarDays className="size-4" aria-hidden /> {job.period}
                  </span>
                </div>
              </div>

              {/* Puestos: línea de tiempo interna, del más nuevo al más viejo */}
              <ol className="relative mt-6 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-line">
                {job.positions.map((pos, pi) => {
                  const active = ji === 0 && pi === 0 && isCurrent;
                  return (
                    <li key={pos.title} className="relative pl-7">
                      <span
                        aria-hidden
                        className={`absolute top-2 left-0 size-[11px] rounded-full ring-4 ring-panel ${active ? "bg-lime shadow-[0_0_12px_var(--color-lime)]" : "bg-muted"}`}
                      />
                      <Highlight skills={pos.skills} className="-m-3 rounded-2xl p-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className={`font-display text-xl font-bold ${active ? "" : "text-text/90"}`}>{pos.title}</h4>
                        {job.positions.length > 1 && <span className="font-mono text-sm text-muted">{pos.period}</span>}
                      </div>
                      <p className="mt-2 text-muted">{pos.description}</p>
                      <ul className="mt-3 space-y-1.5">
                        {pos.highlights.map((h) => (
                          <li key={h} className="flex gap-2 text-sm leading-relaxed">
                            <span className="text-lime">→</span> {h}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Habilidades usadas">
                        {pos.skills.map((sk) => (
                          <li key={sk}>
                            <SkillChip skill={sk} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted transition-colors hover:border-lime hover:text-lime" />
                          </li>
                        ))}
                      </ul>
                      </Highlight>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 grid gap-4">
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
  // Sólo se pueden elegir las habilidades que aparecen en algún puesto o proyecto.
  const used = new Set<string>([...experience.flatMap((j) => j.positions.flatMap((p) => p.skills)), ...projects.flatMap((p) => p.tags)]);
  return (
    <section id="habilidades" className={wrap}>
      <SectionTitle index="03" title="Habilidades" />
      <p className="surface mb-4 rounded-2xl px-5 py-3 text-sm text-muted">Tocá una habilidad para ver en qué trabajos y proyectos la usé.</p>
      <div className="grid gap-4">
        {skills.map((group, gi) => (
          <div key={group.group} className="tile p-6">
            <p className="label mb-4">{group.group}</p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  {used.has(item) ? (
                    <SkillChip skill={item} scroll className={`rounded-full border border-line px-4 py-2 transition-colors ${CHIP_COLORS[gi % CHIP_COLORS.length]}`} />
                  ) : (
                    <span className="inline-block cursor-default rounded-full border border-dashed border-line px-4 py-2 text-muted">{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const CERT_DIR = "certificados";
const CERT_EXT = [".png", ".jpg", ".jpeg", ".webp", ".pdf"];

/**
 * Imágenes de certificados en public/certificados/, por nombre sin extensión.
 * Se lee al compilar: alcanza con agregar la imagen para que aparezca el link.
 */
function certificateFiles() {
  try {
    const files = fs.readdirSync(path.join(process.cwd(), "public", CERT_DIR));
    return new Map(
      files.filter((f) => CERT_EXT.includes(path.extname(f).toLowerCase())).map((f) => [path.parse(f).name, `/${CERT_DIR}/${f}`]),
    );
  } catch {
    return new Map<string, string>();
  }
}

export function Certifications() {
  const files = certificateFiles();
  const dev = process.env.NODE_ENV === "development";
  const total = certifications.reduce((n, g) => n + g.items.length, 0);
  const [main, ...rest] = certifications;
  const list = (items: typeof main.items) =>
    items.map((c) => {
      const slug = certificateSlug(c.title);
      const file = files.get(slug);
      return (
        <li key={c.title + c.date} className="flex break-inside-avoid items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-0">
          <div>
            <p className="font-medium leading-snug">{c.title}</p>
            {c.issuer !== "Platzi" && <p className="text-sm text-muted">{c.issuer}</p>}
            {file ? (
              <a href={file} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-lime hover:underline">
                Ver certificado <ArrowUpRight className="size-3.5" />
              </a>
            ) : (
              dev && <p className="mt-1 font-mono text-[0.7rem] text-coral">falta public/{CERT_DIR}/{slug}.png</p>
            )}
          </div>
          {c.date && <span className="shrink-0 font-mono text-xs text-muted">{formatMonth(c.date)}</span>}
        </li>
      );
    });

  return (
    <section id="certificaciones" className={wrap}>
      <SectionTitle index="04" title="Certificaciones" />
      <div className="grid gap-4">
        <div className="tile p-6">
          <div className="mb-2 flex items-center justify-between gap-4">
            <p className="label">{main.group}</p>
            <span className="rounded-full bg-lime/15 px-2.5 py-0.5 font-mono text-xs text-lime">{main.items.length}</span>
          </div>
          <ul className="gap-x-10">{list(main.items)}</ul>
        </div>
        {rest.map((g, i) => (
          <div key={g.group} className="tile p-6">
            <div className="mb-2 flex items-center justify-between gap-4">
              <p className="label">{g.group}</p>
              <span className={`rounded-full px-2.5 py-0.5 font-mono text-xs ${["bg-violet/15 text-violet", "bg-coral/15 text-coral", "bg-text/10 text-muted"][i % 3]}`}>
                {g.items.length}
              </span>
            </div>
            <ul>{list(g.items)}</ul>
          </div>
        ))}
      </div>
      {profile.links.certifications && (
        <a href={profile.links.certifications} target="_blank" rel="noreferrer" className="surface mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-muted hover:text-text">
          Ver los certificados en LinkedIn <ArrowUpRight className="size-4" />
        </a>
      )}
    </section>
  );
}

export function About() {
  return (
    <section id="sobre-mi" className={wrap}>
      <SectionTitle index="05" title="Sobre mí" />
      <div className="grid gap-8">
        <div className="tile space-y-5 p-7 text-xl leading-relaxed text-muted md:p-10 md:text-2xl">
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
  const { github, linkedin } = profile.links;
  return (
    <section id="contacto" className={`${wrap} pb-16`}>
      <div className="tile relative overflow-hidden p-8 text-center md:p-16">
        <div aria-hidden className="absolute inset-x-0 -bottom-1/2 mx-auto h-full w-3/4 rounded-full bg-lime/20 blur-[100px]" />
        <p className="label relative">06 · Contacto</p>
        <h2 className="relative mt-4 font-display text-[clamp(3rem,10vw,8rem)] leading-none font-extrabold tracking-tight">
          ¿Hablamos<span className="font-serif font-normal text-lime italic">?</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-lg text-muted">
          Si tenés una idea, un proyecto o una propuesta, escribime. Respondo rápido.
        </p>
        <div className="relative mt-8">
          <ContactForm />
        </div>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
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
      <footer className="surface mt-10 flex flex-wrap justify-between gap-2 rounded-2xl px-5 py-3 text-sm text-muted">
        <p>
          © {new Date().getFullYear()}
        </p>
        <p>Hecho con Next.js, Tailwind y muchas ganas.</p>
      </footer>
    </section>
  );
}

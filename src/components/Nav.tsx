import Link from "next/link";
import { profile } from "@/content/profile";

const LINKS = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#contacto", label: "Contacto" },
];

/** Barra flotante con el interruptor Portafolio ↔ CV. */
export default function Nav({ mode }: { mode: "portfolio" | "cv" }) {
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-[min(64rem,calc(100%-2rem))] items-center justify-between gap-3 rounded-full border border-line bg-ink/70 py-2 pr-2 pl-3 backdrop-blur-xl print:hidden">
      <Link href="/" className="grid size-9 place-items-center rounded-full bg-lime font-display text-sm font-extrabold text-ink" aria-label="Inicio">
        {profile.initials}
      </Link>

      <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Secciones">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-muted transition-colors hover:bg-white/5 hover:text-text">
            {l.label}
          </a>
        ))}
      </nav>

      <div className="relative grid grid-cols-2 rounded-full border border-line bg-panel p-1 text-sm font-semibold" role="group" aria-label="Modo de vista">
        <span
          aria-hidden
          className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-text transition-transform duration-300 ${
            mode === "cv" ? "translate-x-[calc(100%+0px)]" : "translate-x-0"
          } left-1`}
        />
        <Link href="/" aria-current={mode === "portfolio" ? "page" : undefined} className={`relative z-10 rounded-full px-4 py-1.5 text-center transition-colors ${mode === "portfolio" ? "text-ink" : "text-muted hover:text-text"}`}>
          Portafolio
        </Link>
        <Link href="/cv" aria-current={mode === "cv" ? "page" : undefined} className={`relative z-10 rounded-full px-4 py-1.5 text-center transition-colors ${mode === "cv" ? "text-ink" : "text-muted hover:text-text"}`}>
          CV
        </Link>
      </div>
    </header>
  );
}

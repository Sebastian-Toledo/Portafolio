import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import NavMenu from "@/components/NavMenu";
import { SECTIONS } from "@/content/sections";

/**
 * Barra flotante: links a cada sección (en pantallas anchas; en las chicas,
 * el botón "Secciones" con un desplegable) y el interruptor Portafolio ↔ CV.
 */
export default function Nav({ mode }: { mode: "portfolio" | "cv" }) {
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-[min(60rem,calc(100%-2rem))] items-center justify-between gap-1.5 rounded-full border border-line bg-ink/70 py-2 pr-2 pl-2 sm:gap-3 sm:pl-3 backdrop-blur-xl print:hidden">
      {/* "#top" lleva al principio de la página (con scroll suave); desde el CV, al inicio del portafolio. */}
      <a href="/#top" className="grid h-9 place-items-center rounded-full px-2 font-mono sm:px-3 text-sm font-semibold text-lime transition-colors hover:bg-text/5" aria-label="Volver arriba" title="Volver arriba">
        &lt;/&gt;
      </a>
      <div className="mr-auto lg:hidden">
        <NavMenu />
      </div>
      <nav className="mr-auto hidden items-center text-sm lg:flex" aria-label="Secciones">
        {SECTIONS.map((l) => (
          <a key={l.href} href={l.href} className="rounded-full px-2.5 py-1.5 whitespace-nowrap text-muted transition-colors hover:bg-text/5 hover:text-text">
            {l.short ?? l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-1.5 sm:gap-2">
      <ThemeToggle />
      <div className="relative grid shrink-0 grid-cols-2 rounded-full border border-line bg-panel p-1 text-sm font-semibold" role="group" aria-label="Modo de vista">
        <span
          aria-hidden
          className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-text transition-transform duration-300 ${
            mode === "cv" ? "translate-x-[calc(100%+0px)]" : "translate-x-0"
          } left-1`}
        />
        <Link href="/" aria-current={mode === "portfolio" ? "page" : undefined} className={`relative z-10 rounded-full px-3 py-1.5 text-center sm:px-4 transition-colors ${mode === "portfolio" ? "text-ink" : "text-muted hover:text-text"}`}>
          Portafolio
        </Link>
        <Link href="/cv" aria-current={mode === "cv" ? "page" : undefined} className={`relative z-10 rounded-full px-3 py-1.5 text-center sm:px-4 transition-colors ${mode === "cv" ? "text-ink" : "text-muted hover:text-text"}`}>
          CV
        </Link>
      </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/#proyectos", label: "Proyectos", index: "01" },
  { href: "/#experiencia", label: "Experiencia", index: "02" },
  { href: "/#habilidades", label: "Habilidades", index: "03" },
  { href: "/#certificaciones", label: "Certificaciones", index: "04" },
  { href: "/#sobre-mi", label: "Sobre mí", index: "05" },
  { href: "/#contacto", label: "Contacto", index: "06" },
];

/** Botón "Secciones" que despliega un menú para saltar a cada parte del portafolio. */
export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar con Escape o al tocar fuera del menú.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onClick);
    };
  }, [open]);

  return (
    <div ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="menu-secciones"
        aria-label="Secciones"
        className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-panel px-2.5 text-sm sm:px-3.5 font-semibold text-muted transition-colors hover:text-text"
      >
        {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
        <span className="hidden sm:inline">Secciones</span>
      </button>

      {open && (
        <nav
          id="menu-secciones"
          aria-label="Secciones"
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl border border-line bg-ink/95 p-2 shadow-2xl backdrop-blur-xl"
        >
          <ul className="grid gap-1 sm:grid-cols-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 rounded-2xl px-4 py-3 font-display text-lg font-bold transition-colors hover:bg-text/5"
                >
                  <span className="font-mono text-xs font-normal text-lime">{l.index}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

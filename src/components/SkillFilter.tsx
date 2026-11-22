"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Resaltado por habilidad: al elegir una habilidad, se resaltan los puestos
 * (y proyectos) donde la usé y se atenúa el resto.
 */
type Ctx = { selected: string | null; select: (skill: string | null, scroll?: boolean) => void };
const SkillCtx = createContext<Ctx>({ selected: null, select: () => {} });

export function SkillFilterProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null);
  const scrollNext = useRef(false);

  const select = (skill: string | null, scroll = false) => {
    scrollNext.current = scroll && skill !== null;
    setSelected((cur) => (cur === skill ? null : skill));
  };

  // Después de elegir desde "Habilidades", llevar la vista al primer puesto resaltado.
  useEffect(() => {
    if (!selected || !scrollNext.current) return;
    scrollNext.current = false;
    document.querySelector('[data-skill-match="true"]')?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selected]);

  // Escape quita el resaltado.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <SkillCtx.Provider value={{ selected, select }}>
      {children}
      {selected && (
        <div className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 print:hidden" role="status">
          <div className="flex items-center gap-3 rounded-full border border-lime/50 bg-ink/90 py-2 pr-2 pl-5 text-sm shadow-2xl backdrop-blur-xl">
            <span className="text-muted">
              Resaltando <span className="font-semibold text-lime">{selected}</span>
            </span>
            <a href="#habilidades" className="rounded-full px-3 py-1 text-muted hover:bg-text/5 hover:text-text">
              Elegir otra
            </a>
            <button type="button" onClick={() => setSelected(null)} className="grid size-8 place-items-center rounded-full bg-text/10 hover:bg-text/20" aria-label="Quitar resaltado">
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}
    </SkillCtx.Provider>
  );
}

/** Botón de habilidad. `scroll` lleva la vista al primer puesto donde se usó. */
export function SkillChip({ skill, scroll = false, className = "", children }: { skill: string; scroll?: boolean; className?: string; children?: React.ReactNode }) {
  const { selected, select } = useContext(SkillCtx);
  const active = selected === skill;
  return (
    <button
      type="button"
      onClick={() => select(skill, scroll)}
      aria-pressed={active}
      className={`${className} ${active ? "border-lime bg-lime text-ink" : ""}`}
      title={active ? "Quitar resaltado" : `Ver dónde usé ${skill}`}
    >
      {children ?? skill}
    </button>
  );
}

/** Envuelve un puesto o proyecto: se resalta si usa la habilidad elegida, si no se atenúa. */
export function Highlight({ skills, className = "", children }: { skills: readonly string[]; className?: string; children: React.ReactNode }) {
  const { selected } = useContext(SkillCtx);
  const match = selected !== null && skills.includes(selected);
  const state = selected === null ? "" : match ? "ring-2 ring-lime shadow-[0_0_60px_-20px_var(--color-lime)]" : "opacity-35";
  return (
    <div data-skill-match={match} className={`transition-all duration-300 ${state} ${className}`}>
      {children}
    </div>
  );
}

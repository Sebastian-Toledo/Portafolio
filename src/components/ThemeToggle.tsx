"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const KEY = "theme";
const media = () => window.matchMedia("(prefers-color-scheme: light)");

function readSaved(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

/**
 * Botón sol/luna. Por defecto sigue el tema del sistema o navegador;
 * si lo tocás, tu elección queda guardada en este navegador.
 * El tema inicial lo pone el script de layout.tsx antes de pintar (sin parpadeo).
 */
export default function ThemeToggle() {
  // Mientras no haya elección guardada, seguir los cambios del sistema en vivo.
  useEffect(() => {
    const mq = media();
    const onChange = () => {
      if (!readSaved()) document.documentElement.dataset.theme = mq.matches ? "light" : "dark";
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      // Si la elección coincide con el sistema, volver a "seguir al sistema".
      if ((next === "light") === media().matches) localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-panel text-muted transition-colors hover:text-text"
      aria-label="Cambiar entre tema claro y oscuro"
      title="Cambiar tema"
    >
      <Sun className="size-4 light:hidden" aria-hidden />
      <Moon className="hidden size-4 light:block" aria-hidden />
    </button>
  );
}

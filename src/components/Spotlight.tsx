"use client";

import { useEffect } from "react";

/**
 * Efectos que siguen al mouse:
 *  - un reflector de color en el fondo de la página (--gx/--gy en <body>)
 *  - el brillo de cada tarjeta `.tile` (--mx/--my en la tarjeta)
 */
export default function Spotlight() {
  useEffect(() => {
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.body.style.setProperty("--gx", `${e.clientX}px`);
        document.body.style.setProperty("--gy", `${e.clientY}px`);
        const tile = (e.target as HTMLElement | null)?.closest<HTMLElement>(".tile");
        if (tile) {
          const r = tile.getBoundingClientRect();
          tile.style.setProperty("--mx", `${e.clientX - r.left}px`);
          tile.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Manchas de color que flotan lento */}
      <div className="absolute -top-40 -left-40 size-[38rem] animate-float rounded-full bg-violet/25 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 size-[32rem] animate-float rounded-full bg-coral/15 blur-[120px] [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/3 size-[30rem] animate-float rounded-full bg-lime/10 blur-[120px] [animation-delay:-12s]" />
      {/* Reflector que sigue al mouse */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--gx,50%)_var(--gy,20%),color-mix(in_srgb,var(--color-lime)_6%,transparent),transparent_40%)]" />
      {/* Grilla sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(color-mix(in_srgb,var(--color-text)_3%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--color-text)_3%,transparent)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
    </div>
  );
}

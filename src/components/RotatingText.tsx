"use client";

import { useEffect, useState } from "react";

/** Frases que van cambiando cada pocos segundos, con una transición suave. */
export default function RotatingText({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-grid align-bottom">
      {/* Para lectores de pantalla, todas las frases juntas */}
      <span className="sr-only">{words.join(", ")}</span>
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden
          className={`col-start-1 row-start-1 transition-all duration-500 ${
            i === index ? "translate-y-0 opacity-100 blur-0" : "translate-y-3 opacity-0 blur-sm"
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

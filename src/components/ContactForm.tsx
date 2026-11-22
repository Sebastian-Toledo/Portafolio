"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/content/profile";

/**
 * Formulario de contacto sin exponer el mail.
 *
 * Es un <form> HTML común que hace POST al servicio configurado en
 * `profile.contactForm` (Formspree, Web3Forms o cualquiera que acepte
 * formularios). El mail de destino vive sólo en la cuenta de ese servicio.
 *
 * Pensado para durar: no usa ninguna librería. Si el JavaScript falla,
 * el navegador envía el formulario igual (y el servicio muestra su
 * página de "gracias"); con JavaScript, se envía sin salir de la página.
 */
type Status = "idle" | "sending" | "sent" | "error";

const field = "w-full rounded-2xl border border-line bg-panel-2 px-4 py-3 text-text placeholder:text-muted/70 focus:border-lime focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = profile.contactForm;

  if (!endpoint) {
    return process.env.NODE_ENV === "development" ? (
      <p className="rounded-2xl border border-dashed border-lime/50 p-4 text-sm text-muted">
        Falta configurar <code className="text-text">contactForm</code> en <code className="text-text">src/content/profile.ts</code> (ver README).
      </p>
    ) : null;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      e.currentTarget?.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-2xl border border-lime/40 bg-lime/10 p-6 text-lg font-semibold" role="status">
        ¡Gracias! Recibí tu mensaje y te respondo pronto.
      </p>
    );
  }

  return (
    <form action={endpoint} method="POST" onSubmit={onSubmit} className="mx-auto grid max-w-lg gap-3 text-left">
      <label className="grid gap-1.5">
        <span className="label">Nombre</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5">
        <span className="label">Tu mail (para responderte)</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1.5">
        <span className="label">Mensaje</span>
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      {/* Trampa para bots: los humanos no ven este campo */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        <Send className="size-4" /> {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
      {status === "error" && (
        <p className="text-sm text-coral" role="alert">
          No se pudo enviar. Probá de nuevo en un rato o escribime por LinkedIn.
        </p>
      )}
    </form>
  );
}

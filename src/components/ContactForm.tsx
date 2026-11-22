"use client";

import { useState } from "react";
import { Mail, Send, X } from "lucide-react";
import { profile } from "@/content/profile";

/**
 * Cápsula "Escribime un mail" que despliega un formulario de contacto.
 * Los mensajes llegan al mail personal sin que el mail aparezca en la página.
 *
 * Usa Web3Forms: el formulario manda los datos a su API junto con una clave
 * pública (`profile.contactKey`), y Web3Forms los reenvía al mail asociado a
 * esa clave. El mail de destino nunca está en el código.
 *
 * Pensado para durar: es un <form> HTML común, sin librerías. Si el JavaScript
 * falla, el navegador lo envía igual; con JavaScript, se envía sin salir de la página.
 */
const ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "sent" | "error";

const field = "w-full rounded-2xl border border-line bg-panel-2 px-4 py-3 text-text placeholder:text-muted/70 focus:border-lime focus:outline-none";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const key = profile.contactKey;

  if (!key) {
    return process.env.NODE_ENV === "development" ? (
      <p className="mx-auto max-w-lg rounded-2xl border border-dashed border-lime/50 p-4 text-sm text-muted">
        Falta la clave de Web3Forms en <code className="text-text">contactKey</code> (<code className="text-text">src/content/profile.ts</code>, ver README). Sin ella, la cápsula no se muestra.
      </p>
    ) : null;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || data.success === false) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
      >
        <Mail className="size-4" /> Escribime un mail
      </button>
    );
  }

  if (status === "sent") {
    return (
      <p className="mx-auto max-w-lg rounded-2xl border border-lime/40 bg-lime/10 p-6 text-lg font-semibold" role="status">
        ¡Gracias! Recibí tu mensaje y te respondo pronto.
      </p>
    );
  }

  return (
    <form action={ENDPOINT} method="POST" onSubmit={onSubmit} className="mx-auto grid max-w-lg gap-3 rounded-3xl border border-line bg-ink/60 p-5 text-left">
      <div className="flex items-center justify-between">
        <p className="font-display text-xl font-bold">Escribime un mail</p>
        <button type="button" onClick={() => setOpen(false)} className="grid size-9 place-items-center rounded-full hover:bg-text/10" aria-label="Cerrar formulario">
          <X className="size-4" />
        </button>
      </div>
      <input type="hidden" name="access_key" value={key} />
      <input type="hidden" name="subject" value="Nuevo mensaje desde el portafolio" />
      <input type="hidden" name="from_name" value="Portafolio" />
      {/* Trampa para bots: los humanos no ven esta casilla */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
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

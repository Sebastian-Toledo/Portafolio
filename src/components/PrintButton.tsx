"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
    >
      <Download className="size-4" /> Descargar PDF
    </button>
  );
}

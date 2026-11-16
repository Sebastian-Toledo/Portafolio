/** Aviso que sólo se ve con `npm run dev`: recuerda dónde se edita el contenido. */
export default function DevBanner() {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs rounded-2xl border border-lime/40 bg-ink/90 p-3 text-xs text-muted backdrop-blur print:hidden">
      <span className="font-semibold text-lime">Modo desarrollo · </span>
      Todo el contenido se edita en <code className="text-text">src/content/profile.ts</code>.
    </div>
  );
}

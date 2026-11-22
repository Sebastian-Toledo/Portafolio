/**
 * Maquetas de los proyectos que no tienen captura: dibujan, con HTML y CSS,
 * cómo se ve la interfaz de cada app. Son ilustrativas, no capturas reales.
 */

/** Ventana de navegador que envuelve una captura o una maqueta. */
export function BrowserFrame({ url, children, mock = false }: { url: string; children: React.ReactNode; mock?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-panel-2 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-coral/70" />
          <span className="size-2.5 rounded-full bg-lime/70" />
          <span className="size-2.5 rounded-full bg-violet/70" />
        </span>
        <span className="mx-auto truncate rounded-md bg-ink/60 px-3 py-0.5 font-mono text-[0.68rem] text-muted">{url}</span>
        {mock && <span className="shrink-0 font-mono text-[0.6rem] tracking-widest text-muted uppercase">Maqueta ilustrativa</span>}
      </div>
      {children}
    </figure>
  );
}

/** Capturas de una app de celular, como teléfonos lado a lado. */
export function PhoneScreens({ screens }: { screens: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 rounded-2xl bg-panel-2 p-4 sm:gap-6 sm:p-8">
      {screens.map((s) => (
        <figure key={s.src} className="overflow-hidden rounded-[1.4rem] border-4 border-text/15 bg-ink shadow-xl sm:rounded-[2rem] sm:border-[6px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.alt} loading="lazy" className="w-full" />
        </figure>
      ))}
    </div>
  );
}

const ORDERS = [
  { id: "#1048", client: "Librería Sur", item: "Tarjetas personales × 500", status: "En imprenta", tone: "bg-violet/20 text-violet" },
  { id: "#1047", client: "Café Ocho", item: "Menús plastificados × 40", status: "Listo", tone: "bg-lime/20 text-lime" },
  { id: "#1046", client: "Estudio Ríos", item: "Folletos A5 × 1000", status: "Diseño", tone: "bg-coral/20 text-coral" },
  { id: "#1045", client: "Club Atlético", item: "Banner 2 × 1 m", status: "Entregado", tone: "bg-text/10 text-muted" },
];

/** Casa Estella: panel de gestión de pedidos de la imprenta. */
function PrintOrdersMock() {
  return (
    <div className="grid grid-cols-[4.5rem_1fr] text-[0.7rem]" aria-hidden>
      <div className="space-y-2 border-r border-line p-2.5">
        <div className="mb-3 h-2 w-10 rounded bg-lime/70" />
        {["Pedidos", "Clientes", "Productos", "Caja"].map((l, i) => (
          <div key={l} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-text/10 font-semibold text-text" : "text-muted"}`}>
            {l}
          </div>
        ))}
      </div>
      <div className="space-y-3 p-3">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-bold">Pedidos</p>
          <span className="rounded-md bg-lime px-2 py-0.5 font-semibold text-ink">+ Nuevo</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Pendientes", "12"],
            ["En imprenta", "5"],
            ["Para entregar", "8"],
          ].map(([l, n]) => (
            <div key={l} className="rounded-lg border border-line p-2">
              <p className="text-muted">{l}</p>
              <p className="font-display text-base font-bold">{n}</p>
            </div>
          ))}
        </div>
        <div className="divide-y divide-line rounded-lg border border-line">
          {ORDERS.map((o) => (
            <div key={o.id} className="grid grid-cols-[2.6rem_1fr_auto] items-center gap-2 px-2 py-1.5">
              <span className="font-mono text-muted">{o.id}</span>
              <span className="truncate">
                <span className="font-semibold">{o.client}</span> <span className="text-muted">· {o.item}</span>
              </span>
              <span className={`rounded-full px-2 py-0.5 font-semibold ${o.tone}`}>{o.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Juegos multijugador: tablero en tiempo real con jugadores conectados y chat. */
function MultiplayerMock() {
  const board = ["X", "O", "X", "", "O", "", "", "X", ""];
  return (
    <div className="grid grid-cols-[1fr_8.5rem] gap-3 p-3 text-[0.7rem]" aria-hidden>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-bold">Sala #42</p>
          <span className="flex items-center gap-1 text-lime">
            <span className="size-1.5 animate-pulse rounded-full bg-lime" /> en vivo
          </span>
        </div>
        <div className="mx-auto grid w-fit grid-cols-3 gap-1.5">
          {board.map((c, i) => (
            <div key={i} className={`grid size-11 place-items-center rounded-lg border border-line bg-ink/40 font-display text-lg font-extrabold ${c === "X" ? "text-coral" : "text-violet"}`}>
              {c}
            </div>
          ))}
        </div>
        <p className="text-center text-muted">Turno de <span className="font-semibold text-violet">Lu</span></p>
      </div>
      <div className="flex flex-col gap-2 border-l border-line pl-3">
        <p className="label !text-[0.6rem]">Jugadores · 3</p>
        {[
          ["Seba", "bg-coral"],
          ["Lu", "bg-violet"],
          ["Tomi", "bg-lime"],
        ].map(([n, c]) => (
          <div key={n} className="flex items-center gap-1.5">
            <span className={`size-2 rounded-full ${c}`} /> {n}
          </div>
        ))}
        <div className="mt-auto space-y-1 rounded-lg bg-ink/40 p-1.5">
          <p><span className="text-coral">Seba:</span> ¡revancha!</p>
          <p><span className="text-lime">Tomi:</span> entro a mirar</p>
        </div>
      </div>
    </div>
  );
}

const MOCKUPS: Record<string, { url: string; render: () => React.ReactNode }> = {
  "casa-estella": { url: "pedidos.casaestella.app", render: PrintOrdersMock },
  "juegos-nodejs": { url: "localhost:3000/sala/42", render: MultiplayerMock },
};

/** Maqueta del proyecto, si tiene una. */
export function ProjectMockup({ slug }: { slug: string }) {
  const mock = MOCKUPS[slug];
  if (!mock) return null;
  return (
    <BrowserFrame url={mock.url} mock>
      {mock.render()}
    </BrowserFrame>
  );
}

/**
 * Fondo de código: columnas de código fuente que suben despacio, muy tenues,
 * cubriendo todo el ancho de la pantalla detrás del contenido. Puramente decorativo.
 */

const SNIPPETS: string[][] = [
  [
    "package calls",
    "",
    "// Router decide a qué agente va cada llamada entrante.",
    "type Router struct {",
    "	agents  map[string]*Agent",
    "	fallback *Agent",
    "	log     *slog.Logger",
    "}",
    "",
    "func (r *Router) Route(ctx context.Context, c *Call) error {",
    "	agent, ok := r.agents[c.Campaign]",
    "	if !ok {",
    '		r.log.Warn("campaign not found", "id", c.Campaign)',
    "		agent = r.fallback",
    "	}",
    "	ctx, cancel := context.WithTimeout(ctx, 30*time.Second)",
    "	defer cancel()",
    "	if err := agent.Answer(ctx, c); err != nil {",
    '		return fmt.Errorf("answer call %s: %w", c.ID, err)',
    "	}",
    "	return nil",
    "}",
  ],
  [
    'import { useEffect, useState } from "react";',
    "",
    "export function useCalls(accountId: string) {",
    "  const [calls, setCalls] = useState<Call[]>([]);",
    "  const [loading, setLoading] = useState(true);",
    "",
    "  useEffect(() => {",
    "    const ctrl = new AbortController();",
    "    fetch(`/api/accounts/${accountId}/calls`, {",
    "      signal: ctrl.signal,",
    "    })",
    "      .then((res) => res.json())",
    "      .then((data) => setCalls(data.items))",
    "      .finally(() => setLoading(false));",
    "    return () => ctrl.abort();",
    "  }, [accountId]);",
    "",
    "  return { calls, loading };",
    "}",
  ],
  [
    "# Clasifica tickets de soporte con un modelo de lenguaje",
    "import json",
    "from anthropic import Anthropic",
    "",
    "client = Anthropic()",
    "",
    "def classify(ticket: dict) -> str:",
    "    msg = client.messages.create(",
    '        model="claude-sonnet-5-5",',
    "        max_tokens=200,",
    "        messages=[{",
    '            "role": "user",',
    '            "content": f"Clasificá este ticket: {ticket[\'text\']}",',
    "        }],",
    "    )",
    "    return msg.content[0].text.strip()",
    "",
    "for t in json.load(open('tickets.json')):",
    "    print(t['id'], classify(t))",
  ],
  [
    "apiVersion: apps/v1",
    "kind: Deployment",
    "metadata:",
    "  name: sip-proxy",
    "  namespace: voice",
    "spec:",
    "  replicas: 3",
    "  selector:",
    "    matchLabels:",
    "      app: sip-proxy",
    "  template:",
    "    spec:",
    "      containers:",
    "        - name: proxy",
    "          image: registry/sip-proxy:1.24.3",
    "          ports:",
    "            - containerPort: 5060",
    "              protocol: UDP",
    "          resources:",
    "            limits: { cpu: 500m, memory: 256Mi }",
  ],
  [
    "// Llamadas fallidas de la última hora, agrupadas por motivo",
    "db.calls.aggregate([",
    "  { $match: {",
    '      status: "failed",',
    "      startedAt: { $gte: new Date(Date.now() - 3600e3) },",
    "  } },",
    "  { $group: {",
    '      _id: "$hangupCause",',
    "      total: { $sum: 1 },",
    '      carriers: { $addToSet: "$carrier" },',
    "  } },",
    "  { $sort: { total: -1 } },",
    "  { $limit: 10 },",
    "]);",
    "",
    "SELECT account_id, COUNT(*) AS minutes",
    "FROM usage",
    "WHERE created_at > NOW() - INTERVAL 1 DAY",
    "GROUP BY account_id",
    "ORDER BY minutes DESC;",
  ],
  [
    "export async function runAutomation(flow: Flow) {",
    "  for (const step of flow.steps) {",
    "    const started = performance.now();",
    "    try {",
    "      const result = await step.run(flow.context);",
    "      flow.context = { ...flow.context, ...result };",
    "    } catch (err) {",
    "      await notify(flow.owner, {",
    "        step: step.name,",
    "        error: String(err),",
    "      });",
    "      throw err;",
    "    } finally {",
    "      metrics.observe(step.name, performance.now() - started);",
    "    }",
    "  }",
    "  return flow.context;",
    "}",
  ],
];

const KEYWORDS =
  /\b(package|import|from|export|function|func|return|const|let|type|struct|if|else|for|in|range|def|async|await|try|catch|finally|throw|defer|new|map|nil|true|false|SELECT|FROM|WHERE|GROUP|BY|ORDER|DESC|AS|COUNT|INTERVAL)\b/;

/** Pinta comentarios, strings y palabras clave con un color apenas distinto. */
function Line({ text }: { text: string }) {
  const trimmed = text.trimStart();
  if (trimmed.startsWith("//") || trimmed.startsWith("#")) return <div className="text-violet/40">{text}</div>;
  const parts = text.split(/("[^"]*"|'[^']*'|`[^`]*`|\b\w+\b)/g);
  return (
    <div>
      {parts.map((p, i) =>
        /^["'`]/.test(p) ? (
          <span key={i} className="text-coral/40">{p}</span>
        ) : KEYWORDS.test(p) && /^\w+$/.test(p) ? (
          <span key={i} className="text-lime/40">{p}</span>
        ) : (
          p
        ),
      )}
      {text === "" && " "}
    </div>
  );
}

// Columnas suficientes para cubrir pantallas muy anchas; las que no entran quedan recortadas.
const COLUMNS = 9;

export default function TerminalBackground() {
  return (
    <div className="absolute inset-0 flex gap-8 overflow-hidden px-6 text-text/[0.09] light:text-text/[0.13] [mask-image:linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]">
      {Array.from({ length: COLUMNS }, (_, col) => {
        const lines = SNIPPETS[col % SNIPPETS.length];
        // El bloque se repite 6 veces y la animación sube la mitad: el ciclo empalma sin corte.
        return (
          <div key={col} className="w-[24rem] shrink-0">
            <div className="animate-scroll-up" style={{ animationDuration: `${90 + (col % 4) * 15}s`, animationDelay: `-${col * 13}s` }}>
              {Array.from({ length: 6 }, (_, r) => (
                <pre key={r} className="pb-10 font-mono text-[11px] leading-5 whitespace-pre">
                  {lines.map((l, i) => (
                    <Line key={i} text={l.replace(/\t/g, "    ")} />
                  ))}
                </pre>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

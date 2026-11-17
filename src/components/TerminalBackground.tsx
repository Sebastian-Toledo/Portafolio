/**
 * Fondo de "terminal": columnas de comandos y salidas que suben despacio,
 * muy tenues, detrás de todo el contenido. Puramente decorativo.
 */

const SESSIONS: string[][] = [
  [
    "PS C:\\Users\\seba> ping 1.1.1.1",
    "Pinging 1.1.1.1 with 32 bytes of data:",
    "Reply from 1.1.1.1: bytes=32 time=13ms TTL=58",
    "Reply from 1.1.1.1: bytes=32 time=10ms TTL=58",
    "Reply from 1.1.1.1: bytes=32 time=11ms TTL=58",
    "Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)",
    "",
    "$ kubectl get pods -n voice",
    "NAME                         READY   STATUS    RESTARTS   AGE",
    "call-router-7d9f8b6c4-x2kqp  1/1     Running   0          3d",
    "sip-proxy-5c6b7d9f8-lm4tn    1/1     Running   0          3d",
    "ai-agent-6f7c8d9b5-pq8rs     2/2     Running   1          19h",
    "",
    "$ go test ./...",
    "ok   github.com/seba/platform/calls     0.412s",
    "ok   github.com/seba/platform/agents    0.287s",
    "ok   github.com/seba/platform/webhooks  0.198s",
    "",
    "$ git log --oneline -3",
    "778b99a Unir tarjetas de la portada",
    "1558328 Cambiar el título a AI Engineer",
    "42b9595 Precisar telefonía IP (VoIP/SIP)",
  ],
  [
    "$ sudo apt update",
    "Reading package lists... Done",
    "Building dependency tree... Done",
    "65 packages can be upgraded.",
    "",
    "$ docker ps --format '{{.Names}}  {{.Status}}'",
    "api        Up 2 hours",
    "worker     Up 2 hours",
    "redis      Up 2 hours",
    "",
    "$ curl -s localhost:8080/health | jq",
    "{",
    '  "status": "ok",',
    '  "uptime": "2h14m",',
    '  "version": "1.24.3"',
    "}",
    "",
    "$ npm run build",
    "> next build",
    "✓ Compiled successfully",
    "✓ Generating static pages (5/5)",
    "",
    "$ aws logs tail /aws/lambda/automation --since 5m",
    "INFO  flow started  id=8f2c",
    "INFO  llm response  tokens=812 latency=1.2s",
    "INFO  flow finished status=done",
  ],
  [
    "$ sngrep -I capture.pcap",
    "INVITE sip:1001@pbx.local SIP/2.0",
    "SIP/2.0 100 Trying",
    "SIP/2.0 180 Ringing",
    "SIP/2.0 200 OK",
    "ACK sip:1001@pbx.local SIP/2.0",
    "BYE sip:1001@pbx.local SIP/2.0",
    "",
    "$ traceroute api.example.com",
    " 1  192.168.0.1   1.2 ms",
    " 2  10.20.0.1     8.7 ms",
    " 3  172.16.4.9   12.4 ms",
    "",
    "$ python automate.py --dry-run",
    "→ leyendo 128 tickets",
    "→ clasificando con IA...",
    "→ 117 resueltos automáticamente",
    "",
    "C:\\Users\\seba> tree /f src",
    "├── app",
    "│   ├── cv",
    "│   └── page.tsx",
    "└── components",
    "    └── Hero.tsx",
  ],
];

const isPrompt = (l: string) => /^(\$|PS |C:\\)/.test(l);

function Column({ lines, duration, className = "" }: { lines: string[]; duration: string; className?: string }) {
  // El bloque se repite: la animación sube la mitad del alto y vuelve a empezar sin corte.
  const block = (key: string) => (
    <pre key={key} className="pb-8 font-mono text-[11px] leading-5 whitespace-pre">
      {lines.map((l, i) => (
        <div key={i} className={isPrompt(l) ? "text-lime/50" : undefined}>
          {l || " "}
        </div>
      ))}
    </pre>
  );
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="animate-scroll-up" style={{ animationDuration: duration }}>
        {["a", "b", "c", "d"].map(block)}
      </div>
    </div>
  );
}

export default function TerminalBackground() {
  return (
    <div className="absolute inset-0 grid grid-cols-1 gap-10 px-6 text-text/[0.09] md:grid-cols-2 lg:grid-cols-3 light:text-text/[0.12] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
      <Column lines={SESSIONS[0]} duration="90s" />
      <Column lines={SESSIONS[1]} duration="120s" className="hidden md:block" />
      <Column lines={SESSIONS[2]} duration="100s" className="hidden lg:block" />
    </div>
  );
}

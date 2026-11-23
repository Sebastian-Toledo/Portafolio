/**
 * ✏️ TODO EL CONTENIDO DEL PORTAFOLIO ESTÁ ACÁ.
 * Editá este archivo y la página (y el CV) se actualizan solos.
 */

export const profile = {
  name: "Sebastian Matias Toledo",
  role: "AI Engineer & Full Stack Developer",
  // Frases que van rotando en la portada ("Hola, soy Sebastian y …").
  rotating: [
    "construyo apps de punta a punta",
    "automatizo procesos con IA",
    "desarrollo servicios en Go",
    "armo interfaces con React",
    "cocino con código",
  ],
  summary:
    "Desarrollador Full Stack de La Plata. Me especializo en encontrar y resolver errores en sistemas en producción, y disfruto construir productos completos: del frontend a la base de datos.",
  location: "La Plata, Argentina",
  available: true,
  availabilityText: "Abierto a charlar sobre proyectos",
  links: {
    github: "https://github.com/Sebastian-Toledo",
    linkedin: "https://www.linkedin.com/in/sebastian-toledo-39b272166/",
    certifications: "https://www.linkedin.com/in/sebastian-toledo-39b272166/details/certifications/",
  },
  /**
   * Clave de Web3Forms para el formulario de contacto (el mail NO va en el código).
   * Se saca gratis en https://web3forms.com poniendo el mail personal: la clave llega
   * a ese correo. Es pública por diseño, así que puede ir acá sin problema.
   * Mientras esté vacía, la cápsula "Escribime un mail" no aparece.
   */
  contactKey: "c2bd2df7-47db-457c-a37c-07d69d937ffe",
  // Para el CV: texto un poco más largo.
  about: [
    "Soy desarrollador Full Stack y AI Engineer, y estudio Analista Programador Universitario en la Facultad de Informática de la UNLP. Desde 2021 trabajo en productos web: en mis primeras tres experiencias laborales me dediqué al frontend con React.",
    "Entré a Vozy como pasante y ahí aprendí Go, AWS, GCP, Kubernetes, MongoDB, Elasticsearch y telefonía IP (VoIP/SIP). Después pasé a Software Engineer, desarrollando de punta a punta y resolviendo errores de los productos en producción. Hoy soy AI Engineer y Full Stack: creo herramientas con IA para el resto de la empresa —skills para asistentes de IA y servidores MCP— y uso la IA en mi trabajo diario para desarrollar, investigar errores y documentar más rápido.",
    "En mis ratos libres armo proyectos personales, en los que también programo con asistentes de IA; el más especial es “Con amor, mamá”, el recetario digital con las recetas de mi mamá.",
  ],
};

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image?: string;
  /** Link a la app publicada (vacío si todavía no está online). */
  url?: string;
  repo?: string;
  year: string;
  featured?: boolean;
  /** Color de acento de la tarjeta. */
  accent: "lime" | "violet" | "coral";
  example?: boolean;
  /** Capturas de una app de celular: se muestran como teléfonos lado a lado. */
  screens?: { src: string; alt: string }[];
  /** Archivo para descargar (por ejemplo, el instalador de una app Android). */
  download?: { href: string; label: string };
}

export const projects: Project[] = [
  {
    slug: "con-amor-cristina",
    title: "Con amor, mamá",
    tagline: "El recetario digital de mi mamá",
    description:
      "Una app para guardar y compartir las recetas de mi mamá. Cualquiera puede buscarlas y la familia puede cargar nuevas con su cuenta: con fotos, ingredientes para ir tachando, favoritas, modo oscuro y varias paletas de colores. Empezó en 2022 con React y Chakra UI, y en 2026 la rehice completa con Next.js.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Better Auth", "Drizzle ORM", "SQLite / Turso"],
    image: "/projects/con-amor-cristina.png",
    url: "https://con-amor-mama.vercel.app",
    repo: "https://github.com/Sebastian-Toledo/family-recipe",
    year: "2022 — Hoy",
    featured: true,
    accent: "coral",
  },
  {
    slug: "intervalos",
    title: "Intervalos",
    tagline: "App Android a pedido de un profesor de educación física",
    description:
      "La hice a pedido de un familiar que es profesor de educación física y necesitaba una app para usar en sus clases y entrenamientos. Sirve para entrenar por intervalos: Tabata, HIIT, boxeo o circuitos. Armás tus timers con preparación, rondas, ciclos y enfriamiento; durante el entrenamiento la pantalla cambia de color según la fase y una guía por voz anuncia las rondas y la cuenta regresiva. Sigue contando y sonando con la pantalla apagada y guarda el historial. La interfaz está hecha con HTML, CSS y JavaScript dentro de un WebView, y la parte nativa en Java (servicio en segundo plano, notificaciones, voz y sonidos), sin librerías externas.",
    tags: ["Android", "Java", "JavaScript", "WebView", "Text-to-Speech"],
    screens: [
      { src: "/projects/intervalos-home.png", alt: "Lista de timers guardados" },
      { src: "/projects/intervalos-run.png", alt: "Entrenamiento en curso: fase de trabajo, ronda 1 de 10" },
      { src: "/projects/intervalos-edit.png", alt: "Editor de un timer con preparación, trabajo, descanso y rondas" },
    ],
    download: { href: "/descargas/Intervalos-1.1.apk", label: "Descargar APK" },
    year: "2026",
    accent: "violet",
  },
  {
    slug: "juegos-nodejs",
    title: "Juegos multijugador con Node.js",
    tagline: "Seminario de la Facultad de Informática (UNLP)",
    description:
      "Proyecto final del seminario: dos juegos en tiempo real donde varios usuarios juegan a la vez, comunicados con Socket.IO. En los trabajos previos usé Docker para levantar los entornos.",
    tags: ["Node.js", "Socket.IO", "Docker", "JavaScript"],
    year: "2021",
    accent: "violet",
  },
  {
    slug: "casa-estella",
    title: "Gestión de pedidos para una imprenta",
    tagline: "Proyecto freelance para Casa Estella",
    description:
      "App web para administrar los pedidos de una imprenta, de punta a punta: frontend en React con TypeScript y Chakra UI, API en Node.js con Express y base de datos en MongoDB.",
    tags: ["React", "TypeScript", "Chakra UI", "Node.js", "Express", "MongoDB"],
    year: "2023",
    accent: "lime",
  },
];

export interface Position {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  /** Habilidades que usé en este puesto: se resaltan al elegirlas en "Habilidades". */
  skills: Skill[];
}

export interface Experience {
  company: string;
  /** Período total en la empresa. */
  period: string;
  /** Puestos dentro de la empresa, del más nuevo al más viejo. */
  positions: Position[];
}

export const experience: Experience[] = [
  {
    company: "Vozy",
    period: "Sep 2023 — Hoy",
    positions: [
      {
        title: "AI Engineer & Full Stack Developer",
        period: "Jun 2025 — Hoy",
        description:
          "Creo herramientas con IA para que las use el resto de la empresa, y sigo desarrollando de punta a punta en la plataforma.",
        highlights: [
          "Skills para asistentes de IA que los demás equipos usan en su trabajo diario",
          "Servidores MCP que conectan la IA con las herramientas y los datos de la empresa",
          "Automatizaciones con IA y mejoras de la plataforma impulsadas por IA",
          "Desarrollo Full Stack con Go y React",
        ],
        skills: ["Skills para asistentes de IA", "Servidores MCP", "Automatizaciones con IA", "Prompt engineering", "Go", "React", "Git, GitHub y GitLab"],
      },
      {
        title: "Software Engineer · Full Stack",
        period: "Mar 2024 — May 2025",
        description:
          "Desarrollé funcionalidades de punta a punta y me ocupé de investigar y resolver los errores de los productos en producción.",
        highlights: [
          "Backend en Go y frontend en React",
          "Investigación y resolución de errores en producción",
          "Diagnóstico de llamadas y conectividad con telefonía IP (VoIP/SIP) y redes",
          "Monitoreo de servicios y lambdas con AWS, GCP y kubectl",
          "Uso diario de MongoDB, MySQL, Redis y GitLab",
        ],
        skills: ["Go", "React", "MongoDB", "MySQL", "Redis", "Elasticsearch / Kibana", "AWS", "GCP", "Kubernetes (kubectl)", "Telefonía IP (VoIP/SIP)", "Redes", "Git, GitHub y GitLab"],
      },
      {
        title: "Pasante",
        period: "Sep 2023 — Feb 2024",
        description:
          "Entré en el área de soporte y debugging. Fue mi primer contacto con una plataforma de voz en producción y aprendí cómo funciona por dentro.",
        highlights: [
          "Aprendí Go y la arquitectura de los servicios de la plataforma",
          "Aprendí telefonía IP (VoIP/SIP) y redes: cómo viaja una llamada y dónde puede fallar",
          "Primeros pasos con AWS, GCP y Kubernetes para revisar servicios",
          "Consultas en MongoDB y en Elasticsearch (Kibana) para investigar errores",
        ],
        skills: ["Go", "Telefonía IP (VoIP/SIP)", "Redes", "AWS", "GCP", "Kubernetes (kubectl)", "MongoDB", "Elasticsearch / Kibana"],
      },
    ],
  },
  {
    company: "Casa Estella",
    period: "Ene 2023 — Jun 2023",
    positions: [
      {
        title: "Desarrollador Full Stack (freelance)",
        period: "Ene 2023 — Jun 2023",
        description: "Desarrollé una app para gestionar los pedidos de una imprenta.",
        highlights: ["Frontend con React, TypeScript y Chakra UI", "Backend con Node.js, TypeScript y Express", "Base de datos en MongoDB"],
        skills: ["React", "TypeScript", "Chakra UI", "Node.js", "Express", "MongoDB"],
      },
    ],
  },
  {
    company: "Minutentag",
    period: "May 2022 — Sep 2022",
    positions: [
      {
        title: "Frontend Developer / Full Stack",
        period: "May 2022 — Sep 2022",
        description: "Empresa de desarrollo de software. Trabajé en una página web y una app para organizar eventos que daban NFTs como recompensa.",
        highlights: ["Módulo de pre-ingreso con React y Semantic UI", "Proyectos con WordPress"],
        skills: ["React", "Semantic UI", "JavaScript", "WordPress"],
      },
    ],
  },
  {
    company: "Campeak",
    period: "Jul 2021 — Dic 2021",
    positions: [
      {
        title: "Frontend Developer",
        period: "Jul 2021 — Dic 2021",
        description: "Software de gestión para campings.",
        highlights: ["Creación de la página web para la gestión de campings", "Módulo de pre-ingreso con React y Semantic UI"],
        skills: ["React", "Semantic UI", "JavaScript"],
      },
    ],
  },
];

export interface Education {
  title: string;
  place: string;
  period: string;
}

export const education: Education[] = [
  { title: "Analista Programador Universitario", place: "Facultad de Informática, UNLP · último año en curso", period: "2015 — Hoy" },
  { title: "Desarrollo web Full Stack", place: "Argentina Programa · React, Node.js, JSP, Servlets y Sockets", period: "Nov 2021 — Feb 2022" },
];

export const skills = [
  { group: "IA", items: ["Skills para asistentes de IA", "Servidores MCP", "Automatizaciones con IA", "Prompt engineering"] },
  { group: "Lenguajes", items: ["JavaScript", "TypeScript", "Go", "Java"] },
  { group: "Frontend y mobile", items: ["React", "Next.js", "Tailwind CSS", "Chakra UI", "Semantic UI", "WordPress", "Android"] },
  { group: "Backend y datos", items: ["Node.js", "Express", "MongoDB", "MySQL", "Redis", "Elasticsearch / Kibana", "SQLite / Turso"] },
  { group: "Cloud y herramientas", items: ["AWS", "GCP", "Kubernetes (kubectl)", "Docker", "Git, GitHub y GitLab", "Linux", "Telefonía IP (VoIP/SIP)", "Redes", "Vercel", "Metodologías ágiles"] },
  { group: "Idiomas", items: ["Español (nativo)", "Inglés"] },
] as const satisfies readonly { group: string; items: readonly string[] }[];

/** Cualquier habilidad de la lista de arriba (si escribís mal un nombre, TypeScript avisa). */
export type Skill = (typeof skills)[number]["items"][number];

export interface Certification {
  title: string;
  issuer: string;
  /** "AAAA-MM"; vacío si no tiene fecha. */
  date: string;
  /** Link público para verificar el certificado, si no hay archivo en public/certificados. */
  url?: string;
}

// Copiadas de LinkedIn (Licencias y certificaciones). Dentro de cada grupo van de la más nueva a la más vieja.
export const certifications: { group: string; items: Certification[] }[] = [
  {
    group: "IA y automatización",
    items: [
      { title: "GitHub Copilot", issuer: "Platzi", date: "2024-05" },
      { title: "Automatización de procesos con Zapier", issuer: "Platzi", date: "2024-02" },
      { title: "Introducción a la Inteligencia Artificial", issuer: "Platzi", date: "2024-01" },
      { title: "Prompt Engineering con ChatGPT", issuer: "Platzi", date: "2024-01" },
      { title: "Creación de páginas web con ChatGPT", issuer: "Platzi", date: "2024-01" },
      { title: "Herramientas de IA para equipos de datos", issuer: "Platzi", date: "2024-01" },
      { title: "Generación de imágenes con IA: DALL-E, Midjourney y Stable Diffusion", issuer: "Platzi", date: "2024-01" },
      { title: "IA para Product Discovery y Product Design", issuer: "Platzi", date: "2024-01" },
      { title: "ChatGPT para Product Designers", issuer: "Platzi", date: "2024-01" },
      { title: "Diseño ético para el desarrollo de productos digitales con IA", issuer: "Platzi", date: "2024-01" },
      { title: "Diseño de estrategias de negocio con IA", issuer: "Platzi", date: "2024-01" },
      { title: "Creación de contenido con IA", issuer: "Platzi", date: "2024-01" },
      { title: "IA para Content Marketing", issuer: "Platzi", date: "2024-01" },
      { title: "IA para SEO", issuer: "Platzi", date: "2024-01" },
      { title: "IA para Finanzas", issuer: "Platzi", date: "2024-01" },
      { title: "Work with Artificial Intelligence Tools", issuer: "Platzi", date: "2024-01" },
      { title: "Practicing English with ChatGPT", issuer: "Platzi", date: "2024-01" },
      { title: "Herramientas de IA para developers", issuer: "Platzi", date: "2023-12" },
    ],
  },
  {
    group: "Ciberseguridad",
    items: [
      { title: "Introducción al desarrollo seguro", issuer: "Backtrack Academy", date: "2025-09" },
      { title: "Protegé tu negocio: ciberseguridad en el teletrabajo", issuer: "Fundación Santa María la Real", date: "2025-09", url: "https://skillshop.exceedlms.com/student/award/G1f9J3D7PqfNWRbJvtixukR2" },
      { title: "Ciberseguridad y privacidad para empresas", issuer: "Platzi", date: "2025-03", url: "https://platzi.com/p/stoledo9745/curso/10928-course/diploma/detalle/" },
      { title: "Curso de ciberseguridad y privacidad para empresas", issuer: "Platzi", date: "2024-09", url: "https://platzi.com/p/stoledo9745/curso/8044-course/diploma/detalle/" },
      { title: "Ciberseguridad para desarrollo web", issuer: "Platzi", date: "2024-05", url: "https://platzi.com/p/stoledo9745/curso/9443-course/diploma/detalle/" },
      { title: "Taller de ciberseguridad", issuer: "Platzi", date: "2024-05" },
      { title: "Ciberseguridad para empresas", issuer: "Platzi", date: "2023-09" },
    ],
  },
  {
    group: "Desarrollo",
    items: [
      { title: "Go intermedio: programación orientada a objetos y concurrencia", issuer: "Platzi", date: "2024-06", url: "https://platzi.com/p/stoledo9745/curso/2357-course/diploma/detalle/" },
      { title: "Unit testing con Go", issuer: "Platzi", date: "2024-05", url: "https://platzi.com/p/stoledo9745/curso/3337-course/diploma/detalle/" },
      { title: "Git y GitHub", issuer: "Platzi", date: "2024-01" },
      { title: "Programación en Go", issuer: "Platzi", date: "2023-12" },
      { title: "Fundamentos de ingeniería de software", issuer: "Platzi", date: "2023-09" },
    ],
  },
  {
    group: "Agilidad y otros",
    items: [
      { title: "Vozy Pro · Nivel básico", issuer: "Vozy", date: "2023-12" },
      { title: "Gestión de equipos ágiles", issuer: "Platzi", date: "2023-10" },
      { title: "Adaptabilidad y flexibilidad para el crecimiento personal", issuer: "Platzi", date: "2023-10" },
      { title: "Curso profesional de Scrum", issuer: "Platzi", date: "2023-09" },
      { title: "Historias de usuario en Scrum", issuer: "Platzi", date: "2023-09" },
      { title: "Introducción a Platzi", issuer: "Platzi", date: "" },
    ],
  },
];

/**
 * Nombre de archivo (sin extensión) de la imagen de un certificado.
 * "Unit testing con Go" → "unit-testing-con-go". La imagen va en
 * public/certificados/ como .png, .jpg, .jpeg, .webp o .pdf.
 */
export function certificateSlug(title: string) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"];

/** "2024-05" → "may 2024". */
export function formatMonth(date: string) {
  if (!date) return "";
  const [y, m] = date.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

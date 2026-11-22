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
    "Desarrollador full stack de La Plata. Me especializo en encontrar y resolver errores en sistemas en producción, y disfruto construir productos completos: del frontend a la base de datos.",
  location: "La Plata, Argentina · Remoto",
  available: true,
  availabilityText: "Abierto a charlar sobre proyectos",
  links: {
    github: "https://github.com/Sebastian-Toledo",
    linkedin: "https://www.linkedin.com/in/sebastian-toledo-39b272166/",
    certifications: "https://www.linkedin.com/in/sebastian-toledo-39b272166/details/certifications/",
  },
  /**
   * Dirección del formulario de contacto (el mail NO va en el código).
   * Creá un formulario gratis en https://formspree.io con tu mail personal
   * y pegá acá la URL que te da, por ejemplo "https://formspree.io/f/abcdwxyz".
   */
  contactForm: "",
  // Para el CV: texto un poco más largo.
  about: [
    "Soy desarrollador full stack y AI Engineer, y estudio Analista Programador Universitario en la Facultad de Informática de la UNLP. Desde 2021 trabajo de forma remota en productos web: en mis primeras tres experiencias laborales me dediqué al frontend con React.",
    "Desde que entré a Vozy hago desarrollos de punta a punta a la par que atiendo soporte: investigo y resuelvo errores de los productos de la empresa con Go, AWS, GCP y Kubernetes, consultas en MongoDB y Elasticsearch, y conocimientos de telefonía IP (VoIP/SIP) y redes. Actualmente mi rol cambió a AI Engineer: me dedico a crear automatizaciones con IA y a usar la IA para mejorar la plataforma. Además, la incorporo en mi trabajo diario para desarrollar, investigar errores y documentar más rápido.",
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

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "AI Engineer & Full Stack Developer",
    company: "Vozy",
    period: "Sep 2023 — Hoy",
    description:
      "Hoy, como AI Engineer, creo automatizaciones con IA y uso la IA para mejorar la plataforma. Antes trabajé en el área de debugging, analizando y resolviendo los errores de los productos de la empresa. Remoto.",
    highlights: [
      "Automatizaciones con IA y mejoras de la plataforma impulsadas por IA",
      "Backend en Go y frontend en React",
      "Telefonía IP (VoIP/SIP) y redes: diagnóstico de llamadas y conectividad",
      "Monitoreo de servicios y lambdas con AWS, GCP y kubectl",
      "Consultas en MongoDB y en Elasticsearch a través de Kibana",
      "Uso diario de MySQL, Redis y GitLab",
    ],
  },
  {
    role: "Desarrollador Full Stack (freelance)",
    company: "Casa Estella",
    period: "Ene 2023 — Jun 2023",
    description: "Desarrollé una app para gestionar los pedidos de una imprenta. Remoto.",
    highlights: [
      "Frontend con React, TypeScript y Chakra UI",
      "Backend con Node.js, TypeScript y Express",
      "Base de datos en MongoDB",
    ],
  },
  {
    role: "Frontend Developer / Full Stack",
    company: "Minutentag",
    period: "May 2022 — Sep 2022",
    description: "Empresa de desarrollo de software. Remoto.",
    highlights: ["Módulo de pre-ingreso con React y Semantic UI", "Proyectos con WordPress"],
  },
  {
    role: "Frontend Developer",
    company: "Campeak",
    period: "Jul 2021 — Dic 2021",
    description: "Software de gestión para campings. Remoto.",
    highlights: ["Módulo de pre-ingreso con React y Semantic UI"],
  },
];

export interface Education {
  title: string;
  place: string;
  period: string;
}

export const education: Education[] = [
  { title: "Analista Programador Universitario", place: "Facultad de Informática, UNLP · último año en curso", period: "2015 — Hoy" },
  { title: "Desarrollo web full stack", place: "Argentina Programa · React, Node.js, JSP, Servlets y Sockets", period: "Nov 2021 — Feb 2022" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Lenguajes", items: ["JavaScript", "TypeScript", "Go"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Chakra UI", "Semantic UI"] },
  { group: "Backend y datos", items: ["Node.js", "Express", "MongoDB", "MySQL", "Redis", "Elasticsearch / Kibana", "SQLite / Turso"] },
  { group: "Cloud y herramientas", items: ["AWS", "GCP", "Kubernetes (kubectl)", "Docker", "Git, GitHub y GitLab", "Linux", "Telefonía IP (VoIP/SIP)", "Redes", "Vercel", "Metodologías ágiles"] },
  { group: "Idiomas", items: ["Español (nativo)", "Inglés"] },
];

export interface Certification {
  title: string;
  issuer: string;
  /** "AAAA-MM"; vacío si no tiene fecha. */
  date: string;
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
      { title: "Protegé tu negocio: ciberseguridad en el teletrabajo", issuer: "Fundación Santa María la Real", date: "2025-09" },
      { title: "Ciberseguridad y privacidad para empresas", issuer: "Platzi", date: "2025-03" },
      { title: "Curso de ciberseguridad y privacidad para empresas", issuer: "Platzi", date: "2024-09" },
      { title: "Ciberseguridad para desarrollo web", issuer: "Platzi", date: "2024-05" },
      { title: "Taller de ciberseguridad", issuer: "Platzi", date: "2024-05" },
      { title: "Ciberseguridad para empresas", issuer: "Platzi", date: "2023-09" },
    ],
  },
  {
    group: "Desarrollo",
    items: [
      { title: "Go intermedio: programación orientada a objetos y concurrencia", issuer: "Platzi", date: "2024-06" },
      { title: "Unit testing con Go", issuer: "Platzi", date: "2024-05" },
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

const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"];

/** "2024-05" → "may 2024". */
export function formatMonth(date: string) {
  if (!date) return "";
  const [y, m] = date.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

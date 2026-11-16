/**
 * ✏️ TODO EL CONTENIDO DEL PORTAFOLIO ESTÁ ACÁ.
 * Editá este archivo y la página (y el CV) se actualizan solos.
 */

export const profile = {
  name: "Sebastian Toledo",
  initials: "ST",
  role: "Desarrollador Full Stack",
  // Frases que van rotando en la portada ("Hola, soy Sebastian y …").
  rotating: [
    "construyo apps de punta a punta",
    "resuelvo errores en producción",
    "trabajo con Go, React y Node.js",
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
    email: "seba95matias@gmail.com",
  },
  // Para el CV: texto un poco más largo.
  about: [
    "Soy desarrollador full stack y estudio Analista Programador Universitario en la Facultad de Informática de la UNLP. Desde 2021 trabajo de forma remota en productos web, primero en frontend con React y después en todo el stack.",
    "Hoy trabajo en el área de debugging de Vozy: investigo y resuelvo errores de los productos de la empresa con Go, AWS, GCP y Kubernetes, y consultas en MongoDB y Elasticsearch. En mis ratos libres armo proyectos personales; el más especial es “Con amor, mamá”, el recetario digital con las recetas de mi mamá.",
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
    role: "Junior Software Engineer · Full Stack",
    company: "Vozy",
    period: "Sep 2023 — Hoy",
    description:
      "Trabajo en el área de debugging: analizo y resuelvo los errores que surgen en los productos de la empresa. Remoto.",
    highlights: [
      "Backend en Go y frontend en React",
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
  { group: "Cloud y herramientas", items: ["AWS", "GCP", "Kubernetes (kubectl)", "Docker", "Git, GitHub y GitLab", "Linux", "Vercel", "Metodologías ágiles"] },
  { group: "Idiomas", items: ["Español (nativo)", "Inglés"] },
];

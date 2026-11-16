/**
 * ✏️ TODO EL CONTENIDO DEL PORTAFOLIO ESTÁ ACÁ.
 * Editá este archivo y la página (y el CV) se actualizan solos.
 * Lo marcado con "EJEMPLO" es texto de muestra: reemplazalo por el tuyo o borralo.
 */

export const profile = {
  name: "Sebastian Toledo",
  initials: "ST",
  // EJEMPLO: tu rol, como querés que te presenten.
  role: "Desarrollador web",
  // Frases que van rotando en la portada ("Hola, soy Sebastian y …").
  rotating: ["construyo apps web", "convierto ideas en productos", "aprendo algo nuevo cada semana", "cocino con código"],
  // EJEMPLO: 2–3 líneas sobre vos.
  summary:
    "Me gusta construir cosas útiles para personas reales. Disfruto de todo el camino: entender el problema, diseñar una solución simple y dejarla funcionando en producción.",
  // EJEMPLO: tu ciudad o "Remoto".
  location: "Tu ciudad · Remoto",
  available: true,
  availabilityText: "Abierto a nuevos proyectos",
  links: {
    github: "https://github.com/Sebastian-Toledo",
    // EJEMPLO: completá o dejá vacío ("") para ocultarlo.
    linkedin: "",
    email: "",
  },
  // Para el CV: texto un poco más largo.
  about: [
    "EJEMPLO — Contá acá quién sos: qué te llevó a la programación, qué tipo de problemas te gusta resolver y qué estás buscando.",
    "En mis ratos libres armo proyectos personales para seguir aprendiendo. El más especial es “Con amor, Cristina”, el recetario digital con las recetas de mi mamá.",
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
    title: "Con amor, Cristina",
    tagline: "El recetario digital de mi mamá",
    description:
      "Una app para guardar y compartir las recetas de mi mamá. Cualquiera puede buscarlas y la familia puede cargar nuevas con su cuenta: con fotos, ingredientes para ir tachando, favoritas, modo oscuro y varias paletas de colores.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Better Auth", "Drizzle ORM", "SQLite / Turso"],
    image: "/projects/con-amor-cristina.png",
    // TODO: cuando la publiques en Vercel, poné acá la dirección (ej. "https://con-amor-cristina.vercel.app").
    url: "",
    repo: "https://github.com/Sebastian-Toledo/family-recipe",
    year: "2026",
    featured: true,
    accent: "coral",
  },
  {
    slug: "proyecto-2",
    title: "Proyecto de ejemplo",
    tagline: "Una línea que explique qué hace",
    description: "EJEMPLO — Describí el problema que resuelve, qué hiciste vos y qué aprendiste. Si no tenés otro proyecto todavía, borrá esta tarjeta.",
    tags: ["React", "Node.js"],
    year: "2025",
    accent: "violet",
    example: true,
  },
  {
    slug: "proyecto-3",
    title: "Otro proyecto de ejemplo",
    tagline: "Automatización, API, script…",
    description: "EJEMPLO — También sirven trabajos de cursos, scripts que te ahorran tiempo o aportes a proyectos de otros.",
    tags: ["Python", "APIs"],
    year: "2024",
    accent: "lime",
    example: true,
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

// EJEMPLO: tus trabajos, del más nuevo al más viejo.
export const experience: Experience[] = [
  {
    role: "Tu puesto actual",
    company: "Empresa",
    period: "2024 — Hoy",
    description: "EJEMPLO — Una línea sobre qué hace el equipo y cuál es tu rol.",
    highlights: ["Un logro concreto, mejor si tiene un número", "Una tecnología o proceso que llevaste adelante"],
  },
  {
    role: "Puesto anterior",
    company: "Empresa anterior",
    period: "2022 — 2024",
    description: "EJEMPLO — Qué hacías y qué aprendiste.",
    highlights: ["Un logro o responsabilidad importante"],
  },
];

export interface Education {
  title: string;
  place: string;
  period: string;
}

// EJEMPLO
export const education: Education[] = [
  { title: "Carrera o curso", place: "Institución", period: "2020 — 2023" },
  { title: "Curso o certificación", place: "Plataforma", period: "2022" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML y CSS"] },
  { group: "Backend y datos", items: ["Node.js", "SQL", "SQLite / Turso", "Drizzle ORM", "APIs REST"] },
  { group: "Herramientas", items: ["Git y GitHub", "Vercel", "IA para programar (Claude Code)"] },
  // EJEMPLO: idiomas u otras habilidades.
  { group: "Idiomas", items: ["Español (nativo)", "Inglés (completá tu nivel)"] },
];

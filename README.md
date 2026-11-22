# Portafolio — Sebastian Toledo

Mi portafolio personal y CV. Tiene dos vistas:

- **Portafolio** (`/`): presentación, proyectos, experiencia, habilidades y contacto.
- **CV** (`/cv`): una versión limpia que se descarga como PDF desde el botón **Descargar PDF**.

## Editar el contenido

Todo el texto está en **[`src/content/profile.ts`](src/content/profile.ts)**: nombre, rol, proyectos, experiencia, estudios, habilidades y links. Lo marcado como `EJEMPLO` es texto de muestra para reemplazar.

Para cambiar la captura de un proyecto, poné la imagen en `public/projects/` y referenciala en el campo `image`.

## Formulario de contacto

El mail personal **no aparece en ningún lado** del sitio ni del código. Al final de la página hay una cápsula **Escribime un mail** que despliega un formulario, y los mensajes llegan al mail personal a través de [Web3Forms](https://web3forms.com).

1. Entrá a <https://web3forms.com>, poné tu mail personal y pedí la clave (no hace falta contraseña).
2. Copiá la clave que te llega al correo.
3. Pegala en `contactKey` dentro de `src/content/profile.ts`.

Mientras `contactKey` esté vacío, la cápsula no se muestra. Es un `<form>` HTML común, sin librerías: actualizar dependencias no lo rompe, y funciona aunque el JavaScript falle.

## Imágenes de los certificados

Cada certificación muestra un link **Ver certificado** cuando existe su imagen en `public/certificados/`. El nombre del archivo es el título en minúsculas, sin tildes y con guiones; puede ser `.png`, `.jpg`, `.jpeg`, `.webp` o `.pdf`. Con `npm run dev`, las que todavía no tienen imagen muestran en rojo el nombre que esperan.

<details>
<summary>Nombres esperados</summary>

- `github-copilot` — GitHub Copilot
- `automatizacion-de-procesos-con-zapier` — Automatización de procesos con Zapier
- `introduccion-a-la-inteligencia-artificial` — Introducción a la Inteligencia Artificial
- `prompt-engineering-con-chatgpt` — Prompt Engineering con ChatGPT
- `creacion-de-paginas-web-con-chatgpt` — Creación de páginas web con ChatGPT
- `herramientas-de-ia-para-equipos-de-datos` — Herramientas de IA para equipos de datos
- `generacion-de-imagenes-con-ia-dall-e-midjourney-y-stable-diffusion` — Generación de imágenes con IA: DALL-E, Midjourney y Stable Diffusion
- `ia-para-product-discovery-y-product-design` — IA para Product Discovery y Product Design
- `chatgpt-para-product-designers` — ChatGPT para Product Designers
- `diseno-etico-para-el-desarrollo-de-productos-digitales-con-ia` — Diseño ético para el desarrollo de productos digitales con IA
- `diseno-de-estrategias-de-negocio-con-ia` — Diseño de estrategias de negocio con IA
- `creacion-de-contenido-con-ia` — Creación de contenido con IA
- `ia-para-content-marketing` — IA para Content Marketing
- `ia-para-seo` — IA para SEO
- `ia-para-finanzas` — IA para Finanzas
- `work-with-artificial-intelligence-tools` — Work with Artificial Intelligence Tools
- `practicing-english-with-chatgpt` — Practicing English with ChatGPT
- `herramientas-de-ia-para-developers` — Herramientas de IA para developers
- `introduccion-al-desarrollo-seguro` — Introducción al desarrollo seguro
- `protege-tu-negocio-ciberseguridad-en-el-teletrabajo` — Protegé tu negocio: ciberseguridad en el teletrabajo
- `ciberseguridad-y-privacidad-para-empresas` — Ciberseguridad y privacidad para empresas
- `curso-de-ciberseguridad-y-privacidad-para-empresas` — Curso de ciberseguridad y privacidad para empresas
- `ciberseguridad-para-desarrollo-web` — Ciberseguridad para desarrollo web
- `taller-de-ciberseguridad` — Taller de ciberseguridad
- `ciberseguridad-para-empresas` — Ciberseguridad para empresas
- `go-intermedio-programacion-orientada-a-objetos-y-concurrencia` — Go intermedio: programación orientada a objetos y concurrencia
- `unit-testing-con-go` — Unit testing con Go
- `git-y-github` — Git y GitHub
- `programacion-en-go` — Programación en Go
- `fundamentos-de-ingenieria-de-software` — Fundamentos de ingeniería de software
- `vozy-pro-nivel-basico` — Vozy Pro · Nivel básico
- `gestion-de-equipos-agiles` — Gestión de equipos ágiles
- `adaptabilidad-y-flexibilidad-para-el-crecimiento-personal` — Adaptabilidad y flexibilidad para el crecimiento personal
- `curso-profesional-de-scrum` — Curso profesional de Scrum
- `historias-de-usuario-en-scrum` — Historias de usuario en Scrum
- `introduccion-a-platzi` — Introducción a Platzi

</details>

## Levantarlo en local

```bash
npm install
npm run dev
```

Abrí <http://localhost:3001>. Usa el puerto 3001 para no chocar con el recetario, que usa el 3000.

## Publicarlo

Es un sitio **100% estático**: no necesita base de datos ni servidor.

### En Vercel

1. Subí este repo a tu GitHub personal.
2. En <https://vercel.com>, entrá con tu GitHub personal y elegí **Add New → Project → portfolio**.
3. Hacé deploy. No hace falta configurar nada.

Cada `git push` a `main` actualiza el sitio.

### Alternativa: GitHub Pages

`npm run build` genera la carpeta `out/` con todo el sitio, que se puede publicar en GitHub Pages con una GitHub Action.

## Stack

Next.js 16 (exportación estática), React 19, TypeScript, Tailwind CSS 4 e íconos de Lucide.

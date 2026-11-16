# Portafolio — Sebastian Toledo

Mi portafolio personal y CV. Tiene dos vistas:

- **Portafolio** (`/`): presentación, proyectos, experiencia, habilidades y contacto.
- **CV** (`/cv`): una versión limpia que se descarga como PDF desde el botón **Descargar PDF**.

## Editar el contenido

Todo el texto está en **[`src/content/profile.ts`](src/content/profile.ts)**: nombre, rol, proyectos, experiencia, estudios, habilidades y links. Lo marcado como `EJEMPLO` es texto de muestra para reemplazar.

Para cambiar la captura de un proyecto, poné la imagen en `public/projects/` y referenciala en el campo `image`.

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

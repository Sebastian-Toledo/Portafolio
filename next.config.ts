import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estático: se puede publicar en Vercel o en GitHub Pages sin servidor.
  output: "export",
  images: { unoptimized: true },
  devIndicators: false,
  turbopack: { root: process.cwd() },
};

export default nextConfig;

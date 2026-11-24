import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ isSsrBuild }) => ({
  // site de projeto no GitHub Pages: https://rodolfoaapr.github.io/lp-sparkw/
  base: "/lp-sparkw/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  // a etapa de pré-renderização não precisa copiar fotos e vídeos
  build: { copyPublicDir: !isSsrBuild },
  server: { watch: { ignored: ["**/dist/**", "**/dist-ssr/**"] } },
}));

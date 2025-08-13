import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Configuração para gerar um único arquivo HTML com tudo inline
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    outDir: "dist-single",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    minify: "terser",
    sourcemap: false,
  },
});

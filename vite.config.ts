import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    // Configurações para build otimizado
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // Nomes de arquivo mais limpos
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    // Minificação para arquivos menores
    minify: "terser",
    // Source maps para debug (opcional)
    sourcemap: false,
  },
});

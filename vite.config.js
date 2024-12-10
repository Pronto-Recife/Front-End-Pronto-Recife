import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      "/authLogin": {
        target: "https://prontorecifeauth-dev.up.railway.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/authLogin/, ""),
      },
    },
  },
  preview: {
    port: 3000,
    host: true,
    strictPort: true,
  },
});

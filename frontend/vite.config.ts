import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: ["**/*.tsx"],
    })],
  build: {
    outDir: "build",
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    watch: {
      usePolling: true,
    },
  },
});

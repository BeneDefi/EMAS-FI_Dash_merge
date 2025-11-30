import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: [
      "808c94bc-75ce-46db-bd8c-76786c0dd900-00-1tfea8i0xes7w.janeway.replit.dev"
    ],
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});

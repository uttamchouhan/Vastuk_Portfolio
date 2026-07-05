import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages: https://uttamchouhan.github.io/Vastuk_Portfolio/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/inter_design_web/" : "/",
  plugins: [react(), tailwindcss()],
}));

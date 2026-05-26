import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      additionalPrerenderRoutes: [
        "/menu",
        "/eventi",
        "/prenota",
        "/contatti",
        "/privacy",
        "/eventi/bossaproject-quartet-live",
        "/eventi/domenica-in-jazz",
        "/eventi/ohe-semm-chi",
        "/eventi/frisa-jazz-gang-alfredo-ferrario",
        "/eventi/stardust-jazz-4et",
        "/eventi/federica-zeta-love-lounge",
      ],
    }),
  ],
});

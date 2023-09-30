import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import matomo from "@jop-software/astro-matomo";

// https://astro.build/config
export default defineConfig({
  site: "https://fhcom.de/",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    // We only track site views when this matches the host the user is on.
    // If the configuration is empty, every page view gets tracked.
    matomo({
      baseUrl: "https://analytics.fhaf.de/",
      siteId: 1,
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});

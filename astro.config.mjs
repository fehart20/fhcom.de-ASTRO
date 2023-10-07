import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import matomo from "@jop-software/astro-matomo";
import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  site: "https://fhcom.de/",
  integrations: [
    tailwind(),
    robots({
      sitemap: false,
      policy: [
        {
          userAgent: [
            "Applebot",
            "Googlebot",
            "bingbot",
            "Yandex",
            "Yeti",
            "Baiduspider",
            "360Spider",
            "*",
          ],
          allow: ["/"],
          disallow: ["/impressum", "/datenschutz"],
        },
      ],
    }),
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

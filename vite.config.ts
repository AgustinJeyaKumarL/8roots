import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Custom domain (8roots.in) serves from site root — not /8roots/
    base: "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    router: {
      basepath: "/",
    },
    prerender: {
      enabled: true,
    },
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: {
        crawlLinks: false,
      },
    },
  },
});
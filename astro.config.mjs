import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.kiritross.net",
  // Explicitly set outDir to a relative string to override CI defaults
  outDir: './dist', 
  integrations: [
    tailwind(),
    sitemap(), // Try defaults first
    robotsTxt(),
  ],
});
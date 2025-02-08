// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; // Import the integration

export default defineConfig({
  integrations: [tailwind()], // Add the integration
});
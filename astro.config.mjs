// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const base = process.env.ASTRO_BASE_PATH ?? '/darya_web_page';
const site = process.env.ASTRO_SITE ?? 'https://adrianburgoscolas.github.io';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
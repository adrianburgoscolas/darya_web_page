// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const BASE = process.env.BASE_PATH || '/';
const SITE = process.env.SITE_URL || 'https://darya-integral-trade.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  vite: {
    plugins: [tailwindcss()]
  }
});
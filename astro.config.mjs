import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Satu-satunya tempat untuk mengatur domain produksi.
// Isi dengan URL final, misalnya domain milik proyek, lalu build ulang.
const siteUrl = '';

export default defineConfig({
  site: siteUrl || undefined,
  output: 'static',
  integrations: siteUrl ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});

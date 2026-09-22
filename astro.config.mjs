import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Satu-satunya tempat untuk mengatur domain produksi.
// Isi dengan URL final, misalnya domain milik proyek, lalu build ulang.
// Diisi agar canonical, og:url, hreflang, dan sitemap ikut terbit.
const siteUrl = 'https://supadioairport.com';

export default defineConfig({
  site: siteUrl || undefined,
  output: 'static',
  integrations: siteUrl ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});

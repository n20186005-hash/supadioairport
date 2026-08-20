# Panduan Supadio

Situs informasi pengunjung independen dan nirlaba untuk Bandar Udara Internasional Supadio (PNK), Kubu Raya, Kalimantan Barat.

## Teknologi
- Astro 7.2.2
- Tailwind CSS 4.3.3 melalui `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.3
- Wrangler 4.123.0
- pnpm 11.22.0
- Node.js 24.19.0

## Domain
Domain produksi hanya dikonfigurasi pada `siteUrl` di `astro.config.mjs`. Jika kosong, build tetap berjalan, canonical/OG URL absolut tidak dipaksakan, dan integrasi sitemap tidak diaktifkan. Setelah domain tersedia, isi `siteUrl` lalu build ulang.

## Perintah
```sh
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## Cloudflare Workers
Proyek dibangun statis dan dideploy dengan Workers Static Assets melalui `wrangler.jsonc`. Tidak ada database, autentikasi, CMS, maupun runtime server aplikasi.

## Privasi
Google Analytics (`G-HXM22WWPKP`) hanya dimuat setelah persetujuan analitik. Google Maps disematkan pada halaman utama. Pengaturan tersedia pada `/pengaturan-cookie/`.

## Foto
- `supadio-apron.jpg`: PT Angkasa Pura II, ranah publik di Indonesia, melalui Wikimedia Commons.
- `supadio-aircraft.webp`: dokumentasi PT Angkasa Pura II / pemerintah, ranah publik di Indonesia, melalui Wikimedia Commons.
- `supadio-interior.jpg`: SunDawn, CC BY-SA 4.0, melalui Wikimedia Commons.

export const airport = {
  name: 'Bandar Udara Internasional Supadio',
  shortName: 'Supadio',
  projectName: 'Panduan Supadio',
  iata: 'PNK',
  icao: 'WIOO',
  address: 'Jl. Arteri Supadio Km. 17, Limbung, Kec. Sungai Raya, Kabupaten Kubu Raya, Kalimantan Barat 78391, Indonesia',
  locality: 'Limbung, Sungai Raya, Kabupaten Kubu Raya, Kalimantan Barat',
  latitude: -0.1476038,
  longitude: 109.4052887,
  rating: 4.4,
  ratingCount: 8161,
  gaId: 'G-HXM22WWPKP'
} as const;

export const officialSources = [
  { label: 'Hubud Kemenhub — Supadio', href: 'https://hubud.kemenhub.go.id/bandara/123' },
  { label: 'Sekretariat Negara — terminal inauguration, 28 December 2017', href: 'https://www.setneg.go.id/baca/index/resmikan_terminal_baru_bandara_supadio_presiden_minta_pelayanan_penumpang_ditingkatkan' },
  { label: 'TNI AU — Supadio Air Base history', href: 'https://tni-au.mil.id/tentang-kami/profilsatuan-detail/lanud-supadio/1108' }
] as const;

// Format nama SEO: "Nama objek + Kota + Panduan Wisata".
export const siteName = {
  id: 'Bandara Supadio (PNK) Pontianak — Panduan Wisata',
  en: 'Supadio Airport (PNK) Pontianak — Travel Guide'
} as const;

export function withSiteName(title: string, locale: 'id' | 'en'): string {
  return `${title} | ${siteName[locale]}`;
}

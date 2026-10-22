export type Locale = 'id' | 'en';
export type PageKey = 'home' | 'privacy' | 'terms' | 'cookies';

export const localizedPaths: Record<PageKey, Record<Locale, string>> = {
  home: { id: '/', en: '/en/' },
  privacy: { id: '/kebijakan-privasi/', en: '/en/privacy-policy/' },
  terms: { id: '/ketentuan-layanan/', en: '/en/terms-of-use/' },
  cookies: { id: '/pengaturan-cookie/', en: '/en/cookie-settings/' }
};

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'id' ? 'en' : 'id';
}

export function getLocalizedPath(pageKey: PageKey, locale: Locale): string {
  return localizedPaths[pageKey][locale];
}

export const shellCopy = {
  id: {
    htmlLang: 'id',
    ogLocale: 'id_ID',
    header: {
      homeLabel: 'Beranda',
      ariaLabel: 'Navigasi utama',
      links: [
        { id: 'kenali', label: 'Kenali' },
        { id: 'transportasi', label: 'Transportasi' },
        { id: 'fasilitas', label: 'Fasilitas' },
        { id: 'sekitar', label: 'Sekitar' },
        { id: 'faq', label: 'Tanya jawab' }
      ],
      switchLabel: 'EN',
      switchAria: 'Beralih ke bahasa Inggris'
    },
    footer: {
      siteInfoTitle: 'Informasi situs',
      siteInfoLinks: [
        { pageKey: 'privacy' as const, label: 'Kebijakan Privasi' },
        { pageKey: 'terms' as const, label: 'Ketentuan Layanan' },
        { pageKey: 'cookies' as const, label: 'Pengaturan Cookie' }
      ],
      sourcesLabel: 'Sumber & metodologi',
      languageLabel: 'English',
      languageAria: 'Beralih ke bahasa Inggris',
      disclaimer: [
        'Situs ini adalah proyek panduan informasi pengunjung independen dan nirlaba, tanpa hubungan kelembagaan dengan pemerintah, pengelola bandara, maskapai, atau organisasi resmi mana pun.',
        'Rujukan publik: profil Hubud Kemenhub, arsip Sekretariat Negara dan TNI AU, serta cuplikan lokasi Google Maps.',
        'Hak cipta foto: seluruh hak dan hak cipta gambar yang ditampilkan tetap berada pada fotografer atau pemegang hak masing-masing; kredit dan lisensi dicantumkan pada bagian sumber.',
        '© 2026 Panduan Supadio. Hak cipta dilindungi.'
      ]
    },
    cookieBanner: {
      regionLabel: 'Persetujuan cookie',
      body: 'Google Analytics bersifat opsional dan nonaktif secara bawaan. Kami mencoba menyimpan pilihan pada peramban ini; lihat pesan status jika penyimpanan terbatas.',
      reject: 'Tolak analitik',
      accept: 'Izinkan analitik',
      manage: 'Atur'
    }
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    header: {
      homeLabel: 'Home',
      ariaLabel: 'Primary navigation',
      links: [
        { id: 'kenali', label: 'Overview' },
        { id: 'transportasi', label: 'Transport' },
        { id: 'fasilitas', label: 'Facilities' },
        { id: 'sekitar', label: 'Nearby' },
        { id: 'faq', label: 'FAQ' }
      ],
      switchLabel: 'ID',
      switchAria: 'Switch to Indonesian'
    },
    footer: {
      siteInfoTitle: 'Site information',
      siteInfoLinks: [
        { pageKey: 'privacy' as const, label: 'Privacy Policy' },
        { pageKey: 'terms' as const, label: 'Terms of Use' },
        { pageKey: 'cookies' as const, label: 'Cookie Settings' }
      ],
      sourcesLabel: 'Sources & methodology',
      languageLabel: 'Bahasa Indonesia',
      languageAria: 'Switch to Indonesian',
      disclaimer: [
        'This site is an independent, nonprofit visitor information project with no institutional affiliation to government bodies, airport operators, airlines, or any official organization.',
        'Public references include the Hubud Kemenhub profile, State Secretariat and Air Force archives, and a Google Maps location snapshot.',
        'Photo copyright remains with the respective photographers or rights holders; credits and licenses are listed in the sources section.',
        '© 2026 Supadio Guide. All rights reserved.'
      ]
    },
    cookieBanner: {
      regionLabel: 'Cookie consent',
      body: 'Google Analytics is optional and off by default. We try to save your choice in this browser; see the status message for storage limitations.',
      reject: 'Reject analytics',
      accept: 'Allow analytics',
      manage: 'Manage'
    }
  }
} as const;

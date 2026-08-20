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
      supportTitle: 'Umpan balik & dukungan teknis',
      reportTitle: 'Laporkan kesalahan informasi',
      reportBody: 'Jika menemukan ketidaksesuaian data, informasi usang, atau kesalahan faktual, silakan sampaikan melalui surel berikut. Sertakan sumber rujukan atau konteks agar verifikasi dapat dilakukan.',
      technicalTitle: 'Dukungan teknis',
      technicalBody: 'Masalah tampilan, aksesibilitas, atau kendala teknis lain pada situs juga dapat dilaporkan ke alamat surel yang sama. Jelaskan secara singkat peramban, perangkat, dan langkah yang menimbulkan kendala.',
      technicalNote: 'Kami memproses laporan secara berurutan dan tidak dapat menjamin balasan individual untuk setiap kiriman.',
      disclaimer: [
        'Situs ini adalah proyek panduan informasi pengunjung independen dan nirlaba, tanpa hubungan kelembagaan dengan pemerintah, pengelola bandara, maskapai, atau organisasi resmi mana pun.',
        'Informasi destinasi diperiksa silang dengan materi publik Pemerintah Kabupaten Kubu Raya, Dinas Kepemudaan, Olahraga dan Pariwisata Provinsi Kalimantan Barat, Direktorat Jenderal Perhubungan Udara Kementerian Perhubungan, dan Kementerian Pariwisata Republik Indonesia. Situs ini tidak memuat rekomendasi komersial.',
        'Hak cipta foto: seluruh hak dan hak cipta gambar yang ditampilkan tetap berada pada fotografer atau pemegang hak masing-masing; kredit dan lisensi dicantumkan pada bagian sumber.',
        '© 2026 Panduan Supadio. Hak cipta dilindungi.'
      ]
    },
    cookieBanner: {
      regionLabel: 'Persetujuan cookie',
      body: 'Kami memakai cookie yang diperlukan agar situs berfungsi. Google Analytics hanya dimuat setelah Anda menyetujui cookie analitik.',
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
      supportTitle: 'Feedback & technical support',
      reportTitle: 'Report factual errors',
      reportBody: 'If you find outdated information, factual inaccuracies, or inconsistent details, please report them by email. Including a source or brief context will help verification.',
      technicalTitle: 'Technical support',
      technicalBody: 'Display issues, accessibility problems, or other technical difficulties on the site may also be reported to the same address. Please mention your browser, device, and the steps that caused the issue.',
      technicalNote: 'Reports are handled in sequence, and individual replies cannot be guaranteed for every submission.',
      disclaimer: [
        'This site is an independent, nonprofit visitor information project with no institutional affiliation to government bodies, airport operators, airlines, or any official organization.',
        'Destination information is cross-checked against public materials from the Kubu Raya Regency Government, the West Kalimantan Youth, Sports and Tourism Office, the Directorate General of Civil Aviation of the Ministry of Transportation, and the Ministry of Tourism of the Republic of Indonesia. The site carries no commercial recommendations.',
        'Photo copyright remains with the respective photographers or rights holders; credits and licenses are listed in the sources section.',
        '© 2026 Supadio Guide. All rights reserved.'
      ]
    },
    cookieBanner: {
      regionLabel: 'Cookie consent',
      body: 'We use essential cookies to keep the site working. Google Analytics is loaded only after you approve analytics cookies.',
      reject: 'Reject analytics',
      accept: 'Allow analytics',
      manage: 'Manage'
    }
  }
} as const;

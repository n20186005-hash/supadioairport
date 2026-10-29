// Registry for Supadio Airport long-tail topic pages.
// Each topic is ONE independent theme; the id and en entries are the same theme
// in two languages and count as a single added topic (not two).
// Content is written as an independent visitor guide. It does not present the
// site as the airport operator, an airline, or an official body, and it does
// not publish unverified prices, schedules, or live flight data.

export type Locale = 'id' | 'en';
export type TopicGroup =
  | 'panduan'
  | 'transportasi'
  | 'parkir'
  | 'kuliner'
  | 'akomodasi'
  | 'wisata'
  | 'rencana';

export interface TopicSection {
  id: string;
  heading: string;
  body: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  related: string[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  priority: 1 | 2 | 3;
  id: TopicContent;
  en: TopicContent;
}

export const CHECK_DATE: Record<Locale, string> = {
  id: '29 Oktober 2026',
  en: '29 October 2026'
};

export const TOPIC_GROUP_ORDER: TopicGroup[] = [
  'panduan',
  'transportasi',
  'parkir',
  'kuliner',
  'akomodasi',
  'wisata',
  'rencana'
];

export const TOPIC_GROUP_LABELS: Record<TopicGroup, Record<Locale, string>> = {
  panduan: { id: 'Panduan Bandara', en: 'Airport Guide' },
  transportasi: { id: 'Transportasi', en: 'Transport' },
  parkir: { id: 'Parkir', en: 'Parking' },
  kuliner: { id: 'Kuliner & Kafe', en: 'Dining & Cafés' },
  akomodasi: { id: 'Akomodasi', en: 'Accommodation' },
  wisata: { id: 'Wisata Sekitar', en: 'Nearby Attractions' },
  rencana: { id: 'Rencana Perjalanan', en: 'Itineraries' }
};

const MAP = 'https://maps.app.goo.gl/tPiTuQvcWjzH4WDTA';
// Google Maps search links for real, well-known Pontianak landmarks.
// These are search URLs (not fabricated short links) and must be re-checked.
const G = (q: string) =>
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

export const TOPICS: Topic[] = [
  // ===================== PANDUAN =====================
  {
    slug: 'status-penerbangan',
    group: 'panduan',
    priority: 1,
    id: {
      title: 'Cara Mengecek Status Penerbangan Supadio',
      description:
        'Cara mengecek status keberangkatan dan kedatangan Supadio: gunakan kanal maskapai, layar bandara, dan kode bandara PNK. Panduan ini tidak menampilkan data langsung.',
      h1: 'Cek Status Penerbangan Supadio (PNK)',
      intro:
        'Status penerbangan Supadio sebaiknya dicek melalui kanal resmi maskapai dan layar informasi di bandara, bukan melalui panduan pihak ketiga. Gunakan nomor penerbangan, tanggal, dan kode bandara PNK untuk pencarian yang akurat.',
      sections: [
        {
          id: 'kanal',
          heading: 'Gunakan kanal maskapai dan layar bandara',
          body:
            'Masukkan nomor penerbangan pada situs resmi atau aplikasi maskapai yang menerbitkan tiket Anda. Di bandara, layar keberangkatan dan kedatangan di terminal menampilkan status gerbang, waktu, dan perubahan. Panduan ini tidak menyediakan umpan data penerbangan langsung.'
        },
        {
          id: 'kode',
          heading: 'Kode yang digunakan',
          body:
            'Bandara menggunakan kode IATA PNK dan kode ICAO WIOO. Cocokkan nama bandara, kota, dan kode pada tiket dengan informasi resmi sebelum berangkat agar tidak salah terminal atau salah kota.'
        },
        {
          id: 'waktu',
          heading: 'Waktu dan zona',
          body:
            'Indonesia bagian barat menggunakan WIB (UTC+7). Periksa kembali waktu keberangkatan karena jadwal dapat berubah karena cuaca, operasional maskapai, atau kondisi bandara. Konfirmasi ulang pada hari keberangkatan.'
        }
      ],
      faq: [
        {
          q: 'Di mana cara paling akurat mengecek penerbangan Supadio?',
          a: 'Lewat situs atau aplikasi maskapai Anda dan layar informasi di terminal. Panduan ini hanya menjelaskan cara, tidak menampilkan status langsung.'
        },
        {
          q: 'Apakah panduan ini punya data penerbangan langsung?',
          a: 'Tidak. Kami tidak menyediakan umpan keberangkatan, kedatangan, atau nomor gerbang secara langsung demi menghindari informasi yang kadaluarsa.'
        },
        {
          q: 'Apa beda PNK dan WIOO?',
          a: 'PNK adalah kode IATA untuk penumpang dan tiket; WIOO adalah kode ICAO untuk navigasi penerbangan. Keduanya merujuk bandara yang sama.'
        }
      ],
      related: ['keberangkatan', 'kedatangan', 'penerbangan-internasional']
    },
    en: {
      title: 'How to Check Supadio Flight Status',
      description:
        'How to check Supadio departure and arrival status: use airline channels, airport screens, and the PNK code. This guide shows no live flight data.',
      h1: 'Check Supadio (PNK) Flight Status',
      intro:
        'Supadio flight status is best checked through your airline’s official channel and the information screens at the airport, not through a third-party guide. Use your flight number, date, and the PNK code for an accurate search.',
      sections: [
        {
          id: 'channels',
          heading: 'Use airline channels and airport screens',
          body:
            'Enter your flight number on the official website or app of the airline that issued your ticket. At the airport, the departure and arrival screens in the terminal show gate, time, and changes. This guide does not provide a live flight feed.'
        },
        {
          id: 'codes',
          heading: 'Codes in use',
          body:
            'The airport uses IATA code PNK and ICAO code WIOO. Match the airport name, city, and code on your ticket with official information before travelling to avoid the wrong terminal or city.'
        },
        {
          id: 'time',
          heading: 'Time and time zone',
          body:
            'Western Indonesia uses WIB (UTC+7). Re-check the departure time because schedules can change due to weather, airline operations, or airport conditions. Confirm again on the day of travel.'
        }
      ],
      faq: [
        {
          q: 'Where is the most accurate place to check Supadio flights?',
          a: 'Through your airline’s website or app and the information screens in the terminal. This guide only explains the method and shows no live status.'
        },
        {
          q: 'Does this guide have live flight data?',
          a: 'No. We do not provide live departures, arrivals, or gate numbers to avoid out-of-date information.'
        },
        {
          q: 'What is the difference between PNK and WIOO?',
          a: 'PNK is the IATA code for passengers and tickets; WIOO is the ICAO code for air navigation. Both refer to the same airport.'
        }
      ],
      related: ['keberangkatan', 'kedatangan', 'penerbangan-internasional']
    }
  },
  {
    slug: 'keberangkatan',
    group: 'panduan',
    priority: 1,
    id: {
      title: 'Proses Keberangkatan di Bandara Supadio',
      description:
        'Persiapan keberangkatan Supadio: lapor masuk, dokumen, keamanan, dan gerbang. Ikuti aturan maskapai; panduan ini tidak menetapkan durasi atau nomor gerbang.',
      h1: 'Persiapan Keberangkatan di Supadio',
      intro:
        'Untuk keberangkatan Supadio, siapkan dokumen perjalanan, lakukan lapor masuk sesuai aturan maskapai, lalui pemeriksaan keamanan, lalu menuju gerbang. Waktu yang dibutuhkan bervariasi, jadi ikuti panduan maskapai Anda.',
      sections: [
        {
          id: 'dokumen',
          heading: 'Dokumen dan tiket',
          body:
            'Siapkan identitas, tiket, dan dokumen perjalanan lain yang diwajibkan (misalnya persyaratan perjalanan internasional). Pastikan nama sesuai dengan tiket resmi. Kebutuhan dokumen internasional ditentukan otoritas dan maskapai, bukan panduan ini.'
        },
        {
          id: 'checkin',
          heading: 'Lapor masuk',
          body:
            'Ikuti batas waktu lapor masuk, loket, dan prosedur yang ditetapkan maskapai. Tidak ada durasi datang lebih awal yang berlaku untuk semua perjalanan; gunakan rekomendasi maskapai pada tiket atau konfirmasi resmi.'
        },
        {
          id: 'keamanan',
          heading: 'Pemeriksaan keamanan',
          body:
            'Siapkan barang sesuai aturan cairan, elektronik, dan benda tajam yang berlaku. Aturan detail ditentukan oleh otoritas keamanan dan maskapai. Tanyakan kepada petugas jika ragu.'
        }
      ],
      faq: [
        {
          q: 'Berapa jam sebelum penerbangan saya harus tiba?',
          a: 'Durasi bervariasi. Gunakan rekomendasi maskapai pada tiket; untuk penerbangan internasional, sisakan waktu lebih untuk dokumen dan imigrasi.'
        },
        {
          q: 'Apakah panduan ini menetapkan nomor gerbang?',
          a: 'Tidak. Nomor gerbang dan lokasi lapor masuk ditentukan maskapai dan layar bandara pada hari keberangkatan.'
        }
      ],
      related: ['status-penerbangan', 'check-in-bagasi', 'aksesibilitas']
    },
    en: {
      title: 'Supadio Departure Process',
      description:
        'Supadio departure preparation: check-in, documents, security, and gate. Follow airline rules; this guide sets no fixed duration or gate numbers.',
      h1: 'Supadio Departure Preparation',
      intro:
        'For a Supadio departure, prepare your travel documents, check in per your airline’s rules, pass security screening, then proceed to the gate. The time needed varies, so follow your airline’s guidance.',
      sections: [
        {
          id: 'documents',
          heading: 'Documents and ticket',
          body:
            'Prepare identification, ticket, and any other required travel documents (for example international travel requirements). Make sure the name matches your official ticket. International document needs are set by authorities and airlines, not this guide.'
        },
        {
          id: 'checkin',
          heading: 'Check-in',
          body:
            'Follow the check-in deadlines, counters, and procedure set by your airline. No single early-arrival time applies to every journey; use the airline recommendation on your ticket or official confirmation.'
        },
        {
          id: 'security',
          heading: 'Security screening',
          body:
            'Prepare items per the applicable rules on liquids, electronics, and sharp objects. Detailed rules are set by security authorities and airlines. Ask staff if unsure.'
        }
      ],
      faq: [
        {
          q: 'How many hours before my flight should I arrive?',
          a: 'It varies. Use the airline recommendation on your ticket; for international flights, allow extra time for documents and immigration.'
        },
        {
          q: 'Does this guide set gate numbers?',
          a: 'No. Gate numbers and check-in locations are set by the airline and airport screens on the day of departure.'
        }
      ],
      related: ['status-penerbangan', 'check-in-bagasi', 'aksesibilitas']
    }
  },
  {
    slug: 'kedatangan',
    group: 'panduan',
    priority: 1,
    id: {
      title: 'Proses Kedatangan di Bandara Supadio',
      description:
        'Kedatangan Supadio: bagasi, keluar terminal, dan penyambutan. Tips praktis untuk penjemputan dan lanjutan transportasi darat.',
      h1: 'Kedatangan di Supadio',
      intro:
        'Setelah mendarat di Supadio, ambil bagasi di area yang ditentukan, ikuti tanda keluar, lalu tentukan transportasi lanjutan. Penjemput disarankan mengonfirmasi zona tunggu dan waktu kedatangan melalui kanal maskapai.',
      sections: [
        {
          id: 'bagasi',
          heading: 'Pengambilan bagasi',
          body:
            'Bagasi tiba di area pengambilan yang ditunjukkan layar kedatangan. Jika bagasi tertunda atau tidak muncul, hubungi meja penanganan bagasi maskapai sebelum meninggalkan area. Panduan ini tidak menangani laporan resmi.'
        },
        {
          id: 'keluar',
          heading: 'Keluar terminal',
          body:
            'Ikuti rambu keluar menuju area penjemputan atau transportasi umum. Pin lokasi di peta bukan izin berhenti di lajur tertentu; patuhi zona yang ditetapkan pengelola dan petugas.'
        },
        {
          id: 'jemput',
          heading: 'Menyambung transportasi',
          body:
            'Taksi, kendaraan aplikasi, dan kendaraan pribadi memiliki zona masing-masing. Konfirmasikan titik jemput dan waktu dengan pihak terkait sebelum kedatangan untuk menghindari menunggu di lajur terlarang.'
        }
      ],
      faq: [
        {
          q: 'Di mana saya menunggu penjemput?',
          a: 'Gunakan zona tunggu resmi yang ditetapkan pengelola. Jangan berhenti di lajur kedatangan atau area terbatas; koordinasikan titik dengan penjemput Anda.'
        },
        {
          q: 'Bagaimana jika bagasi tidak muncul?',
          a: 'Laporkan ke meja penanganan bagasi maskapai di area kedatangan sebelum meninggalkan bandara.'
        }
      ],
      related: ['bagasi-hilang', 'transportasi-aplikasi', 'taksi']
    },
    en: {
      title: 'Supadio Arrival Process',
      description:
        'Supadio arrivals: baggage, leaving the terminal, and meeting passengers. Practical tips for pick-up and onward ground transport.',
      h1: 'Arriving at Supadio',
      intro:
        'After landing at Supadio, collect baggage in the designated area, follow exit signs, then arrange onward transport. Pick-ups should confirm the waiting zone and arrival time through airline channels.',
      sections: [
        {
          id: 'baggage',
          heading: 'Baggage claim',
          body:
            'Baggage arrives at the carousel shown on the arrival screen. If baggage is delayed or missing, contact the airline baggage desk before leaving the area. This guide does not handle official reports.'
        },
        {
          id: 'exit',
          heading: 'Leaving the terminal',
          body:
            'Follow exit signs to the pick-up or public transport area. A map pin is not permission to stop in a particular lane; obey the zones set by the operator and staff.'
        },
        {
          id: 'pickup',
          heading: 'Connecting transport',
          body:
            'Taxis, app-based vehicles, and private cars each have their zones. Confirm the pick-up point and time with the relevant party before arrival to avoid waiting in restricted lanes.'
        }
      ],
      faq: [
        {
          q: 'Where should I wait for a pick-up?',
          a: 'Use the official waiting zone set by the operator. Do not stop in the arrival lane or restricted area; coordinate the point with your pick-up.'
        },
        {
          q: 'What if my baggage does not appear?',
          a: 'Report it to the airline baggage desk in the arrival area before leaving the airport.'
        }
      ],
      related: ['bagasi-hilang', 'transportasi-aplikasi', 'taksi']
    }
  },
  {
    slug: 'jam-operasional',
    group: 'panduan',
    priority: 1,
    id: {
      title: 'Jam Operasional & Akses Malam Bandara Supadio',
      description:
        'Apakah Supadio buka 24 jam? Jam operasional belum dikonfirmasi dari Google Maps. Konfirmasikan akses terminal melalui maskapai dan pengelola.',
      h1: 'Jam Operasional Supadio: Apakah Buka 24 Jam?',
      intro:
        'Jam operasional Supadio tidak tercantum pada Google Maps saat pemeriksaan terakhir, dan panduan ini tidak menebak jam tetap atau akses 24 jam. Akses terminal dan layanan harus dikonfirmasikan melalui maskapai serta pengelola resmi.',
      sections: [
        {
          id: 'belum',
          heading: 'Belum ada jam resmi yang dikonfirmasi',
          body:
            'Google Maps pada pemeriksaan terakhir tidak mencantumkan jam, telepon, atau situs pengelola. Oleh karena itu panduan ini tidak mempertahankan klaim jam lama atau menyimpulkan operasi 24 jam dari grafik popularitas.'
        },
        {
          id: 'akses',
          heading: 'Akses malam dan dini hari',
          body:
            'Jika penerbangan Anda sangat pagi atau larut malam, konfirmasikan bahwa terminal, loket, dan transportasi sudah tersedia. Jangan menganggap seluruh layanan buka sepanjang waktu hanya karena bandara melayani penerbangan malam.'
        },
        {
          id: 'verifikasi',
          heading: 'Cara memverifikasi',
          body:
            'Cek melalui maskapai (jadwal penerbangan aktual) dan pengelola resmi. Untuk kedatangan malam, siapkan transportasi pulang sebelum tiba karena opsi darat terbatas pada jam tertentu.'
        }
      ],
      faq: [
        {
          q: 'Apakah Bandara Supadio buka 24 jam?',
          a: 'Jam tidak tercantum pada Google Maps saat pemeriksaan. Tidak ada jam tetap atau akses malam yang dijamin di sini; konfirmasikan dengan maskapai dan pengelola.'
        },
        {
          q: 'Bagaimana kalau penerbangan saya tengah malam?',
          a: 'Pastikan terminal dan transportasi tersedia untuk jam tersebut. Rencanakan transportasi pulang sebelum berangkat.'
        }
      ],
      related: ['kedatangan', 'kedatangan-malam', 'fasilitas']
    },
    en: {
      title: 'Supadio Opening Hours & Night Access',
      description:
        'Is Supadio open 24 hours? Hours were not confirmed on Google Maps. Confirm terminal access with the airline and operator.',
      h1: 'Supadio Opening Hours: Is It Open 24 Hours?',
      intro:
        'Supadio operating hours were not listed on Google Maps at the last check, and this guide does not guess fixed hours or 24-hour access. Terminal access and services must be confirmed with your airline and the official operator.',
      sections: [
        {
          id: 'unconfirmed',
          heading: 'No confirmed official hours yet',
          body:
            'Google Maps at the last check did not list hours, a telephone, or an operator website. This guide therefore does not keep an old hours claim or infer 24-hour operation from popularity charts.'
        },
        {
          id: 'night',
          heading: 'Night and early-morning access',
          body:
            'If your flight is very early or very late, confirm that the terminal, counters, and transport are available. Do not assume every service is open around the clock just because the airport serves late flights.'
        },
        {
          id: 'verify',
          heading: 'How to verify',
          body:
            'Check through your airline (actual flight schedule) and the official operator. For late arrivals, arrange return transport before you land because ground options are limited at certain hours.'
        }
      ],
      faq: [
        {
          q: 'Is Supadio Airport open 24 hours?',
          a: 'Hours were not listed on Google Maps at the check. No fixed hours or night access are guaranteed here; confirm with the airline and operator.'
        },
        {
          q: 'What if my flight is midnight?',
          a: 'Make sure the terminal and transport are available at that hour. Plan return transport before you depart.'
        }
      ],
      related: ['kedatangan', 'kedatangan-malam', 'fasilitas']
    }
  },
  {
    slug: 'check-in-bagasi',
    group: 'panduan',
    priority: 2,
    id: {
      title: 'Lapor Masuk & Aturan Bagasi Supadio',
      description:
        'Lapor masuk dan bagasi Supadio: batas waktu, dokumen, bagasi tercatat, dan bawaan. Aturan mengikuti maskapai; panduan ini tidak menetapkan batas umum.',
      h1: 'Lapor Masuk & Bagasi di Supadio',
      intro:
        'Lapor masuk dan aturan bagasi di Supadio sepenuhnya mengikuti maskapai yang menerbitkan tiket Anda. Periksa batas waktu, ukuran, dan berat melalui maskapai karena tidak ada standar tunggal yang berlaku untuk semua penumpang.',
      sections: [
        {
          id: 'waktu',
          heading: 'Batas waktu lapor masuk',
          body:
            'Setiap maskapai menetapkan batas waktu sendiri, biasanya lebih awal untuk penerbangan internasional. Gunakan informasi resmi pada tiket, bukan perkiraan umum.'
        },
        {
          id: 'tercatat',
          heading: 'Bagasi tercatat',
          body:
            'Kuota, biaya kelebihan, dan larangan barang dibawa ditentukan maskapai dan aturan penerbangan. Barang berbahaya, cairan berlebih, dan baterai tertentu memiliki batasan khusus; cek panduan maskapai.'
        },
        {
          id: 'bawaan',
          heading: 'Bagasi bawaan',
          body:
            'Barang berharga, dokumen, dan obat sebaiknya dibawa ke kabin sesuai aturan maskapai. Pastikan berat dan dimensi bawaan memenuhi ketentuan agar tidak diminta beralih ke bagasi tercatat.'
        }
      ],
      faq: [
        {
          q: 'Berapa kg bagasi yang diizinkan?',
          a: 'Tergantung kelas tiket dan maskapai. Cek ketentuan pada tiket resmi Anda; panduan ini tidak menetapkan angka umum.'
        },
        {
          q: 'Apakah bisa lapor masuk daring?',
          a: 'Banyak maskapai menyediakan lapor masuk daring; gunakan kanal resmi maskapai Anda dan simpan bukti.'
        }
      ],
      related: ['keberangkatan', 'bagasi-hilang', 'keluarga-anak']
    },
    en: {
      title: 'Supadio Check-in & Baggage Rules',
      description:
        'Supadio check-in and baggage: deadlines, documents, checked and carry-on baggage. Rules follow the airline; this guide sets no general limit.',
      h1: 'Check-in & Baggage at Supadio',
      intro:
        'Check-in and baggage rules at Supadio fully follow the airline that issued your ticket. Check deadlines, size, and weight with the airline because no single standard applies to all passengers.',
      sections: [
        {
          id: 'deadline',
          heading: 'Check-in deadline',
          body:
            'Each airline sets its own deadline, usually earlier for international flights. Use the official information on your ticket, not a general estimate.'
        },
        {
          id: 'checked',
          heading: 'Checked baggage',
          body:
            'Allowance, excess fees, and prohibited items are set by the airline and aviation rules. Dangerous goods, excess liquids, and certain batteries have special limits; check the airline guide.'
        },
        {
          id: 'carry',
          heading: 'Carry-on baggage',
          body:
            'Valuables, documents, and medicine should go in the cabin per airline rules. Keep carry-on weight and dimensions within limits to avoid being asked to check it.'
        }
      ],
      faq: [
        {
          q: 'How many kg of baggage is allowed?',
          a: 'It depends on ticket class and airline. Check the rule on your official ticket; this guide sets no general number.'
        },
        {
          q: 'Can I check in online?',
          a: 'Many airlines offer online check-in; use your airline official channel and keep the proof.'
        }
      ],
      related: ['keberangkatan', 'bagasi-hilang', 'keluarga-anak']
    }
  },
  {
    slug: 'bagasi-hilang',
    group: 'panduan',
    priority: 2,
    id: {
      title: 'Bagasi Hilang, Tertunda, atau Rusak di Supadio',
      description:
        'Langkah jika bagasi hilang, tertunda, atau rusak di Supadio: laporkan ke maskapai, simpan bukti, dan gunakan nomor referensi pelacakan.',
      h1: 'Bagasi Hilang, Tertunda, atau Rusak',
      intro:
        'Jika bagasi tidak muncul, tertunda, atau rusak setelah tiba di Supadio, segera laporkan ke meja penanganan bagasi maskapai di area kedatangan. Buat laporan resmi dan simpan bukti sebelum meninggalkan bandara.',
      sections: [
        {
          id: 'lapor',
          heading: 'Laporkan segera',
          body:
            'Hubungi meja bagasi maskapai di area kedatangan sebelum keluar. Isi formulir pelacakan (Property Irregularity Report) dan minta nomor referensi. Laporan yang terlambat menyulitkan pelacakan.'
        },
        {
          id: 'bukti',
          heading: 'Simpan bukti',
          body:
            'Simpan tanda terima bagasi, tiket, dan foto kerusakan jika ada. Nomor referensi digunakan untuk mengecek status pelacakan melalui maskapai.'
        },
        {
          id: 'perlindungan',
          heading: 'Perlindungan perjalanan',
          body:
            'Cakupan kerugian bagasi ditentukan ketentuan maskapai dan asuransi perjalanan Anda, bukan panduan ini. Tanyakan maskapai mengenai batas ganti rugi yang berlaku.'
        }
      ],
      faq: [
        {
          q: 'Ke mana saya melapor?',
          a: 'Ke meja penanganan bagasi maskapai di area kedatangan Supadio, sebelum meninggalkan bandara.'
        },
        {
          q: 'Apakah panduan ini bisa melacak bagasi?',
          a: 'Tidak. Pelacakan dilakukan oleh maskapai melalui nomor referensi laporan Anda.'
        }
      ],
      related: ['kedatangan', 'check-in-bagasi']
    },
    en: {
      title: 'Lost, Delayed, or Damaged Baggage at Supadio',
      description:
        'Steps if baggage is lost, delayed, or damaged at Supadio: report to the airline, keep proof, and use the tracking reference number.',
      h1: 'Lost, Delayed, or Damaged Baggage',
      intro:
        'If baggage does not appear, is delayed, or is damaged after arriving at Supadio, report it immediately to the airline baggage desk in the arrivals area. File an official report and keep proof before leaving the airport.',
      sections: [
        {
          id: 'report',
          heading: 'Report immediately',
          body:
            'Contact the airline baggage desk in the arrivals area before exiting. Complete the tracking form (Property Irregularity Report) and ask for a reference number. Late reports make tracking harder.'
        },
        {
          id: 'proof',
          heading: 'Keep proof',
          body:
            'Keep the baggage receipt, ticket, and photos of damage if any. The reference number is used to check tracking status through the airline.'
        },
        {
          id: 'cover',
          heading: 'Travel protection',
          body:
            'Baggage loss coverage is set by airline terms and your travel insurance, not this guide. Ask the airline about the applicable compensation limits.'
        }
      ],
      faq: [
        {
          q: 'Where do I report?',
          a: 'At the airline baggage desk in the Supadio arrivals area, before leaving the airport.'
        },
        {
          q: 'Can this guide track my baggage?',
          a: 'No. Tracking is done by the airline using your report reference number.'
        }
      ],
      related: ['kedatangan', 'check-in-bagasi']
    }
  },
  {
    slug: 'penerbangan-internasional',
    group: 'panduan',
    priority: 2,
    id: {
      title: 'Penerbangan Internasional di Bandara Supadio',
      description:
        'Status rute internasional Supadio: profil regulator menyebut penggunaan internasional, tetapi rute aktif harus diverifikasi ke maskapai. Persiapkan dokumen perjalanan.',
      h1: 'Penerbangan Internasional di Supadio',
      intro:
        'Profil regulator mencantumkan penggunaan internasional untuk Supadio, namun status itu tidak menjamin rute, maskapai, atau jadwal tertentu sedang aktif. Periksa ketersediaan dan persyaratan perjalanan langsung dengan maskapai.',
      sections: [
        {
          id: 'status',
          heading: 'Penggunaan vs rute aktif',
          body:
            'Klasifikasi internasional adalah status fasilitas, bukan janji rute harian. Jangan menganggap semua tujuan internasional tersedia hanya karena bandara berstatus internasional.'
        },
        {
          id: 'dokumen',
          heading: 'Persiapkan dokumen',
          body:
            'Untuk perjalanan lintas batas, siapkan paspor, visa, dan persyaratan masuk tujuan sesuai otoritas terkait. Maskapai dan imigrasi yang menentukan keabsahan dokumen, bukan panduan ini.'
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi sebelum membeli',
          body:
            'Cek rute, maskapai, dan jadwal aktual pada kanal resmi maskapai sebelum memesan. Jika ragu, hubungi maskapai langsung untuk kepastian rute internasional.'
        }
      ],
      faq: [
        {
          q: 'Apakah ada penerbangan internasional dari Supadio?',
          a: 'Profil regulator menyebut penggunaan internasional, tetapi rute aktif harus diverifikasi ke maskapai. Jangan berasumsi rute tertentu tersedia.'
        },
        {
          q: 'Ke mana saya cek persyaratan masuk?',
          a: 'Ke otoritas tujuan dan maskapai Anda. Panduan ini tidak menetapkan kebijakan visa atau imigrasi.'
        }
      ],
      related: ['status-penerbangan', 'keberangkatan', 'jam-operasional']
    },
    en: {
      title: 'International Flights at Supadio Airport',
      description:
        'Supadio international route status: the regulator profile mentions international use, but active routes must be verified with the airline. Prepare travel documents.',
      h1: 'International Flights at Supadio',
      intro:
        'The regulator profile lists international use for Supadio, but that status does not guarantee a particular route, airline, or schedule is active. Check availability and travel requirements directly with the airline.',
      sections: [
        {
          id: 'status',
          heading: 'Use versus active route',
          body:
            'International classification is a facility status, not a promise of daily routes. Do not assume all international destinations are available just because the airport is classified international.'
        },
        {
          id: 'documents',
          heading: 'Prepare documents',
          body:
            'For cross-border travel, prepare passport, visa, and entry requirements of the destination per the relevant authority. The airline and immigration decide document validity, not this guide.'
        },
        {
          id: 'verify',
          heading: 'Verify before booking',
          body:
            'Check the route, airline, and actual schedule on the airline official channel before booking. If unsure, contact the airline directly for route certainty.'
        }
      ],
      faq: [
        {
          q: 'Are there international flights from Supadio?',
          a: 'The regulator profile mentions international use, but active routes must be verified with the airline. Do not assume a particular route is available.'
        },
        {
          q: 'Where do I check entry requirements?',
          a: 'With your destination authority and airline. This guide does not set visa or immigration policy.'
        }
      ],
      related: ['status-penerbangan', 'keberangkatan', 'jam-operasional']
    }
  },
  {
    slug: 'aksesibilitas',
    group: 'panduan',
    priority: 2,
    id: {
      title: 'Aksesibilitas & Bantuan Khusus di Supadio',
      description:
        'Bantuan penumpang disabilitas, kursi roda, dan kebutuhan khusus di Supadio: ajukan melalui maskapai sebelum keberangkatan. Fasilitas dikonfirmasi ke pengelola.',
      h1: 'Aksesibilitas & Bantuan Khusus',
      intro:
        'Untuk kebutuhan aksesibilitas seperti kursi roda, bantuan gerak, atau pendampingan, ajukan permintaan melalui maskapai sebelum keberangkatan. Lokasi dan ketersediaan fasilitas dikonfirmasikan ke pengelola bandara.',
      sections: [
        {
          id: 'ajukan',
          heading: 'Ajukan sebelum terbang',
          body:
            'Maskapai mengatur bantuan khusus melalui permintaan pra-penerbangan. Sampaikan kebutuhan saat pemesanan atau paling lambat sebelum batas waktu yang ditetapkan maskapai.'
        },
        {
          id: 'fasilitas',
          heading: 'Fasilitas di terminal',
          body:
            'Profil regulator mencantumkan kategori fasilitas, namun layanan yang beroperasi, lokasi, dan aksesibilitas harus dikonfirmasikan ke pengelola. Jangan menganggap seluruh fasilitas tersedia setiap saat.'
        },
        {
          id: 'pendamping',
          heading: 'Pendamping dan medis',
          body:
            'Untuk kebutuhan medis khusus atau pendamping, koordinasikan dengan maskapai dan fasilitas kesehatan bandara (Kantor Kesehatan Pelabuhan) jika diperlukan.'
        }
      ],
      faq: [
        {
          q: 'Bagaimana meminta kursi roda?',
          a: 'Ajukan melalui maskapai saat pemesanan atau sebelum batas waktu pra-penerbangan yang ditetapkan maskapai.'
        },
        {
          q: 'Apakah semua fasilitas aksesibilitas tersedia?',
          a: 'Layanan yang beroperasi dan lokasinya dikonfirmasikan ke pengelola; panduan ini tidak menjamin ketersediaan setiap saat.'
        }
      ],
      related: ['keberangkatan', 'keluarga-anak', 'fasilitas']
    },
    en: {
      title: 'Accessibility & Special Assistance at Supadio',
      description:
        'Assistance for passengers with disabilities, wheelchairs, and special needs at Supadio: request through the airline before departure. Facilities confirmed with the operator.',
      h1: 'Accessibility & Special Assistance',
      intro:
        'For accessibility needs such as a wheelchair, mobility help, or accompaniment, submit the request through your airline before departure. The location and availability of facilities are confirmed with the airport operator.',
      sections: [
        {
          id: 'request',
          heading: 'Request before flying',
          body:
            'Airlines arrange special assistance through a pre-flight request. State your need at booking or at the latest before the airline deadline.'
        },
        {
          id: 'facilities',
          heading: 'Facilities in the terminal',
          body:
            'The regulator profile lists facility categories, but operating services, location, and accessibility must be confirmed with the operator. Do not assume every facility is available at all times.'
        },
        {
          id: 'companion',
          heading: 'Companion and medical',
          body:
            'For special medical needs or a companion, coordinate with the airline and the airport health office (Port Health Office) if needed.'
        }
      ],
      faq: [
        {
          q: 'How do I request a wheelchair?',
          a: 'Request it through the airline at booking or before the pre-flight deadline set by the airline.'
        },
        {
          q: 'Are all accessibility facilities available?',
          a: 'Operating services and their location are confirmed with the operator; this guide does not guarantee availability at all times.'
        }
      ],
      related: ['keberangkatan', 'keluarga-anak', 'fasilitas']
    }
  },
  {
    slug: 'keluarga-anak',
    group: 'panduan',
    priority: 2,
    id: {
      title: 'Bepergian dengan Anak di Bandara Supadio',
      description:
        'Tips membawa anak di Supadio: dokumen, waktu tiba, fasilitas, dan hiburan. Persiapan membantu perjalanan keluarga lebih lancar.',
      h1: 'Bepergian dengan Anak di Supadio',
      intro:
        'Membawa anak ke Supadio menjadi lebih mudah dengan persiapan dokumen, waktu tiba yang cukup, dan pemahaman fasilitas. Sesuaikan kebutuhan dengan aturan maskapai dan usia anak.',
      sections: [
        {
          id: 'dokumen',
          heading: 'Dokumen anak',
          body:
            'Siapkan identitas anak dan dokumen perjalanan yang diwajibkan. Untuk perjalanan internasional, cek persyaratan paspor dan visa anak ke otoritas serta maskapai.'
        },
        {
          id: 'waktu',
          heading: 'Waktu dan barang bawaan',
          body:
            'Tibalah lebih awal untuk memberi waktu antrean dan istirahat. Bawa makanan, pakaian ganti, dan mainan sesuai kebutuhan; perhatikan aturan cairan dan baterai pada kabin.'
        },
        {
          id: 'fasilitas',
          heading: 'Fasilitas ramah keluarga',
          body:
            'Beberapa fasilitas seperti ruang ibadah dan toilet tersedia di banyak bandara; konfirmasikan lokasi dan ketersediaan ke pengelola. Mintalah bantuan staf jika anak membutuhkan perhatian khusus.'
        }
      ],
      faq: [
        {
          q: 'Berapa awal sebaiknya tiba dengan anak?',
          a: 'Lebih awal dari rekomendasi maskapai agar ada waktu antrean dan istirahat; sesuaikan dengan usia dan kebutuhan anak.'
        },
        {
          q: 'Apakah ada ruang menyusui?',
          a: 'Fasilitas seperti ruang ibadah dan toilet tersedia di banyak bandara; konfirmasikan lokasi ke pengelola pada hari keberangkatan.'
        }
      ],
      related: ['aksesibilitas', 'check-in-bagasi', 'keberangkatan']
    },
    en: {
      title: 'Travelling with Children at Supadio Airport',
      description:
        'Tips for bringing children to Supadio: documents, arrival time, facilities, and entertainment. Preparation makes family travel smoother.',
      h1: 'Travelling with Children at Supadio',
      intro:
        'Bringing children to Supadio is easier with document preparation, enough arrival time, and understanding of facilities. Match needs to airline rules and the child’s age.',
      sections: [
        {
          id: 'documents',
          heading: 'Children documents',
          body:
            'Prepare the child identification and required travel documents. For international travel, check the child passport and visa requirements with authorities and the airline.'
        },
        {
          id: 'time',
          heading: 'Time and carry items',
          body:
            'Arrive earlier to allow for queues and rest. Bring food, a change of clothes, and toys as needed; observe the cabin rules on liquids and batteries.'
        },
        {
          id: 'facilities',
          heading: 'Family-friendly facilities',
          body:
            'Some facilities such as prayer rooms and toilets are available at many airports; confirm location and availability with the operator. Ask staff if a child needs special attention.'
        }
      ],
      faq: [
        {
          q: 'How early should I arrive with children?',
          a: 'Earlier than the airline recommendation to allow for queues and rest; adjust to the child age and needs.'
        },
        {
          q: 'Is there a nursing room?',
          a: 'Facilities such as prayer rooms and toilets are available at many airports; confirm the location with the operator on the day of departure.'
        }
      ],
      related: ['aksesibilitas', 'check-in-bagasi', 'keberangkatan']
    }
  },
  {
    slug: 'fasilitas',
    group: 'panduan',
    priority: 1,
    id: {
      title: 'Fasilitas Terminal Bandara Supadio',
      description:
        'Daftar fasilitas Supadio menurut profil regulator: ATM, sewa kendaraan, medis, parkir inap, restoran. Konfirmasikan layanan yang beroperasi ke pengelola.',
      h1: 'Fasilitas Terminal Supadio',
      intro:
        'Profil regulator mencantumkan beberapa kategori fasilitas di Supadio, antara lain ATM, sewa kendaraan, fasilitas medis, Kantor Kesehatan Pelabuhan, parkir inap, dan restoran. Daftar ini tidak menjamin layanan sedang beroperasi.',
      sections: [
        {
          id: 'daftar',
          heading: 'Kategori yang tercantum',
          body:
            'Profil Hubud menyebut ATM, sewa kendaraan, fasilitas medis, Kantor Kesehatan Pelabuhan, parkir inap, dan restoran. Ini adalah kategori fasilitas, bukan jaminan gerai tertentu buka hari ini.'
        },
        {
          id: 'konfirmasi',
          heading: 'Konfirmasi sebelum mengandalkan',
          body:
            'Untuk lokasi, jam, biaya, aksesibilitas, atau bantuan khusus, konfirmasikan ke maskapai dan pengelola. Kebutuhan toilet, ruang ibadah, pengisian daya, dan lainnya juga perlu dicek sendiri.'
        },
        {
          id: 'catatan',
          heading: 'Foto bukan bukti layanan',
          body:
            'Foto arsip di situs ini menunjukkan kondisi masa lalu dan tidak membuktikan gerai atau fasilitas beroperasi sekarang. Jangan menganggap seluruh layanan tersedia setiap saat.'
        }
      ],
      faq: [
        {
          q: 'Apakah ada ATM di Supadio?',
          a: 'Profil regulator mencantumkan kategori ATM, namun lokasi dan ketersediaan dikonfirmasikan ke pengelola pada hari keberangkatan.'
        },
        {
          q: 'Apakah fasilitas beroperasi 24 jam?',
          a: 'Tidak dijamin. Daftar fasilitas bukan jaminan layanan buka sepanjang waktu; konfirmasikan ke pengelola.'
        }
      ],
      related: ['jam-operasional', 'makan-dalam-terminal', 'parkir']
    },
    en: {
      title: 'Supadio Terminal Facilities',
      description:
        'Supadio facility list per the regulator profile: ATMs, car rental, medical, overnight parking, restaurants. Confirm operating services with the operator.',
      h1: 'Supadio Terminal Facilities',
      intro:
        'The regulator profile lists several facility categories at Supadio, including ATMs, car rental, medical facilities, a Port Health Office, overnight parking, and restaurants. This list does not guarantee a service is operating.',
      sections: [
        {
          id: 'list',
          heading: 'Categories listed',
          body:
            'The Hubud profile mentions ATMs, car rental, medical facilities, a Port Health Office, overnight parking, and restaurants. These are facility categories, not a guarantee that a particular outlet is open today.'
        },
        {
          id: 'confirm',
          heading: 'Confirm before relying',
          body:
            'For location, hours, cost, accessibility, or special assistance, confirm with the airline and operator. Toilets, prayer rooms, charging, and other needs also require your own check.'
        },
        {
          id: 'note',
          heading: 'Photos are not proof of service',
          body:
            'Archival photos on this site show past conditions and do not prove an outlet or facility operates now. Do not assume every service is available at all times.'
        }
      ],
      faq: [
        {
          q: 'Are there ATMs at Supadio?',
          a: 'The regulator profile lists an ATM category, but location and availability are confirmed with the operator on the day of departure.'
        },
        {
          q: 'Are facilities open 24 hours?',
          a: 'Not guaranteed. The facility list is not a guarantee of round-the-clock service; confirm with the operator.'
        }
      ],
      related: ['jam-operasional', 'makan-dalam-terminal', 'parkir']
    }
  },

  // ===================== TRANSPORTASI =====================
  {
    slug: 'ke-pontianak',
    group: 'transportasi',
    priority: 1,
    id: {
      title: 'Transportasi dari Bandara Supadio ke Pontianak',
      description:
        'Dari Supadio ke Pontianak kota: jarak sekitar 17 km, pilihan taksi, kendaraan aplikasi, bus, dan sewa mobil. Konfirmasikan tarif dan ketersediaan.',
      h1: 'Dari Supadio ke Pontianak Kota',
      intro:
        'Bandara Supadio berada di Limbung, Kabupaten Kubu Raya, sekitar 17 km dari pusat Kota Pontianak. Waktu tempuh umumnya 25–45 menit tergantung lalu lintas. Pilih taksi, kendaraan aplikasi, bus, atau sewa mobil sesuai kebutuhan.',
      sections: [
        {
          id: 'jarak',
          heading: 'Jarak dan waktu tempuh',
          body:
            'Jarak dari bandara ke pusat Pontianak umumnya disebut sekitar 17 km (alamat "Km 17"). Waktu tempuh bervariasi dengan lalu lintas, cuaca, dan jam perjalanan; perkiraan 25–45 menit bukan jaminan waktu tetap.'
        },
        {
          id: 'moda',
          heading: 'Pilihan moda',
          body:
            'Tersedia taksi, kendaraan aplikasi, layanan bus atau antar-jemput, serta sewa mobil. Konfirmasikan operator, titik naik, tarif, dan ketersediaan pada hari keberangkatan Anda.'
        },
        {
          id: 'tips',
          heading: 'Tips praktis',
          body:
            'Untuk penerbangan tiba malam, pesan transportasi sebelum mendarat karena opsi darat terbatas pada jam tertentu. Simpan alamat tujuan lengkap dan patuhi zona penjemputan resmi.'
        }
      ],
      faq: [
        {
          q: 'Berapa lama dari Supadio ke Pontianak?',
          a: 'Umumnya 25–45 menit tergantung lalu lintas; bukan waktu tetap yang dijamin karena kondisi jalan bervariasi.'
        },
        {
          q: 'Apa transportasi termurah?',
          a: 'Bus atau antar-jemput biasanya lebih murah, tetapi rute dan jadwal harus dikonfirmasikan. Taksi dan aplikasi lebih langsung namun harganya tergantung tarif resmi.'
        }
      ],
      related: ['dari-pontianak', 'taksi', 'transportasi-aplikasi', 'bus-damri']
    },
    en: {
      title: 'Transport from Supadio Airport to Pontianak',
      description:
        'From Supadio to Pontianak city: about 17 km, with taxi, ride-hailing, bus, and car rental options. Confirm fares and availability.',
      h1: 'From Supadio to Pontianak City',
      intro:
        'Supadio Airport is in Limbung, Kubu Raya Regency, about 17 km from central Pontianak. Travel time is usually 25–45 minutes depending on traffic. Choose a taxi, ride-hailing, bus, or rental car to suit your needs.',
      sections: [
        {
          id: 'distance',
          heading: 'Distance and travel time',
          body:
            'The distance from the airport to central Pontianak is generally cited as about 17 km (the address says "Km 17"). Travel time varies with traffic, weather, and hour; the 25–45 minute estimate is not a guaranteed fixed time.'
        },
        {
          id: 'modes',
          heading: 'Mode options',
          body:
            'Taxis, ride-hailing, bus or shuttle services, and rental cars are available. Confirm the operator, boarding point, fare, and availability on your travel date.'
        },
        {
          id: 'tips',
          heading: 'Practical tips',
          body:
            'For a late arrival, book transport before landing because ground options are limited at certain hours. Keep the full destination address and follow the official pick-up zones.'
        }
      ],
      faq: [
        {
          q: 'How long from Supadio to Pontianak?',
          a: 'Usually 25–45 minutes depending on traffic; not a guaranteed fixed time because road conditions vary.'
        },
        {
          q: 'What is the cheapest transport?',
          a: 'Bus or shuttle is usually cheaper, but route and schedule must be confirmed. Taxis and ride-hailing are more direct but depend on official fares.'
        }
      ],
      related: ['dari-pontianak', 'taksi', 'transportasi-aplikasi', 'bus-damri']
    }
  },
  {
    slug: 'dari-pontianak',
    group: 'transportasi',
    priority: 1,
    id: {
      title: 'Transportasi dari Pontianak ke Bandara Supadio',
      description:
        'Dari Pontianak ke Supadio: rencanakan waktu, pilih taksi atau aplikasi, dan tiba lebih awal. Jarak sekitar 17 km dengan lalu lintas bervariasi.',
      h1: 'Dari Pontianak ke Supadio',
      intro:
        'Perjalanan dari Pontianak ke Supadio menempuh sekitar 17 km dan biasanya 25–45 menit. Untuk penerbangan, berangkatlah lebih awal karena lalu lintas dan antrean keberangkatan bisa memperlambat perjalanan.',
      sections: [
        {
          id: 'waktu',
          heading: 'Waktu keberangkatan',
          body:
            'Tambahkan cadangan waktu untuk lalu lintas, pengambilan penumpang, dan antrean di bandara. Jangan mengandalkan perkiraan waktu tercepat saja, terutama pada jam sibuk.'
        },
        {
          id: 'moda',
          heading: 'Pilihan ke bandara',
          body:
            'Gunakan taksi, kendaraan aplikasi, antar-jemput, atau sewa mobil. Konfirmasikan titik jemput, tarif, dan ketersediaan pada hari keberangkatan.'
        },
        {
          id: 'cadangan',
          heading: 'Sisipkan cadangan',
          body:
            'Untuk penerbangan internasional atau pagi hari, sisakan waktu ekstra untuk lapor masuk dan dokumen. Lebih baik tiba lebih awal daripada terlambat.'
        }
      ],
      faq: [
        {
          q: 'Kapan sebaiknya berangkat dari Pontianak?',
          a: 'Sesuai rekomendasi maskapai ditambah cadangan lalu lintas; untuk internasional, berangkat lebih awal lagi.'
        },
        {
          q: 'Apakah saya bisa pesan daring?',
          a: 'Banyak layanan aplikasi menerima pemesanan daring; konfirmasikan titik jemput dan waktu dengan penyedia.'
        }
      ],
      related: ['ke-pontianak', 'taksi', 'transportasi-aplikasi', 'kedatangan-malam']
    },
    en: {
      title: 'Transport from Pontianak to Supadio Airport',
      description:
        'From Pontianak to Supadio: plan time, choose taxi or ride-hailing, and arrive early. About 17 km with variable traffic.',
      h1: 'From Pontianak to Supadio',
      intro:
        'The trip from Pontianak to Supadio covers about 17 km and usually takes 25–45 minutes. For a flight, leave earlier because traffic and departure queues can slow the journey.',
      sections: [
        {
          id: 'time',
          heading: 'Departure time',
          body:
            'Add buffer time for traffic, passenger pick-up, and airport queues. Do not rely only on the fastest estimate, especially at peak hours.'
        },
        {
          id: 'modes',
          heading: 'Options to the airport',
          body:
            'Use a taxi, ride-hailing, shuttle, or rental car. Confirm the pick-up point, fare, and availability on your travel date.'
        },
        {
          id: 'buffer',
          heading: 'Add a buffer',
          body:
            'For international or early flights, allow extra time for check-in and documents. Arriving early is better than being late.'
        }
      ],
      faq: [
        {
          q: 'When should I leave Pontianak?',
          a: 'Per the airline recommendation plus a traffic buffer; for international flights, leave even earlier.'
        },
        {
          q: 'Can I book online?',
          a: 'Many app services accept online booking; confirm the pick-up point and time with the provider.'
        }
      ],
      related: ['ke-pontianak', 'taksi', 'transportasi-aplikasi', 'kedatangan-malam']
    }
  },
  {
    slug: 'taksi',
    group: 'transportasi',
    priority: 2,
    id: {
      title: 'Taksi di Bandara Supadio',
      description:
        'Taksi bandara Supadio: zona penjemputan, tarif, dan tips. Konfirmasikan layanan yang tersedia dan aturan zona pada hari keberangkatan.',
      h1: 'Taksi di Supadio',
      intro:
        'Taksi di Supadio melayani perjalanan ke Pontianak dan sekitarnya. Konfirmasikan layanan yang benar-benar tersedia, zona penjemputan, dan tarif pada hari perjalanan Anda; jangan menganggap semua layanan menjemput di pintu yang sama.',
      sections: [
        {
          id: 'zona',
          heading: 'Zona penjemputan',
          body:
            'Taksi umumnya memiliki titik penjemputan resmi di area bandara. Patuhi zona yang ditetapkan pengelola dan petugas; pin lokasi di peta bukan izin berhenti di lajur tertentu.'
        },
        {
          id: 'tarif',
          heading: 'Tarif dan pembayaran',
          body:
            'Tarif taksi ditetapkan penyedia dan dapat bervariasi. Konfirmasikan metode bayar (tunai atau aplikasi) serta perkiraan biaya sebelum naik. Panduan ini tidak menetapkan tarif pasti.'
        },
        {
          id: 'tips',
          heading: 'Tips penumpang',
          body:
            'Gunakan taksi resmi atau yang disetujui pengelola. Simpan alamat tujuan lengkap dan minta struk jika tersedia. Untuk perjalanan malam, pesan lebih awal karena ketersediaan terbatas.'
        }
      ],
      faq: [
        {
          q: 'Di mana naik taksi di Supadio?',
          a: 'Di titik penjemputan resmi yang ditetapkan pengelola; ikuti arahan petugas dan rambu.'
        },
        {
          q: 'Berapa tarif ke Pontianak?',
          a: 'Tarif ditetapkan penyedia dan bervariasi; konfirmasikan sebelum naik. Panduan ini tidak menetapkan angka pasti.'
        }
      ],
      related: ['ke-pontianak', 'transportasi-aplikasi', 'jemput-antar']
    },
    en: {
      title: 'Taxis at Supadio Airport',
      description:
        'Supadio airport taxis: pick-up zone, fares, and tips. Confirm available services and zone rules on your travel date.',
      h1: 'Taxis at Supadio',
      intro:
        'Taxis at Supadio serve Pontianak and the surrounding area. Confirm which services are actually available, the pick-up zone, and fares on your travel date; do not assume all services collect passengers at the same door.',
      sections: [
        {
          id: 'zone',
          heading: 'Pick-up zone',
          body:
            'Taxis usually have an official pick-up point in the airport area. Follow the zone set by the operator and staff; a map pin is not permission to stop in a particular lane.'
        },
        {
          id: 'fare',
          heading: 'Fare and payment',
          body:
            'Taxi fares are set by the provider and may vary. Confirm the payment method (cash or app) and an estimated cost before boarding. This guide does not set a fixed fare.'
        },
        {
          id: 'tips',
          heading: 'Passenger tips',
          body:
            'Use official or operator-approved taxis. Keep the full destination address and ask for a receipt if available. For night travel, book earlier because availability is limited.'
        }
      ],
      faq: [
        {
          q: 'Where do I take a taxi at Supadio?',
          a: 'At the official pick-up point set by the operator; follow staff and signs.'
        },
        {
          q: 'What is the fare to Pontianak?',
          a: 'Fares are set by the provider and vary; confirm before boarding. This guide does not set an exact number.'
        }
      ],
      related: ['ke-pontianak', 'transportasi-aplikasi', 'jemput-antar']
    }
  },
  {
    slug: 'transportasi-aplikasi',
    group: 'transportasi',
    priority: 2,
    id: {
      title: 'Transportasi Aplikasi di Bandara Supadio',
      description:
        'Kendaraan aplikasi (ride-hailing) di Supadio: titik jemput, ketersediaan, dan tips. Konfirmasikan zona dan layanan pada hari keberangkatan.',
      h1: 'Transportasi Aplikasi di Supadio',
      intro:
        'Layanan kendaraan aplikasi umumnya tersedia di Pontianak dan bandara, namun titik jemput serta ketersediaan mengikuti aturan yang berlaku. Konfirmasikan layanan yang benar-benar aktif dan zona penjemputan pada hari perjalanan Anda.',
      sections: [
        {
          id: 'zona',
          heading: 'Titik jemput aplikasi',
          body:
            'Layanan aplikasi sering memiliki titik jemput tertentu yang ditetapkan pengelola bandara. Ikuti petunjuk di aplikasi dan rambu di area bandara; jangan menunggu di lajur kedatangan.'
        },
        {
          id: 'ketersediaan',
          heading: 'Ketersediaan',
          body:
            'Ketersediaan kendaraan bervariasi berdasarkan waktu dan cuaca. Untuk kedatangan malam atau pagi buta, pesan lebih awal dan siapkan opsi cadangan seperti taksi.'
        },
        {
          id: 'tips',
          heading: 'Tips pemesanan',
          body:
            'Cocokkan plat nomor dan identitas pengemudi dengan pesanan aplikasi. Simpan alamat tujuan lengkap dan patuhi zona penjemputan resmi.'
        }
      ],
      faq: [
        {
          q: 'Apakah GoCar atau layanan serupa ada di Supadio?',
          a: 'Layanan aplikasi umumnya tersedia di Pontianak, namun titik jemput dan ketersediaan mengikuti aturan yang berlaku; konfirmasikan di aplikasi pada hari keberangkatan.'
        },
        {
          q: 'Di mana titik jemput aplikasi?',
          a: 'Di titik yang ditetapkan pengelola; ikuti petunjuk aplikasi dan rambu bandara.'
        }
      ],
      related: ['taksi', 'ke-pontianak', 'kedatangan-malam']
    },
    en: {
      title: 'Ride-Hailing at Supadio Airport',
      description:
        'App-based vehicles (ride-hailing) at Supadio: pick-up point, availability, and tips. Confirm the zone and service on your travel date.',
      h1: 'Ride-Hailing at Supadio',
      intro:
        'App-based vehicle services are generally available in Pontianak and at the airport, but the pick-up point and availability follow the applicable rules. Confirm which services are actually active and the pick-up zone on your travel date.',
      sections: [
        {
          id: 'zone',
          heading: 'App pick-up point',
          body:
            'App services often have a specific pick-up point set by the airport operator. Follow the in-app guidance and signs in the airport area; do not wait in the arrival lane.'
        },
        {
          id: 'availability',
          heading: 'Availability',
          body:
            'Vehicle availability varies by time and weather. For late-night or early-morning arrivals, book earlier and prepare a backup such as a taxi.'
        },
        {
          id: 'tips',
          heading: 'Booking tips',
          body:
            'Match the plate number and driver identity with the app order. Keep the full destination address and follow the official pick-up zone.'
        }
      ],
      faq: [
        {
          q: 'Are GoCar or similar services at Supadio?',
          a: 'App services are generally available in Pontianak, but the pick-up point and availability follow the applicable rules; confirm in the app on your travel date.'
        },
        {
          q: 'Where is the app pick-up point?',
          a: 'At the point set by the operator; follow the app guidance and airport signs.'
        }
      ],
      related: ['taksi', 'ke-pontianak', 'kedatangan-malam']
    }
  },
  {
    slug: 'bus-damri',
    group: 'transportasi',
    priority: 2,
    id: {
      title: 'Bus & Antar-Jemput Bandara Supadio',
      description:
        'Bus Damri dan layanan antar-jemput di Supadio: rute, jadwal, dan tarif harus dikonfirmasikan. Panduan ini tidak menetapkan jadwal pasti.',
      h1: 'Bus & Antar-Jemput di Supadio',
      intro:
        'Layanan bus atau antar-jemput sering tersedia di bandara Indonesia termasuk Pontianak, namun rute, jadwal, dan tarif dapat berubah. Konfirmasikan operator, lokasi naik, dan biaya pada hari keberangkatan Anda.',
      sections: [
        {
          id: 'damri',
          heading: 'Layanan Damri',
          body:
            'Damri secara umum mengoperasikan layanan antar-jemput bandara di banyak bandara Indonesia. Untuk Supadio, konfirmasikan rute, jadwal, dan tarif melalui loket resmi bandara atau kanal Damri pada hari perjalanan.'
        },
        {
          id: 'konfirmasi',
          heading: 'Konfirmasi sebelum naik',
          body:
            'Jangan menganggap jadwal tetap tersedia setiap hari. Tanyakan jam keberangkatan terakhir, titik naik, dan apakah melayani tujuan Anda sebelum membeli tiket.'
        },
        {
          id: 'cadangan',
          heading: 'Opsi cadangan',
          body:
            'Jika bus tidak sesuai jadwal penerbangan, gunakan taksi, kendaraan aplikasi, atau sewa mobil. Untuk kedatangan malam, siapkan transportasi cadangan karena bus terbatas.'
        }
      ],
      faq: [
        {
          q: 'Apakah ada bus Damri ke Pontianak?',
          a: 'Damri umumnya mengoperasikan layanan bandara; untuk Supadio, konfirmasikan rute, jadwal, dan tarif di loket resmi atau kanal Damri pada hari keberangkatan.'
        },
        {
          q: 'Berapa tarif bus?',
          a: 'Tarif ditetapkan operator dan dapat berubah; konfirmasikan sebelum naik. Panduan ini tidak menetapkan angka pasti.'
        }
      ],
      related: ['ke-pontianak', 'taksi', 'parkir']
    },
    en: {
      title: 'Bus & Shuttle at Supadio Airport',
      description:
        'Damri bus and shuttle services at Supadio: route, schedule, and fare must be confirmed. This guide sets no fixed schedule.',
      h1: 'Bus & Shuttle at Supadio',
      intro:
        'Bus or shuttle services are often available at Indonesian airports including Pontianak, but routes, schedules, and fares can change. Confirm the operator, boarding location, and cost on your travel date.',
      sections: [
        {
          id: 'damri',
          heading: 'Damri service',
          body:
            'Damri generally operates airport shuttle services at many Indonesian airports. For Supadio, confirm the route, schedule, and fare through the official airport counter or Damri channel on your travel day.'
        },
        {
          id: 'confirm',
          heading: 'Confirm before boarding',
          body:
            'Do not assume a fixed schedule is available every day. Ask about the last departure, boarding point, and whether it serves your destination before buying a ticket.'
        },
        {
          id: 'backup',
          heading: 'Backup options',
          body:
            'If the bus does not match your flight schedule, use a taxi, ride-hailing, or rental car. For late arrivals, prepare backup transport because buses are limited.'
        }
      ],
      faq: [
        {
          q: 'Is there a Damri bus to Pontianak?',
          a: 'Damri generally operates airport services; for Supadio, confirm route, schedule, and fare at the official counter or Damri channel on your travel day.'
        },
        {
          q: 'What is the bus fare?',
          a: 'Fares are set by the operator and may change; confirm before boarding. This guide does not set an exact number.'
        }
      ],
      related: ['ke-pontianak', 'taksi', 'parkir']
    }
  },
  {
    slug: 'sewa-mobil',
    group: 'transportasi',
    priority: 2,
    id: {
      title: 'Sewa Mobil & Mengemudi di Supadio',
      description:
        'Sewa mobil di Supadio: lokasi, surat izin, dan rute ke Pontianak. Konfirmasikan penyedia dan ketersediaan kendaraan.',
      h1: 'Sewa Mobil & Mengemudi di Supadio',
      intro:
        'Sewa mobil memberi fleksibilitas menjangkau Pontianak, Kubu Raya, dan destinasi lebih jauh seperti Singkawang atau Mempawah. Profil regulator mencantumkan kategori sewa kendaraan; konfirmasikan penyedia dan ketersediaan secara langsung.',
      sections: [
        {
          id: 'izin',
          heading: 'Surat izin mengemudi',
          body:
            'Gunakan surat izin mengemudi yang sah untuk Indonesia. Untuk pengemudi asing, cek persyaratan izin mengemudi internasional dengan otoritas setempat; panduan ini tidak menetapkan aturan izin.'
        },
        {
          id: 'rute',
          heading: 'Rute ke Pontianak',
          body:
            'Dari bandara ke pusat Pontianak sekitar 17 km, umumnya 25–45 menit. Rute dan waktu bervariasi dengan lalu lintas; gunakan peta resmi dan patuhi rambu.'
        },
        {
          id: 'tips',
          heading: 'Tips sewa',
          body:
            'Konfirmasikan lokasi penyerahan kendaraan, asuransi, dan bahan bakar. Untuk perjalanan jauh, rencanakan istirahat dan verifikasi kondisi jalan.'
        }
      ],
      faq: [
        {
          q: 'Di mana sewa mobil di Supadio?',
          a: 'Profil regulator mencantumkan kategori sewa kendaraan; konfirmasikan penyedia dan lokasi penyerahan secara langsung pada hari keberangkatan.'
        },
        {
          q: 'Apakah saya butuh izin mengemudi internasional?',
          a: 'Untuk pengemudi asing, cek persyaratan izin mengemudi internasional dengan otoritas setempat; panduan ini tidak menetapkan aturan.'
        }
      ],
      related: ['ke-singkawang', 'ke-mempawah', 'parkir']
    },
    en: {
      title: 'Car Rental & Driving at Supadio',
      description:
        'Car rental at Supadio: location, licence, and route to Pontianak. Confirm the provider and vehicle availability.',
      h1: 'Car Rental & Driving at Supadio',
      intro:
        'Car rental gives flexibility to reach Pontianak, Kubu Raya, and farther destinations such as Singkawang or Mempawah. The regulator profile lists a car-rental category; confirm the provider and availability directly.',
      sections: [
        {
          id: 'licence',
          heading: 'Driving licence',
          body:
            'Use a valid driving licence for Indonesia. For foreign drivers, check international driving permit requirements with local authorities; this guide does not set licence rules.'
        },
        {
          id: 'route',
          heading: 'Route to Pontianak',
          body:
            'From the airport to central Pontianak is about 17 km, usually 25–45 minutes. Route and time vary with traffic; use official maps and obey signs.'
        },
        {
          id: 'tips',
          heading: 'Rental tips',
          body:
            'Confirm the vehicle handover location, insurance, and fuel. For long trips, plan rest stops and verify road conditions.'
        }
      ],
      faq: [
        {
          q: 'Where is car rental at Supadio?',
          a: 'The regulator profile lists a car-rental category; confirm the provider and handover location directly on your travel day.'
        },
        {
          q: 'Do I need an international driving permit?',
          a: 'For foreign drivers, check international driving permit requirements with local authorities; this guide does not set the rules.'
        }
      ],
      related: ['ke-singkawang', 'ke-mempawah', 'parkir']
    }
  },
  {
    slug: 'jemput-antar',
    group: 'transportasi',
    priority: 2,
    id: {
      title: 'Penjemputan & Pengantaran di Supadio',
      description:
        'Atur penjemputan dan pengantaran di Supadio: zona tunggu, waktu, dan koordinasi. Jangan berhenti di lajur terbatas.',
      h1: 'Penjemputan & Pengantaran',
      intro:
        'Untuk menjemput atau mengantar penumpang di Supadio, gunakan zona resmi yang ditetapkan pengelola. Koordinasikan titik dan waktu melalui kanal maskapai atau pesan singkat, dan patuhi rambu lalu lintas.',
      sections: [
        {
          id: 'zona',
          heading: 'Zona penjemputan',
          body:
            'Pengelola menetapkan zona tunggu dan antar-jemput. Pin lokasi di peta bukan izin berhenti di lajur tertentu atau memasuki area terbatas. Ikuti arahan petugas.'
        },
        {
          id: 'waktu',
          heading: 'Koordinasi waktu',
          body:
            'Pantau status penerbangan melalui maskapai sebelum berangkat menjemput. Tiba terlalu awal di lajur kedatangan dapat mengganggu arus; gunakan area tunggu resmi.'
        },
        {
          id: 'tips',
          heading: 'Tips pengantaran',
          body:
            'Untuk mengantar, turunkan penumpang di area yang diizinkan lalu segera menjauh. Jangan memarkir di lajur kedatangan atau area terlarang.'
        }
      ],
      faq: [
        {
          q: 'Di mana saya menunggu penjemput?',
          a: 'Di zona tunggu resmi yang ditetapkan pengelola; jangan berhenti di lajur kedatangan.'
        },
        {
          q: 'Apakah boleh menunggu di depan terminal?',
          a: 'Gunakan area tunggu yang diizinkan. Menunggu di lajur kedatangan atau area terbatas tidak diperbolehkan.'
        }
      ],
      related: ['area-drop-off', 'taksi', 'transportasi-aplikasi']
    },
    en: {
      title: 'Meet & Greet at Supadio Airport',
      description:
        'Arrange pick-up and drop-off at Supadio: waiting zone, timing, and coordination. Do not stop in restricted lanes.',
      h1: 'Pick-up & Drop-off',
      intro:
        'To pick up or drop off passengers at Supadio, use the official zones set by the operator. Coordinate the point and time through airline channels or a message, and obey traffic signs.',
      sections: [
        {
          id: 'zone',
          heading: 'Pick-up zone',
          body:
            'The operator sets waiting and pick-up zones. A map pin is not permission to stop in a particular lane or enter restricted areas. Follow staff guidance.'
        },
        {
          id: 'timing',
          heading: 'Time coordination',
          body:
            'Track flight status through the airline before leaving to pick someone up. Arriving too early in the arrival lane can block flow; use the official waiting area.'
        },
        {
          id: 'tips',
          heading: 'Drop-off tips',
          body:
            'For drop-off, let passengers out in the allowed area then move away promptly. Do not park in the arrival lane or restricted area.'
        }
      ],
      faq: [
        {
          q: 'Where do I wait for a pick-up?',
          a: 'In the official waiting zone set by the operator; do not stop in the arrival lane.'
        },
        {
          q: 'May I wait in front of the terminal?',
          a: 'Use the allowed waiting area. Waiting in the arrival lane or restricted area is not permitted.'
        }
      ],
      related: ['area-drop-off', 'taksi', 'transportasi-aplikasi']
    }
  },
  {
    slug: 'area-drop-off',
    group: 'transportasi',
    priority: 3,
    id: {
      title: 'Area Antar-Jemput Kendaraan Pribadi di Supadio',
      description:
        'Zona antar-jemput kendaraan pribadi di Supadio: ikuti rambu, jangan parkir di lajur kedatangan. Konfirmasikan aturan pengelola.',
      h1: 'Area Antar-Jemput Kendaraan Pribadi',
      intro:
        'Kendaraan pribadi dapat mengantar dan menjemput di zona yang ditetapkan pengelola Supadio. Patuhi rambu dan petugas; jangan berhenti lama di lajur kedatangan atau area terbatas.',
      sections: [
        {
          id: 'rambu',
          heading: 'Ikuti rambu',
          body:
            'Gunakan jalur dan zona yang diizinkan untuk antar-jemput. Rambu dan arahan petugas mengatur arus agar terminal tetap lancar.'
        },
        {
          id: 'batas',
          heading: 'Hindari lajur terbatas',
          body:
            'Lajur kedatangan dan area tertentu biasanya tidak untuk parkir atau menunggu lama. Turunkan atau jemput penumpang dengan cepat lalu menjauh.'
        },
        {
          id: 'konfirmasi',
          heading: 'Konfirmasi aturan',
          body:
            'Aturan zona dapat berubah; perhatikan informasi terkini di bandara dan arahan petugas pada hari keberangkatan.'
        }
      ],
      faq: [
        {
          q: 'Bolehkah parkir sebentar di depan terminal?',
          a: 'Gunakan zona yang diizinkan. Lajur kedatangan umumnya tidak untuk parkir atau menunggu lama.'
        },
        {
          q: 'Di mana zone antar-jemput?',
          a: 'Ikuti rambu dan arahan petugas; zona ditetapkan pengelola dan dapat berubah.'
        }
      ],
      related: ['jemput-antar', 'parkir', 'taksi']
    },
    en: {
      title: 'Private Vehicle Drop-off Zones at Supadio',
      description:
        'Private vehicle drop-off zones at Supadio: follow signs, do not park in the arrival lane. Confirm operator rules.',
      h1: 'Private Vehicle Drop-off Zones',
      intro:
        'Private vehicles may drop off and pick up passengers in the zones set by the Supadio operator. Follow signs and staff; do not stop long in the arrival lane or restricted areas.',
      sections: [
        {
          id: 'signs',
          heading: 'Follow signs',
          body:
            'Use the allowed lanes and zones for drop-off. Signs and staff guidance manage flow so the terminal stays clear.'
        },
        {
          id: 'limits',
          heading: 'Avoid restricted lanes',
          body:
            'The arrival lane and certain areas are usually not for parking or long waiting. Drop or pick up passengers quickly then move away.'
        },
        {
          id: 'confirm',
          heading: 'Confirm rules',
          body:
            'Zone rules can change; watch for the latest information at the airport and staff guidance on your travel day.'
        }
      ],
      faq: [
        {
          q: 'May I park briefly in front of the terminal?',
          a: 'Use the allowed zone. The arrival lane is generally not for parking or long waiting.'
        },
        {
          q: 'Where are the drop-off zones?',
          a: 'Follow signs and staff; zones are set by the operator and may change.'
        }
      ],
      related: ['jemput-antar', 'parkir', 'taksi']
    }
  },
  {
    slug: 'kedatangan-malam',
    group: 'transportasi',
    priority: 1,
    id: {
      title: 'Kedatangan Malam & Keberangkatan Pagi di Supadio',
      description:
        'Transportasi untuk penerbangan tengah malam atau sangat pagi di Supadio: pesan sebelum tiba, siapkan cadangan. Opsi darat terbatas di luar jam sibuk.',
      h1: 'Kedatangan Malam & Keberangkatan Pagi',
      intro:
        'Penerbangan larut malam atau sangat pagi membutuhkan perencanaan transportasi lebih matang karena opsi darat terbatas di luar jam operasional biasa. Pesan transportasi sebelum tiba atau berangkat.',
      sections: [
        {
          id: 'malam',
          heading: 'Kedatangan larut malam',
          body:
            'Untuk tiba tengah malam, pesan taksi atau kendaraan aplikasi sebelum mendarat. Konfirmasikan bahwa layanan masih tersedia pada jam tersebut; bus terbatas di malam hari.'
        },
        {
          id: 'pagi',
          heading: 'Keberangkatan sangat pagi',
          body:
            'Untuk penerbangan dini hari, siapkan transportasi dari Pontianak sejak malam sebelumnya atau pesan layanan yang beroperasi 24 jam jika ada. Tambahkan cadangan waktu.'
        },
        {
          id: 'cadangan',
          heading: 'Selalu siapkan cadangan',
          body:
            'Jangan mengandalkan satu opsi saja. Simpan kontak penyedia transportasi dan alamat tujuan lengkap. Jika satu layanan tidak tersedia, gunakan opsi lain yang sudah diverifikasi.'
        }
      ],
      faq: [
        {
          q: 'Apakah taksi tersedia tengah malam?',
          a: 'Tersedia tergantung penyedia; pesan sebelum mendarat dan konfirmasikan ketersediaan untuk jam tersebut.'
        },
        {
          q: 'Bagaimana kalau penerbangan saya 04.00?',
          a: 'Pesan transportasi sejak malam sebelumnya atau gunakan layanan yang beroperasi 24 jam jika ada, dan tambahkan cadangan waktu.'
        }
      ],
      related: ['ke-pontianak', 'dari-pontianak', 'transportasi-aplikasi', 'hotel-penerbangan-pagi']
    },
    en: {
      title: 'Late-Night Arrivals & Early-Morning Departures at Supadio',
      description:
        'Transport for midnight or very early flights at Supadio: book before arrival, prepare a backup. Ground options are limited off-peak.',
      h1: 'Late-Night Arrivals & Early-Morning Departures',
      intro:
        'Late-night or very early flights need more careful transport planning because ground options are limited outside normal operating hours. Book transport before you arrive or depart.',
      sections: [
        {
          id: 'night',
          heading: 'Late-night arrival',
          body:
            'For a midnight arrival, book a taxi or ride-hailing before landing. Confirm the service is still available at that hour; buses are limited at night.'
        },
        {
          id: 'early',
          heading: 'Very early departure',
          body:
            'For a pre-dawn flight, arrange transport from Pontianak the evening before or use a 24-hour service if available. Add buffer time.'
        },
        {
          id: 'backup',
          heading: 'Always prepare a backup',
          body:
            'Do not rely on a single option. Keep the transport provider contact and full destination address. If one service is unavailable, use another verified option.'
        }
      ],
      faq: [
        {
          q: 'Are taxis available at midnight?',
          a: 'Availability depends on the provider; book before landing and confirm for that hour.'
        },
        {
          q: 'What if my flight is 04.00?',
          a: 'Arrange transport the evening before or use a 24-hour service if available, and add buffer time.'
        }
      ],
      related: ['ke-pontianak', 'dari-pontianak', 'transportasi-aplikasi', 'hotel-penerbangan-pagi']
    }
  },

  // ===================== PARKIR =====================
  {
    slug: 'parkir',
    group: 'parkir',
    priority: 1,
    id: {
      title: 'Parkir di Bandara Supadio',
      description:
        'Parkir bandara Supadio: profil regulator menyebut parkir inap, tetapi tarif dan ketersediaan dikonfirmasikan ke pengelola. Panduan ini tidak menetapkan tarif.',
      h1: 'Parkir di Supadio',
      intro:
        'Profil regulator mencantumkan kategori parkir inap di Supadio, namun tarif, petak, dan penjagaan tidak dijamin sama dengan kondisi saat ini. Konfirmasikan lokasi, biaya, dan ketersediaan ke pengelola bandara.',
      sections: [
        {
          id: 'kategori',
          heading: 'Kategori yang tercantum',
          body:
            'Profil Hubud menyebut parkir inap sebagai bagian fasilitas bandara. Ini menunjukkan ketersediaan fasilitas parkir, bukan jaminan tarif, petak, atau penjagaan hari ini.'
        },
        {
          id: 'tarif',
          heading: 'Tarif dan ketersediaan',
          body:
            'Tarif parkir ditetapkan pengelola dan dapat berubah. Konfirmasikan biaya per hari, jenis kendaraan yang dilayani, dan apakah petak tersedia pada hari keberangkatan Anda.'
        },
        {
          id: 'tips',
          heading: 'Tips parkir',
          body:
            'Untuk perjalanan lebih dari sehari, tanyakan parkir inap dan prosedur keluar-masuk. Simpan tiket parkir dan catat zona untuk memudahkan kembali.'
        }
      ],
      faq: [
        {
          q: 'Berapa tarif parkir Supadio?',
          a: 'Tarif ditetapkan pengelola dan dapat berubah; konfirmasikan langsung ke bandara. Panduan ini tidak menetapkan angka pasti.'
        },
        {
          q: 'Apakah ada parkir inap?',
          a: 'Profil regulator menyebut kategori parkir inap, namun ketersediaan dan tarif dikonfirmasikan ke pengelola pada hari keberangkatan.'
        }
      ],
      related: ['parkir-inap', 'area-drop-off', 'fasilitas']
    },
    en: {
      title: 'Parking at Supadio Airport',
      description:
        'Supadio airport parking: the regulator profile mentions overnight parking, but rates and availability are confirmed with the operator. This guide sets no fare.',
      h1: 'Parking at Supadio',
      intro:
        'The regulator profile lists an overnight-parking category at Supadio, but rates, spaces, and staffing are not guaranteed to match current conditions. Confirm location, cost, and availability with the airport operator.',
      sections: [
        {
          id: 'category',
          heading: 'Category listed',
          body:
            'The Hubud profile mentions overnight parking as part of airport facilities. This shows a parking facility exists, not a guarantee of today’s rate, spaces, or staffing.'
        },
        {
          id: 'fare',
          heading: 'Rate and availability',
          body:
            'Parking rates are set by the operator and may change. Confirm the daily cost, vehicle types served, and whether spaces are available on your travel day.'
        },
        {
          id: 'tips',
          heading: 'Parking tips',
          body:
            'For trips longer than a day, ask about overnight parking and re-entry procedure. Keep the parking ticket and note the zone to ease your return.'
        }
      ],
      faq: [
        {
          q: 'What is the Supadio parking rate?',
          a: 'Rates are set by the operator and may change; confirm directly at the airport. This guide does not set an exact number.'
        },
        {
          q: 'Is there overnight parking?',
          a: 'The regulator profile mentions an overnight-parking category, but availability and rate are confirmed with the operator on your travel day.'
        }
      ],
      related: ['parkir-inap', 'area-drop-off', 'fasilitas']
    }
  },
  {
    slug: 'parkir-inap',
    group: 'parkir',
    priority: 2,
    id: {
      title: 'Parkir Inap di Bandara Supadio',
      description:
        'Parkir inap Supadio untuk perjalanan beberapa hari: konfirmasikan tarif harian, keamanan, dan prosedur. Panduan ini tidak menetapkan biaya pasti.',
      h1: 'Parkir Inap di Supadio',
      intro:
        'Untuk meninggalkan kendaraan beberapa hari, profil regulator mencantumkan kategori parkir inap di Supadio. Konfirmasikan tarif harian, keamanan, dan prosedur keluar-masuk ke pengelola sebelum bepergian.',
      sections: [
        {
          id: 'konfirmasi',
          heading: 'Konfirmasi sebelum meninggalkan mobil',
          body:
            'Tanyakan tarif per hari, batas waktu, dan apakah parkir tutup pada jam tertentu. Jangan menganggap parkir tersedia tanpa batas hanya karena bandara melayani penerbangan malam.'
        },
        {
          id: 'keamanan',
          heading: 'Keamanan',
          body:
            'Prosedur penjagaan ditetapkan pengelola. Untuk barang berharga, sebaiknya bawa pulang atau simpan di kabin pesawat, bukan tinggalkan di kendaraan.'
        },
        {
          id: 'prosedur',
          heading: 'Prosedur masuk-keluar',
          body:
            'Simpan tiket parkir dan catat zona. Tanyakan apakah ada batas waktu keluar yang dikenakan biaya tambahan.'
        }
      ],
      faq: [
        {
          q: 'Berapa biaya parkir inap?',
          a: 'Tarif harian ditetapkan pengelola dan dapat berubah; konfirmasikan langsung ke bandara.'
        },
        {
          q: 'Apakah aman meninggalkan mobil berhari-hari?',
          a: 'Penjagaan ditetapkan pengelola; untuk barang berharga, bawa pulang atau bawa ke kabin pesawat.'
        }
      ],
      related: ['parkir', 'fasilitas', 'kedatangan-malam']
    },
    en: {
      title: 'Overnight Parking at Supadio Airport',
      description:
        'Supadio overnight parking for multi-day trips: confirm daily rate, security, and procedure. This guide sets no exact cost.',
      h1: 'Overnight Parking at Supadio',
      intro:
        'To leave a vehicle for several days, the regulator profile lists an overnight-parking category at Supadio. Confirm the daily rate, security, and entry-exit procedure with the operator before travelling.',
      sections: [
        {
          id: 'confirm',
          heading: 'Confirm before leaving the car',
          body:
            'Ask about the daily rate, time limits, and whether the lot closes at certain hours. Do not assume parking is unlimited just because the airport serves late flights.'
        },
        {
          id: 'security',
          heading: 'Security',
          body:
            'Guarding procedure is set by the operator. For valuables, take them home or carry them in the cabin rather than leaving them in the vehicle.'
        },
        {
          id: 'procedure',
          heading: 'Entry-exit procedure',
          body:
            'Keep the parking ticket and note the zone. Ask whether there is an exit time limit with an extra charge.'
        }
      ],
      faq: [
        {
          q: 'What does overnight parking cost?',
          a: 'Daily rates are set by the operator and may change; confirm directly at the airport.'
        },
        {
          q: 'Is it safe to leave a car for days?',
          a: 'Guarding is set by the operator; for valuables, take them home or carry them in the cabin.'
        }
      ],
      related: ['parkir', 'fasilitas', 'kedatangan-malam']
    }
  },

  // ===================== KULINER =====================
  {
    slug: 'makan-dalam-terminal',
    group: 'kuliner',
    priority: 2,
    id: {
      title: 'Makan di Terminal Bandara Supadio',
      description:
        'Pilihan makan di dalam terminal Supadio: profil regulator menyebut restoran. Konfirmasikan gerai, jam, dan menu yang beroperasi pada hari keberangkatan.',
      h1: 'Makan di Terminal Supadio',
      intro:
        'Profil regulator mencantumkan kategori restoran di Supadio, namun gerai, jam buka, dan menu yang benar-benar beroperasi harus dikonfirmasikan di terminal pada hari keberangkatan Anda.',
      sections: [
        {
          id: 'kategori',
          heading: 'Kategori restoran',
          body:
            'Daftar fasilitas menyebut restoran sebagai bagian terminal. Ini bukan jaminan gerai tertentu buka hari ini; konfirmasikan secara langsung di lokasi.'
        },
        {
          id: 'waktu',
          heading: 'Waktu makan',
          body:
            'Jika penerbangan sangat pagi atau larut malam, cek lebih awal apakah gerai sudah buka. Jangan mengandalkan ketersediaan penuh di luar jam sibuk.'
        },
        {
          id: 'tips',
          heading: 'Tips penumpang',
          body:
            'Simpan waktu untuk makan sebelum keamanan jika memungkinkan. Bawa air dalam kemasan sesuai aturan kabin dan perhatikan batas cairan.'
        }
      ],
      faq: [
        {
          q: 'Apakah ada restoran di Supadio?',
          a: 'Profil regulator menyebut kategori restoran; konfirmasikan gerai yang benar-benar buka di terminal pada hari keberangkatan.'
        },
        {
          q: 'Apakah buka 24 jam?',
          a: 'Tidak dijamin. Jam operasi gerai dikonfirmasikan di lokasi; jangan menganggap tersedia sepanjang waktu.'
        }
      ],
      related: ['fasilitas', 'restoran-terdekat', 'sarapan-sebelum-terbang']
    },
    en: {
      title: 'Dining Inside Supadio Terminal',
      description:
        'Dining options inside the Supadio terminal: the regulator profile mentions restaurants. Confirm outlets, hours, and menu operating on your travel day.',
      h1: 'Dining Inside Supadio Terminal',
      intro:
        'The regulator profile lists a restaurant category at Supadio, but the outlets, opening hours, and menu that actually operate must be confirmed at the terminal on your travel day.',
      sections: [
        {
          id: 'category',
          heading: 'Restaurant category',
          body:
            'The facility list mentions restaurants as part of the terminal. This is not a guarantee a particular outlet is open today; confirm directly on site.'
        },
        {
          id: 'time',
          heading: 'Meal timing',
          body:
            'If your flight is very early or late, check in advance whether outlets are open. Do not rely on full availability off-peak.'
        },
        {
          id: 'tips',
          heading: 'Passenger tips',
          body:
            'Save time to eat before security if possible. Carry packaged water per cabin rules and observe the liquid limit.'
        }
      ],
      faq: [
        {
          q: 'Are there restaurants at Supadio?',
          a: 'The regulator profile mentions a restaurant category; confirm the outlets actually open at the terminal on your travel day.'
        },
        {
          q: 'Are they open 24 hours?',
          a: 'Not guaranteed. Outlet hours are confirmed on site; do not assume round-the-clock availability.'
        }
      ],
      related: ['fasilitas', 'restoran-terdekat', 'sarapan-sebelum-terbang']
    }
  },
  {
    slug: 'restoran-terdekat',
    group: 'kuliner',
    priority: 1,
    id: {
      title: 'Restoran Terdekat Bandara Supadio',
      description:
        'Restoran di sekitar Supadio dan perjalanan ke Pontianak: pilih berdasarkan waktu, jarak, dan bagasi. Konfirmasikan alamat dan jam sebelum pergi.',
      h1: 'Restoran Terdekat Supadio',
      intro:
        'Di sekitar bandara dan sepanjang jalan ke Pontianak terdapat pilihan makan, namun lokasi persis, jam, dan harga bervariasi. Pilih tempat berdasarkan waktu penerbangan, jarak, dan kemudahan membawa bagasi.',
      sections: [
        {
          id: 'jarak',
          heading: 'Jarak dari bandara',
          body:
            'Opsi terdekat berada di area Kubu Raya dekat bandara; pilihan lebih banyak ada di Kota Pontianak sekitar 17 km. Waktu tempuh 25–45 menit berarti makan di kota butuh waktu cadangan.'
        },
        {
          id: 'kapan',
          heading: 'Kapan makan di luar bandara',
          body:
            'Cocok untuk kedatangan yang ingin makan setelah turun, atau keberangkatan dengan waktu menganggur di kota. Untuk penerbangan segera, lebih praktis makan di dalam terminal.'
        },
        {
          id: 'tips',
          heading: 'Tips memilih',
          body:
            'Konfirmasikan alamat, jam buka, dan cara ke sana melalui peta atau aplikasi pada hari keberangkatan. Perhatikan kemudahan membawa bagasi dan transportasi pulang ke bandara.'
        }
      ],
      faq: [
        {
          q: 'Apakah ada restoran dalam jalan kaki dari bandara?',
          a: 'Area sekitar bandara tidak secara otomatis ramah pejalan kaki; konfirmasikan akses dan transportasi karena jarak serta jalan bervariasi.'
        },
        {
          q: 'Mana lebih baik, makan di bandara atau kota?',
          a: 'Untuk penerbangan segera, di bandara lebih praktis. Untuk waktu luang, kota menawarkan lebih banyak pilihan.'
        }
      ],
      related: ['makan-dalam-terminal', 'kafe-terdekat', 'sarapan-sebelum-terbang', 'makanan-lokal']
    },
    en: {
      title: 'Restaurants Near Supadio Airport',
      description:
        'Restaurants around Supadio and the trip to Pontianak: choose by time, distance, and baggage. Confirm address and hours before going.',
      h1: 'Restaurants Near Supadio',
      intro:
        'Around the airport and along the road to Pontianak there are dining choices, but exact locations, hours, and prices vary. Choose a place by flight time, distance, and ease of carrying baggage.',
      sections: [
        {
          id: 'distance',
          heading: 'Distance from the airport',
          body:
            'The nearest options are in the Kubu Raya area near the airport; more choices are in Pontianak city about 17 km away. The 25–45 minute trip means city dining needs buffer time.'
        },
        {
          id: 'when',
          heading: 'When to eat outside',
          body:
            'Good for arrivals who want to eat after landing, or departures with spare time in the city. For an immediate flight, eating inside the terminal is more practical.'
        },
        {
          id: 'tips',
          heading: 'Choosing tips',
          body:
            'Confirm the address, opening hours, and how to get there via a map or app on your travel day. Consider baggage ease and transport back to the airport.'
        }
      ],
      faq: [
        {
          q: 'Are there restaurants within walking distance of the airport?',
          a: 'The area around the airport is not automatically pedestrian-friendly; confirm access and transport because distance and roads vary.'
        },
        {
          q: 'Is it better to eat at the airport or in the city?',
          a: 'For an immediate flight, the airport is more practical. For free time, the city offers more choices.'
        }
      ],
      related: ['makan-dalam-terminal', 'kafe-terdekat', 'sarapan-sebelum-terbang', 'makanan-lokal']
    }
  },
  {
    slug: 'kafe-terdekat',
    group: 'kuliner',
    priority: 2,
    id: {
      title: 'Kafe Terdekat Bandara Supadio',
      description:
        'Kafe di sekitar Supadio dan Pontianak: cocok untuk kopi atau bekerja sebentar. Konfirmasikan lokasi, jam, dan akses sebelum pergi.',
      h1: 'Kafe Terdekat Supadio',
      intro:
        'Kafe tersebar di area Kubu Raya dan Pontianak. Sesuaikan pilihan dengan waktu penerbangan dan transportasi, karena jarak dari bandara bervariasi dan tidak semua tempat ramah pejalan kaki.',
      sections: [
        {
          id: 'pilihan',
          heading: 'Pilihan kafe',
          body:
            'Kafe ada di sekitar bandara dan lebih banyak di Pontianak. Konfirmasikan lokasi persis dan jam buka melalui peta pada hari keberangkatan; jangan menganggap semua buka pagi buta.'
        },
        {
          id: 'kapan',
          heading: 'Kapan cocok',
          body:
            'Kafe cocok untuk kedatangan santai, menunggu waktu di kota, atau bekerja sebentar. Untuk penerbangan segera, pilih kafe di dalam terminal jika tersedia.'
        },
        {
          id: 'tips',
          heading: 'Tips',
          body:
            'Perhatikan waktu menuju bandara dan kemudahan bagasi. Simpan alamat lengkap dan rencanakan transportasi pulang.'
        }
      ],
      faq: [
        {
          q: 'Apakah ada kafe di dalam terminal?',
          a: 'Profil fasilitas menyebut restoran; konfirmasikan gerai kafe yang benar-benar buka di terminal pada hari keberangkatan.'
        },
        {
          q: 'Di mana kafe terdekat?',
          a: 'Area Kubu Raya dekat bandara dan Pontianak memiliki kafe; konfirmasikan lokasi dan jam melalui peta.'
        }
      ],
      related: ['restoran-terdekat', 'sarapan-sebelum-terbang', 'makan-dalam-terminal']
    },
    en: {
      title: 'Cafés Near Supadio Airport',
      description:
        'Cafés around Supadio and Pontianak: good for coffee or a short work stop. Confirm location, hours, and access before going.',
      h1: 'Cafés Near Supadio',
      intro:
        'Cafés are spread across the Kubu Raya area and Pontianak. Match your choice to flight time and transport because distance from the airport varies and not every place is pedestrian-friendly.',
      sections: [
        {
          id: 'options',
          heading: 'Café options',
          body:
            'Cafés exist near the airport and more in Pontianak. Confirm the exact location and opening hours via a map on your travel day; do not assume all open pre-dawn.'
        },
        {
          id: 'when',
          heading: 'When it fits',
          body:
            'Cafés suit a relaxed arrival, waiting time in the city, or a short work stop. For an immediate flight, choose a café inside the terminal if available.'
        },
        {
          id: 'tips',
          heading: 'Tips',
          body:
            'Mind the time to the airport and baggage ease. Keep the full address and plan return transport.'
        }
      ],
      faq: [
        {
          q: 'Are there cafés inside the terminal?',
          a: 'The facility profile mentions restaurants; confirm the café outlets actually open at the terminal on your travel day.'
        },
        {
          q: 'Where is the nearest café?',
          a: 'The Kubu Raya area near the airport and Pontianak have cafés; confirm location and hours via a map.'
        }
      ],
      related: ['restoran-terdekat', 'sarapan-sebelum-terbang', 'makan-dalam-terminal']
    }
  },
  {
    slug: 'sarapan-sebelum-terbang',
    group: 'kuliner',
    priority: 2,
    id: {
      title: 'Sarapan Sebelum Terbang dari Supadio',
      description:
        'Sarapan sebelum penerbangan pagi Supadio: opsi di terminal dan di kota. Konfirmasikan jam buka karena penerbangan pagi butuh perencanaan.',
      h1: 'Sarapan Sebelum Terbang',
      intro:
        'Untuk penerbangan pagi dari Supadio, sarapan butuh perencanaan karena gerai mungkin belum buka. Pilih makan di terminal jika tersedia, atau sarapan di Pontianak sebelum berangkat lebih awal.',
      sections: [
        {
          id: 'terminal',
          heading: 'Sarapan di terminal',
          body:
            'Jika ada gerai buka pagi di terminal, ini paling praktis sebelum keamanan. Konfirmasikan jam buka gerai pada hari keberangkatan karena tidak dijamin 24 jam.'
        },
        {
          id: 'kota',
          heading: 'Sarapan di Pontianak',
          body:
            'Banyak tempat sarapan di kota buka lebih awal, tetapi butuh waktu 25–45 menit ke bandara. Hitung waktu lapor masuk dan antrean agar tidak terlambat.'
        },
        {
          id: 'tips',
          heading: 'Tips praktis',
          body:
            'Untuk penerbangan sangat pagi, siapkan makanan ringan dari penginapan sebagai cadangan. Bawa air kemasan sesuai aturan kabin.'
        }
      ],
      faq: [
        {
          q: 'Apakah gerai sarapan buka pagi buta?',
          a: 'Tidak dijamin. Konfirmasikan jam buka gerai di terminal atau kota pada hari keberangkatan.'
        },
        {
          q: 'Kapan saya harus berangkat dari hotel?',
          a: 'Sesuai rekomendasi lapor masuk maskapai ditambah waktu ke bandara dan cadangan lalu lintas.'
        }
      ],
      related: ['makan-dalam-terminal', 'restoran-terdekat', 'hotel-penerbangan-pagi']
    },
    en: {
      title: 'Breakfast Before a Supadio Flight',
      description:
        'Breakfast before an early Supadio flight: options in the terminal and in the city. Confirm opening hours because early flights need planning.',
      h1: 'Breakfast Before Flying',
      intro:
        'For an early Supadio flight, breakfast needs planning because outlets may not be open. Eat in the terminal if available, or have breakfast in Pontianak before leaving earlier.',
      sections: [
        {
          id: 'terminal',
          heading: 'Breakfast in the terminal',
          body:
            'If an early outlet is open in the terminal, it is most practical before security. Confirm outlet hours on your travel day because 24-hour service is not guaranteed.'
        },
        {
          id: 'city',
          heading: 'Breakfast in Pontianak',
          body:
            'Many city breakfast spots open earlier, but it takes 25–45 minutes to the airport. Count check-in time and queues to avoid being late.'
        },
        {
          id: 'tips',
          heading: 'Practical tips',
          body:
            'For a very early flight, keep a light snack from your accommodation as backup. Carry packaged water per cabin rules.'
        }
      ],
      faq: [
        {
          q: 'Are breakfast outlets open pre-dawn?',
          a: 'Not guaranteed. Confirm terminal or city outlet hours on your travel day.'
        },
        {
          q: 'When should I leave the hotel?',
          a: 'Per the airline check-in recommendation plus travel time to the airport and a traffic buffer.'
        }
      ],
      related: ['makan-dalam-terminal', 'restoran-terdekat', 'hotel-penerbangan-pagi']
    }
  },
  {
    slug: 'makanan-lokal',
    group: 'kuliner',
    priority: 2,
    id: {
      title: 'Makanan Lokal Pontianak dekat Supadio',
      description:
        'Kuliner khas Pontianak: contoh hidangan dan area makan. Coba di kota untuk pengalaman lokal; sesuaikan dengan waktu penerbangan.',
      h1: 'Makanan Lokal Pontianak',
      intro:
        'Pontianak dikenal dengan kuliner khas Kalimantan Barat. Jika waktu mengizinkan, makan di kota memberi pengalaman lokal yang lebih kaya daripada hanya di bandara. Sesuaikan dengan jadwal penerbangan.',
      sections: [
        {
          id: 'contoh',
          heading: 'Contoh hidangan',
          body:
            'Kuliner daerah Kalimantan Barat mencakup hidangan berbahan ikan, sayur khas, dan camilan lokal. Nama dan ketersediaan bervariasi; konfirmasikan tempat yang buka melalui peta atau rekomendasi resmi wisata.'
        },
        {
          id: 'area',
          heading: 'Area makan',
          body:
            'Pusat Kota Pontianak memiliki konsentrasi tempat makan. Jarak sekitar 17 km dari bandara berarti perlu waktu cadangan jika Anda harus kembali untuk penerbangan.'
        },
        {
          id: 'tips',
          heading: 'Tips wisata kuliner',
          body:
            'Untuk penerbangan mendatang, jangan makan terlalu dekat jam keberangkatan. Catat alamat dan rencanakan transportasi pulang ke bandara.'
        }
      ],
      faq: [
        {
          q: 'Apa makanan khas Pontianak?',
          a: 'Kuliner Kalimantan Barat dengan bahan lokal seperti ikan dan sayur khas; nama dan tempat bervariasi, konfirmasikan yang buka melalui peta.'
        },
        {
          q: 'Layakkah singgah sebelum penerbangan?',
          a: 'Jika waktu luang cukup dan Anda sudah kembali ke bandara tepat waktu, ini pengalaman lokal yang baik. Jangan melakukannya terlalu dekat jam terbang.'
        }
      ],
      related: ['restoran-terdekat', 'kafe-terdekat', 'sehari-di-pontianak']
    },
    en: {
      title: 'Local Pontianak Food near Supadio',
      description:
        'Pontianak specialities: example dishes and dining areas. Try the city for local flavour; match it to your flight schedule.',
      h1: 'Local Pontianak Food',
      intro:
        'Pontianak is known for West Kalimantan cuisine. If time allows, eating in the city gives a richer local experience than the airport alone. Match it to your flight schedule.',
      sections: [
        {
          id: 'examples',
          heading: 'Example dishes',
          body:
            'West Kalimantan cuisine includes fish-based dishes, local vegetables, and regional snacks. Names and availability vary; confirm open places via a map or official tourism guidance.'
        },
        {
          id: 'area',
          heading: 'Dining areas',
          body:
            'Central Pontianak has a concentration of eateries. The distance of about 17 km from the airport means buffer time if you must return for a flight.'
        },
        {
          id: 'tips',
          heading: 'Food-trip tips',
          body:
            'For an upcoming flight, do not eat too close to departure. Note the address and plan transport back to the airport.'
        }
      ],
      faq: [
        {
          q: 'What is Pontianak speciality food?',
          a: 'West Kalimantan cuisine with local ingredients such as fish and regional vegetables; names and places vary, confirm open ones via a map.'
        },
        {
          q: 'Is it worth a stop before a flight?',
          a: 'If you have enough free time and return to the airport on time, it is a good local experience. Do not do it too close to departure.'
        }
      ],
      related: ['restoran-terdekat', 'kafe-terdekat', 'sehari-di-pontianak']
    }
  },

  // ===================== AKOMODASI =====================
  {
    slug: 'hotel-terdekat',
    group: 'akomodasi',
    priority: 1,
    id: {
      title: 'Hotel Terdekat Bandara Supadio',
      description:
        'Hotel di sekitar Supadio dan Pontianak: pertimbangkan jarak, transportasi, dan tarif. Verifikasi ketersediaan serta layanan antar-jemput ke bandara.',
      h1: 'Hotel Terdekat Supadio',
      intro:
        'Akomodasi terdekat berada di area Kubu Raya dekat bandara dan lebih banyak di Kota Pontianak sekitar 17 km. Pilih berdasarkan jarak, transportasi ke bandara, dan kebutuhan penerbangan Anda.',
      sections: [
        {
          id: 'area',
          heading: 'Area akomodasi',
          body:
            'Beberapa properti berada dekat bandara di Kubu Raya; pilihan lebih beragam di Pontianak. Jarak dan waktu tempuh bervariasi, jadi konfirmasikan lokasi persis melalui peta.'
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi sebelum memesan',
          body:
            'Cek ketersediaan, tarif, dan apakah properti menyediakan antar-jemput bandara melalui kanal resmi properti. Panduan ini tidak menetapkan harga atau status kerja sama.'
        },
        {
          id: 'tips',
          heading: 'Tips memilih',
          body:
            'Untuk penerbangan pagi, pilih properti dengan layanan antar-jemput atau dekat jalan ke bandara. Simpan alamat lengkap dan waktu tempuh perkiraan.'
        }
      ],
      faq: [
        {
          q: 'Hotel mana paling dekat Supadio?',
          a: 'Properti di area Kubu Raya dekat bandara umumnya paling dekat; konfirmasikan lokasi, tarif, dan antar-jemput melalui kanal resmi properti.'
        },
        {
          q: 'Apakah panduan ini punya harga hotel?',
          a: 'Tidak. Tarif dan ketersediaan diverifikasi ke properti masing-masing; panduan ini tidak menetapkan harga.'
        }
      ],
      related: ['hotel-penerbangan-pagi', 'ke-pontianak', 'kedatangan-malam']
    },
    en: {
      title: 'Hotels Near Supadio Airport',
      description:
        'Hotels around Supadio and Pontianak: consider distance, transport, and rate. Verify availability and airport shuttle service.',
      h1: 'Hotels Near Supadio',
      intro:
        'The nearest accommodation is in the Kubu Raya area near the airport, with more variety in Pontianak city about 17 km away. Choose by distance, transport to the airport, and your flight needs.',
      sections: [
        {
          id: 'area',
          heading: 'Accommodation areas',
          body:
            'Some properties are near the airport in Kubu Raya; more choices are in Pontianak. Distance and travel time vary, so confirm the exact location via a map.'
        },
        {
          id: 'verify',
          heading: 'Verify before booking',
          body:
            'Check availability, rate, and whether the property offers an airport shuttle through the property official channel. This guide does not set prices or a partnership status.'
        },
        {
          id: 'tips',
          heading: 'Choosing tips',
          body:
            'For an early flight, choose a property with a shuttle or near the road to the airport. Keep the full address and estimated travel time.'
        }
      ],
      faq: [
        {
          q: 'Which hotel is closest to Supadio?',
          a: 'Properties in the Kubu Raya area near the airport are generally closest; confirm location, rate, and shuttle through the property official channel.'
        },
        {
          q: 'Does this guide have hotel prices?',
          a: 'No. Rates and availability are verified with each property; this guide sets no price.'
        }
      ],
      related: ['hotel-penerbangan-pagi', 'ke-pontianak', 'kedatangan-malam']
    }
  },
  {
    slug: 'hotel-penerbangan-pagi',
    group: 'akomodasi',
    priority: 2,
    id: {
      title: 'Menginap untuk Penerbangan Pagi di Supadio',
      description:
        'Penginapan untuk penerbangan pagi atau kedatangan malam Supadio: pilih properti dengan antar-jemput atau dekat bandara. Verifikasi layanan ke properti.',
      h1: 'Menginap untuk Penerbangan Pagi',
      intro:
        'Untuk penerbangan dini hari atau kedatangan larut malam, menginap di properti dekat bandara atau dengan layanan antar-jemput mengurangi risiko terlambat. Verifikasi layanan ke properti masing-masing.',
      sections: [
        {
          id: 'pagi',
          heading: 'Penerbangan pagi',
          body:
            'Pilih properti yang menyediakan antar-jemput bandara atau berada dekat jalan ke bandara. Konfirmasikan jam layanan antar-jemput karena tidak semua beroperasi 24 jam.'
        },
        {
          id: 'malam',
          heading: 'Kedatangan malam',
          body:
            'Untuk tiba tengah malam, pastikan properti bisa menerima tamu dan transportasi dari bandara tersedia. Pesan transportasi sebelum mendarat.'
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi layanan',
          body:
            'Tanyakan tarif, jam antar-jemput, dan prosedur pemesanan ke properti langsung. Panduan ini tidak menetapkan harga atau status kerja sama dengan properti mana pun.'
        }
      ],
      faq: [
        {
          q: 'Hotel apa yang cocok penerbangan 05.00?',
          a: 'Properti dengan antar-jemput 24 jam atau dekat bandara; konfirmasikan jam layanan ke properti karena tidak semua beroperasi sepanjang waktu.'
        },
        {
          q: 'Apakah panduan ini memesan hotel?',
          a: 'Tidak. Kami hanya menjelaskan pertimbangan; pemesanan dan verifikasi dilakukan ke properti langsung.'
        }
      ],
      related: ['hotel-terdekat', 'kedatangan-malam', 'sarapan-sebelum-terbang']
    },
    en: {
      title: 'Stay for an Early Supadio Flight',
      description:
        'Lodging for early or late flights at Supadio: choose a property with a shuttle or near the airport. Verify service with the property.',
      h1: 'Stay for an Early Flight',
      intro:
        'For a pre-dawn flight or late-night arrival, staying at a property near the airport or with a shuttle reduces the risk of being late. Verify the service with each property.',
      sections: [
        {
          id: 'early',
          heading: 'Early flight',
          body:
            'Choose a property that offers an airport shuttle or is near the road to the airport. Confirm shuttle hours because not all operate 24 hours.'
        },
        {
          id: 'late',
          heading: 'Late arrival',
          body:
            'For a midnight arrival, make sure the property can receive guests and transport from the airport is available. Book transport before landing.'
        },
        {
          id: 'verify',
          heading: 'Verify service',
          body:
            'Ask the property directly about rate, shuttle hours, and booking procedure. This guide sets no price or partnership with any property.'
        }
      ],
      faq: [
        {
          q: 'Which hotel suits a 05.00 flight?',
          a: 'A property with 24-hour shuttle or near the airport; confirm hours with the property because not all operate around the clock.'
        },
        {
          q: 'Does this guide book hotels?',
          a: 'No. We only explain considerations; booking and verification are done with the property directly.'
        }
      ],
      related: ['hotel-terdekat', 'kedatangan-malam', 'sarapan-sebelum-terbang']
    }
  },

  // ===================== WISATA =====================
  {
    slug: 'tugu-khatulistiwa',
    group: 'wisata',
    priority: 2,
    id: {
      title: 'Tugu Khatulistiwa dari Bandara Supadio',
      description:
        'Wisata Tugu Khatulistiwa Pontianak dari Supadio: jarak, rute, dan tips. Objek wisata nyata; verifikasi jam dan akses sebelum pergi.',
      h1: 'Tugu Khatulistiwa dari Supadio',
      intro:
        'Tugu Khatulistiwa adalah monumen nyata di Pontianak yang menandai garis khatulistiwa. Dari Supadio, perjalanan ke arah utara Pontianak membutuhkan waktu dan transportasi; rencanakan dengan sisa waktu penerbangan.',
      sections: [
        {
          id: 'objek',
          heading: 'Tentang objek',
          body:
            'Tugu Khatulistiwa adalah landmark Pontianak yang menandai garis ekuator. Ini objek wisata nyata dengan sejarah panjang; verifikasi kondisi dan fasilitas melalui sumber resmi wisata setempat.'
        },
        {
          id: 'rute',
          heading: 'Rute dari bandara',
          body:
            'Monumen berada di bagian utara Pontianak, sekitar 20 km atau lebih dari bandara tergantung rute. Waktu tempuh bervariasi; gunakan peta resmi dan patuhi lalu lintas.'
        },
        {
          id: 'tips',
          heading: 'Tips kunjungan',
          body:
            'Cocok untuk singgah jika Anda punya waktu luang sebelum penerbangan berikutnya. Jangan melakukannya terlalu dekat jam keberangkatan. Verifikasi jam buka dan akses melalui peta: ' +
            G('Tugu Khatulistiwa Pontianak') +
            '.'
        }
      ],
      faq: [
        {
          q: 'Berapa jauh Tugu Khatulistiwa dari bandara?',
          a: 'Di utara Pontianak, sekitar 20 km atau lebih tergantung rute; waktu tempuh bervariasi dengan lalu lintas.'
        },
        {
          q: 'Apakah layak singgah sebelum penerbangan?',
          a: 'Hanya jika waktu luang cukup dan Anda kembali ke bandara tepat waktu. Verifikasi jam buka terlebih dahulu.'
        }
      ],
      related: ['sehari-di-pontianak', 'ke-pontianak', 'makanan-lokal']
    },
    en: {
      title: 'Equator Monument from Supadio Airport',
      description:
        'Visiting Pontianak Equator Monument from Supadio: distance, route, and tips. A real attraction; verify hours and access before going.',
      h1: 'Equator Monument from Supadio',
      intro:
        'The Equator Monument is a real Pontianak landmark marking the equator line. From Supadio, the trip north into Pontianak takes time and transport; plan it with your remaining flight time.',
      sections: [
        {
          id: 'place',
          heading: 'About the place',
          body:
            'The Equator Monument is a Pontianak landmark marking the equator line. It is a real attraction with a long history; verify condition and facilities through local official tourism sources.'
        },
        {
          id: 'route',
          heading: 'Route from the airport',
          body:
            'The monument is in northern Pontianak, about 20 km or more from the airport depending on route. Travel time varies; use official maps and obey traffic.'
        },
        {
          id: 'tips',
          heading: 'Visit tips',
          body:
            'Good for a stop if you have free time before your next flight. Do not do it too close to departure. Verify opening hours and access via a map: ' +
            G('Tugu Khatulistiwa Pontianak') +
            '.'
        }
      ],
      faq: [
        {
          q: 'How far is the Equator Monument from the airport?',
          a: 'In northern Pontianak, about 20 km or more depending on route; travel time varies with traffic.'
        },
        {
          q: 'Is it worth a stop before a flight?',
          a: 'Only if you have enough free time and return to the airport on time. Verify opening hours first.'
        }
      ],
      related: ['sehari-di-pontianak', 'ke-pontianak', 'makanan-lokal']
    }
  },
  {
    slug: 'keraton-kadriyah',
    group: 'wisata',
    priority: 3,
    id: {
      title: 'Keraton Kadriyah dari Bandara Supadio',
      description:
        'Wisata Keraton Kadriyah Pontianak dari Supadio: istana bersejarah. Verifikasi jam dan akses melalui sumber resmi sebelum pergi.',
      h1: 'Keraton Kadriyah dari Supadio',
      intro:
        'Keraton Kadriyah adalah istana bersejarah di Pontianak dengan nilai budaya Kesultanan Pontianak. Dari Supadio, perjalanan ke pusat kota membutuhkan transportasi; sesuaikan dengan waktu penerbangan.',
      sections: [
        {
          id: 'objek',
          heading: 'Tentang objek',
          body:
            'Keraton Kadriyah merupakan bangunan bersejarah peninggalan Kesultanan Pontianak. Verifikasi status kunjungan, jam, dan akses melalui sumber resmi setempat karena aturan dapat berubah.'
        },
        {
          id: 'rute',
          heading: 'Rute dari bandara',
          body:
            'Istana berada di dalam Kota Pontianak, sekitar 17 km dari bandara. Waktu tempuh umumnya 25–45 menit tergantung lalu lintas.'
        },
        {
          id: 'tips',
          heading: 'Tips kunjungan',
          body:
            'Cocok untuk singgah budaya jika waktu luang cukup. Verifikasi jam buka dan aturan berpakaian melalui peta atau sumber resmi: ' +
            G('Keraton Kadriyah Pontianak') +
            '.'
        }
      ],
      faq: [
        {
          q: 'Apakah Keraton Kadriyah bisa dikunjungi?',
          a: 'Iya sebagai objek bersejarah, namun verifikasi jam dan aturan melalui sumber resmi karena dapat berubah.'
        },
        {
          q: 'Berapa jauh dari bandara?',
          a: 'Di pusat Pontianak, sekitar 17 km; waktu tempuh 25–45 menit tergantung lalu lintas.'
        }
      ],
      related: ['tugu-khatulistiwa', 'museum-kalbar', 'sehari-di-pontianak']
    },
    en: {
      title: 'Kadriyah Palace from Supadio Airport',
      description:
        'Visiting Kadriyah Palace Pontianak from Supadio: a historic palace. Verify hours and access through official sources before going.',
      h1: 'Kadriyah Palace from Supadio',
      intro:
        'Kadriyah Palace is a historic palace in Pontianak with cultural value from the Pontianak Sultanate. From Supadio, the trip to the city centre needs transport; match it to your flight time.',
      sections: [
        {
          id: 'place',
          heading: 'About the place',
          body:
            'Kadriyah Palace is a historic building from the Pontianak Sultanate. Verify visit status, hours, and access through local official sources because rules can change.'
        },
        {
          id: 'route',
          heading: 'Route from the airport',
          body:
            'The palace is in central Pontianak, about 17 km from the airport. Travel time is usually 25–45 minutes depending on traffic.'
        },
        {
          id: 'tips',
          heading: 'Visit tips',
          body:
            'Good for a cultural stop if you have free time. Verify opening hours and dress rules via a map or official source: ' +
            G('Keraton Kadriyah Pontianak') +
            '.'
        }
      ],
      faq: [
        {
          q: 'Can Kadriyah Palace be visited?',
          a: 'Yes as a historic site, but verify hours and rules through official sources because they can change.'
        },
        {
          q: 'How far from the airport?',
          a: 'In central Pontianak, about 17 km; travel time 25–45 minutes depending on traffic.'
        }
      ],
      related: ['tugu-khatulistiwa', 'museum-kalbar', 'sehari-di-pontianak']
    }
  },
  {
    slug: 'museum-kalbar',
    group: 'wisata',
    priority: 3,
    id: {
      title: 'Museum Kalimantan Barat dari Bandara Supadio',
      description:
        'Wisata Museum Kalimantan Barat dari Supadio: koleksi budaya daerah. Verifikasi jam dan akses melalui sumber resmi sebelum pergi.',
      h1: 'Museum Kalimantan Barat dari Supadio',
      intro:
        'Museum Kalimantan Barat menyimpan koleksi budaya dan sejarah daerah. Dari Supadio, perjalanan ke museum di Pontianak membutuhkan transportasi; sesuaikan dengan waktu penerbangan.',
      sections: [
        {
          id: 'objek',
          heading: 'Tentang objek',
          body:
            'Museum ini menghimpun koleksi budaya dan sejarah Kalimantan Barat. Verifikasi jam buka, tiket, dan akses melalui sumber resmi karena aturan dapat berubah.'
        },
        {
          id: 'rute',
          heading: 'Rute dari bandara',
          body:
            'Museum berada di Pontianak, sekitar 17 km dari bandara. Waktu tempuh umumnya 25–45 menit tergantung lalu lintas.'
        },
        {
          id: 'tips',
          heading: 'Tips kunjungan',
          body:
            'Cocok untuk singgah edukasi jika waktu luang cukup. Verifikasi melalui peta atau sumber resmi: ' +
            G('Museum Kalimantan Barat Pontianak') +
            '.'
        }
      ],
      faq: [
        {
          q: 'Apakah museum buka setiap hari?',
          a: 'Verifikasi jam buka melalui sumber resmi; aturan tiket dan hari kunjungan dapat berubah.'
        },
        {
          q: 'Berapa jauh dari bandara?',
          a: 'Di Pontianak, sekitar 17 km; waktu tempuh 25–45 menit tergantung lalu lintas.'
        }
      ],
      related: ['keraton-kadriyah', 'tugu-khatulistiwa', 'sehari-di-pontianak']
    },
    en: {
      title: 'West Kalimantan Museum from Supadio Airport',
      description:
        'Visiting West Kalimantan Museum from Supadio: regional culture collection. Verify hours and access through official sources before going.',
      h1: 'West Kalimantan Museum from Supadio',
      intro:
        'The West Kalimantan Museum holds collections of regional culture and history. From Supadio, the trip to the museum in Pontianak needs transport; match it to your flight time.',
      sections: [
        {
          id: 'place',
          heading: 'About the place',
          body:
            'This museum gathers collections of West Kalimantan culture and history. Verify opening hours, tickets, and access through official sources because rules can change.'
        },
        {
          id: 'route',
          heading: 'Route from the airport',
          body:
            'The museum is in Pontianak, about 17 km from the airport. Travel time is usually 25–45 minutes depending on traffic.'
        },
        {
          id: 'tips',
          heading: 'Visit tips',
          body:
            'Good for an educational stop if you have free time. Verify via a map or official source: ' +
            G('Museum Kalimantan Barat Pontianak') +
            '.'
        }
      ],
      faq: [
        {
          q: 'Is the museum open every day?',
          a: 'Verify opening hours through official sources; ticket and visiting-day rules can change.'
        },
        {
          q: 'How far from the airport?',
          a: 'In Pontianak, about 17 km; travel time 25–45 minutes depending on traffic.'
        }
      ],
      related: ['keraton-kadriyah', 'tugu-khatulistiwa', 'sehari-di-pontianak']
    }
  },
  {
    slug: 'kapuas-waterfront',
    group: 'wisata',
    priority: 3,
    id: {
      title: 'Kapuas Waterfront dari Bandara Supadio',
      description:
        'Wisata tepi Sungai Kapuas Pontianak dari Supadio: area tepi sungai. Verifikasi akses dan fasilitas melalui sumber resmi.',
      h1: 'Kapuas Waterfront dari Supadio',
      intro:
        'Pontianak berada di tepi Sungai Kapuas, sungai terpanjang di Indonesia. Area tepi sungai menawarkan suasana lokal; dari Supadio dibutuhkan transportasi ke pusat kota.',
      sections: [
        {
          id: 'objek',
          heading: 'Tentang area',
          body:
            'Tepi Sungai Kapuas menjadi bagian identitas Pontianak. Fasilitas tepi sungai bervariasi; verifikasi akses dan kondisi melalui sumber resmi setempat.'
        },
        {
          id: 'rute',
          heading: 'Rute dari bandara',
          body:
            'Area tepi sungai berada di Pontianak, sekitar 17 km dari bandara. Waktu tempuh umumnya 25–45 menit tergantung lalu lintas.'
        },
        {
          id: 'tips',
          heading: 'Tips kunjungan',
          body:
            'Cocok untuk santai di sore hari jika waktu luang cukup. Verifikasi melalui peta atau sumber resmi: ' +
            G('Pontianak Kapuas Riverfront') +
            '.'
        }
      ],
      faq: [
        {
          q: 'Apa menarik di tepi Kapuas?',
          a: 'Suasana sungai dan identitas lokal Pontianak; fasilitas bervariasi, verifikasi melalui sumber resmi.'
        },
        {
          q: 'Berapa jauh dari bandara?',
          a: 'Di Pontianak, sekitar 17 km; waktu tempuh 25–45 menit tergantung lalu lintas.'
        }
      ],
      related: ['sehari-di-pontianak', 'pusat-perbelanjaan', 'tugu-khatulistiwa']
    },
    en: {
      title: 'Kapuas Waterfront from Supadio Airport',
      description:
        'Visiting the Kapuas Riverfront Pontianak from Supadio: a riverside area. Verify access and facilities through official sources.',
      h1: 'Kapuas Waterfront from Supadio',
      intro:
        'Pontianak lies on the Kapuas River, the longest river in Indonesia. The riverside area offers local atmosphere; from Supadio it takes transport into the city centre.',
      sections: [
        {
          id: 'place',
          heading: 'About the area',
          body:
            'The Kapuas riverbank is part of Pontianak identity. Riverside facilities vary; verify access and condition through local official sources.'
        },
        {
          id: 'route',
          heading: 'Route from the airport',
          body:
            'The riverside area is in Pontianak, about 17 km from the airport. Travel time is usually 25–45 minutes depending on traffic.'
        },
        {
          id: 'tips',
          heading: 'Visit tips',
          body:
            'Good for a relaxed evening if you have free time. Verify via a map or official source: ' +
            G('Pontianak Kapuas Riverfront') +
            '.'
        }
      ],
      faq: [
        {
          q: 'What is interesting at the Kapuas bank?',
          a: 'The river atmosphere and Pontianak local identity; facilities vary, verify through official sources.'
        },
        {
          q: 'How far from the airport?',
          a: 'In Pontianak, about 17 km; travel time 25–45 minutes depending on traffic.'
        }
      ],
      related: ['sehari-di-pontianak', 'pusat-perbelanjaan', 'tugu-khatulistiwa']
    }
  },
  {
    slug: 'pusat-perbelanjaan',
    group: 'wisata',
    priority: 3,
    id: {
      title: 'Pusat Perbelanjaan Pontianak dari Supadio',
      description:
        'Tempat belanja dan istirahat di Pontianak dari Supadio: pilih berdasarkan waktu. Verifikasi jam dan lokasi melalui peta.',
      h1: 'Pusat Perbelanjaan Pontianak',
      intro:
        'Pontianak memiliki pusat perbelanjaan dan area istirahat. Dari Supadio, perjalanan ke kota membutuhkan waktu; sesuaikan dengan jadwal penerbangan agar tidak terlambat.',
      sections: [
        {
          id: 'pilihan',
          heading: 'Pilihan belanja',
          body:
            'Pusat perbelanjaan tersebar di Pontianak. Verifikasi nama, lokasi, dan jam buka melalui peta karena tenant dan jam dapat berubah.'
        },
        {
          id: 'rute',
          heading: 'Rute dari bandara',
          body:
            'Lokasi berada sekitar 17 km dari bandara, waktu tempuh 25–45 menit tergantung lalu lintas. Hitung waktu pulang ke bandara.'
        },
        {
          id: 'tips',
          heading: 'Tips',
          body:
            'Untuk penerbangan mendatang, jangan berbelanja terlalu dekat jam keberangkatan. Simpan alamat dan rencanakan transportasi.'
        }
      ],
      faq: [
        {
          q: 'Di mana pusat belanja di Pontianak?',
          a: 'Terdapat beberapa di kota; verifikasi nama dan jam melalui peta karena dapat berubah.'
        },
        {
          q: 'Layakkah sebelum penerbangan?',
          a: 'Jika waktu luang cukup dan Anda kembali tepat waktu. Jangan terlalu dekat jam terbang.'
        }
      ],
      related: ['kapuas-waterfront', 'sehari-di-pontianak', 'restoran-terdekat']
    },
    en: {
      title: 'Pontianak Shopping & Rest Stops from Supadio',
      description:
        'Shopping and rest places in Pontianak from Supadio: choose by time. Verify hours and location via a map.',
      h1: 'Pontianak Shopping & Rest Stops',
      intro:
        'Pontianak has shopping centres and rest areas. From Supadio, the trip to the city takes time; match it to your flight schedule so you are not late.',
      sections: [
        {
          id: 'options',
          heading: 'Shopping options',
          body:
            'Shopping centres are spread across Pontianak. Verify the name, location, and opening hours via a map because tenants and hours can change.'
        },
        {
          id: 'route',
          heading: 'Route from the airport',
          body:
            'Locations are about 17 km from the airport, travel time 25–45 minutes depending on traffic. Count the return time to the airport.'
        },
        {
          id: 'tips',
          heading: 'Tips',
          body:
            'For an upcoming flight, do not shop too close to departure. Keep the address and plan transport.'
        }
      ],
      faq: [
        {
          q: 'Where are shopping centres in Pontianak?',
          a: 'Several are in the city; verify name and hours via a map because they can change.'
        },
        {
          q: 'Worth it before a flight?',
          a: 'If you have enough free time and return on time. Not too close to departure.'
        }
      ],
      related: ['kapuas-waterfront', 'sehari-di-pontianak', 'restoran-terdekat']
    }
  },

  // ===================== RENCANA =====================
  {
    slug: 'wisata-setengah-hari',
    group: 'rencana',
    priority: 2,
    id: {
      title: 'Singgah Setengah Hari di Pontianak dari Supadio',
      description:
        'Rencana singgah setengah hari di Pontianak: cocok untuk waktu luang antar penerbangan. Sisakan waktu aman untuk kembali ke bandara.',
      h1: 'Singgah Setengah Hari di Pontianak',
      intro:
        'Jika Anda punya waktu luang beberapa jam antar penerbangan, Pontianak bisa dijelajahi singkat. Pilih satu atau dua objek dekat dan selalu sisakan waktu aman untuk kembali ke Supadio.',
      sections: [
        {
          id: 'cocok',
          heading: 'Kapan cocok',
          body:
            'Cocok untuk masa tunggu panjang antar penerbangan, bukan untuk waktu hanya satu atau dua jam. Hitung total transportasi pulang-pergi plus antrean bandara.'
        },
        {
          id: 'rilis',
          heading: 'Contoh alur',
          body:
            'Keluar bandara, ke objek terdekat di kota (sekitar 25–45 menit), singgah singkat, lalu kembali minimal 2–3 jam sebelum penerbangan berikutnya.'
        },
        {
          id: 'aman',
          heading: 'Waktu aman',
          body:
            'Jangan jadwalkan objek terlalu dekat jam keberangkatan. Cuaca dan lalu lintas Kalimantan Barat dapat memperlambat perjalanan; berikan cadangan besar.'
        }
      ],
      faq: [
        {
          q: 'Berapa lama waktu yang aman?',
          a: 'Minimal sisakan 2–3 jam di bandara sebelum penerbangan berikutnya, ditambah waktu pulang-pergi kota.'
        },
        {
          q: 'Objek apa yang dekat?',
          a: 'Objek di pusat Pontianak seperti tepi Kapuas atau pusat kota; pilih satu saja agar tidak terburu-buru.'
        }
      ],
      related: ['sehari-di-pontianak', 'tugu-khatulistiwa', 'kapuas-waterfront']
    },
    en: {
      title: 'Half-Day Layover in Pontianak from Supadio',
      description:
        'A half-day Pontianak stopover plan: good for free time between flights. Keep a safe buffer to return to the airport.',
      h1: 'Half-Day Layover in Pontianak',
      intro:
        'If you have several free hours between flights, Pontianak can be explored briefly. Pick one or two nearby sights and always keep a safe buffer to return to Supadio.',
      sections: [
        {
          id: 'when',
          heading: 'When it fits',
          body:
            'Good for a long wait between flights, not for only one or two hours. Count total round-trip transport plus airport queues.'
        },
        {
          id: 'flow',
          heading: 'Example flow',
          body:
            'Leave the airport, go to the nearest city sight (about 25–45 minutes), a short stop, then return at least 2–3 hours before the next flight.'
        },
        {
          id: 'safe',
          heading: 'Safe buffer',
          body:
            'Do not schedule a sight too close to departure. Weather and West Kalimantan traffic can slow the trip; give a large buffer.'
        }
      ],
      faq: [
        {
          q: 'How much safe time is needed?',
          a: 'Keep at least 2–3 hours at the airport before the next flight, plus round-trip city time.'
        },
        {
          q: 'Which sights are close?',
          a: 'Sights in central Pontianak like the Kapuas bank or city centre; pick just one to avoid rushing.'
        }
      ],
      related: ['sehari-di-pontianak', 'tugu-khatulistiwa', 'kapuas-waterfront']
    }
  },
  {
    slug: 'sehari-di-pontianak',
    group: 'rencana',
    priority: 2,
    id: {
      title: 'Sehari di Pontianak dari Bandara Supadio',
      description:
        'Rencana satu hari di Pontianak: gabungan budaya, sungai, dan kuliner. Sisakan waktu aman untuk kembali ke bandara.',
      h1: 'Sehari di Pontianak',
      intro:
        'Jika menginap di Pontianak atau punya waktu penuh sebelum penerbangan esok, satu hari di kota bisa mencakup budaya, tepi sungai, dan kuliner. Selalu rencanakan kembali ke Supadio dengan cadangan.',
      sections: [
        {
          id: 'alur',
          heading: 'Contoh alur',
          body:
            'Pagi singgah objek budaya, siang kuliner lokal, sore di tepi Kapuas. Sesuaikan urutan dengan jam buka masing-masing yang diverifikasi.'
        },
        {
          id: 'transport',
          heading: 'Transportasi',
          body:
            'Gunakan taksi, aplikasi, atau sewa mobil untuk berpindah antar objek. Jarak antar objek di kota umumnya dekat, tetapi waktu tempuh bervariasi.'
        },
        {
          id: 'aman',
          heading: 'Waktu aman ke bandara',
          body:
            'Tetapkan batas waktu kembali ke bandara minimal beberapa jam sebelum keberangkatan berikutnya. Jangan biarkan aktivitas melewati batas tersebut.'
        }
      ],
      faq: [
        {
          q: 'Apakah sehari cukup untuk Pontianak?',
          a: 'Cukup untuk gambaran singkat budaya, sungai, dan kuliner. Sesuaikan dengan waktu penerbangan Anda.'
        },
        {
          q: 'Kapan harus kembali ke bandara?',
          a: 'Minimal beberapa jam sebelum keberangkatan berikutnya, ditambah waktu ke bandara dan antrean.'
        }
      ],
      related: ['wisata-setengah-hari', 'tugu-khatulistiwa', 'makanan-lokal']
    },
    en: {
      title: 'A Day in Pontianak from Supadio Airport',
      description:
        'One-day Pontianak plan: culture, river, and food combined. Keep a safe buffer to return to the airport.',
      h1: 'A Day in Pontianak',
      intro:
        'If you stay in Pontianak or have a full day before tomorrow’s flight, a day in the city can cover culture, the riverside, and food. Always plan the return to Supadio with a buffer.',
      sections: [
        {
          id: 'flow',
          heading: 'Example flow',
          body:
            'Morning at a cultural site, midday local food, evening at the Kapuas bank. Adjust the order to the verified opening hours of each.'
        },
        {
          id: 'transport',
          heading: 'Transport',
          body:
            'Use a taxi, ride-hailing, or rental car to move between sights. Distances between city sights are generally short, but travel time varies.'
        },
        {
          id: 'safe',
          heading: 'Safe time to the airport',
          body:
            'Set a deadline to return to the airport at least a few hours before the next departure. Do not let activities pass that limit.'
        }
      ],
      faq: [
        {
          q: 'Is one day enough for Pontianak?',
          a: 'Enough for a brief view of culture, river, and food. Adjust to your flight time.'
        },
        {
          q: 'When must I return to the airport?',
          a: 'At least a few hours before the next departure, plus travel time to the airport and queues.'
        }
      ],
      related: ['wisata-setengah-hari', 'tugu-khatulistiwa', 'makanan-lokal']
    }
  },
  {
    slug: 'rencana-hujan',
    group: 'rencana',
    priority: 3,
    id: {
      title: 'Rencana Saat Hujan di Pontianak dari Supadio',
      description:
        'Alternatif rencana jika hujan: ruang tertutup, kuliner, dan istirahat. Sesuaikan dengan waktu penerbangan.',
      h1: 'Rencana Saat Hujan',
      intro:
        'Pontianak memiliki curah hujan tinggi di beberapa bulan. Jika hujan, pilih aktivitas ruang tertutup atau kuliner di kota, dan selalu sisakan waktu aman ke bandara.',
      sections: [
        {
          id: 'dalam',
          heading: 'Aktivitas ruang tertutup',
          body:
            'Pusat perbelanjaan dan kedai kopi di Pontianak memberi opsi berteduh. Verifikasi jam dan lokasi melalui peta karena dapat berubah.'
        },
        {
          id: 'kuliner',
          heading: 'Kuliner sebagai alternatif',
          body:
            'Makanan lokal Pontianak cocok dinikmati saat hujan. Pilih tempat dengan akses transportasi mudah agar kembali ke bandara tetap lancar.'
        },
        {
          id: 'aman',
          heading: 'Waktu aman',
          body:
            'Hujan dapat memperlambat lalu lintas. Berikan cadangan waktu lebih besar untuk kembali ke Supadio sebelum penerbangan.'
        }
      ],
      faq: [
        {
          q: 'Ke mana jika hujan saat singgah?',
          a: 'Pusat perbelanjaan atau kedai kopi di kota; verifikasi jam dan lokasi melalui peta.'
        },
        {
          q: 'Apakah hujan mengganggu ke bandara?',
          a: 'Dapat memperlambat lalu lintas; berikan cadangan waktu lebih besar.'
        }
      ],
      related: ['pusat-perbelanjaan', 'kafe-terdekat', 'makanan-lokal']
    },
    en: {
      title: 'Rainy-Day Plan near Supadio Airport',
      description:
        'Alternative plan if it rains: indoor spaces, food, and rest. Match it to your flight time.',
      h1: 'Rainy-Day Plan',
      intro:
        'Pontianak has high rainfall in some months. If it rains, choose indoor activities or city food, and always keep a safe buffer to the airport.',
      sections: [
        {
          id: 'indoor',
          heading: 'Indoor activities',
          body:
            'Shopping centres and coffee shops in Pontianak give shelter options. Verify hours and location via a map because they can change.'
        },
        {
          id: 'food',
          heading: 'Food as an alternative',
          body:
            'Pontianak local food is good in the rain. Pick a place with easy transport access so the return to the airport stays smooth.'
        },
        {
          id: 'safe',
          heading: 'Safe buffer',
          body:
            'Rain can slow traffic. Give a larger time buffer to return to Supadio before your flight.'
        }
      ],
      faq: [
        {
          q: 'Where to go if it rains during a stop?',
          a: 'Shopping centres or coffee shops in the city; verify hours and location via a map.'
        },
        {
          q: 'Does rain affect the airport trip?',
          a: 'It can slow traffic; give a larger time buffer.'
        }
      ],
      related: ['pusat-perbelanjaan', 'kafe-terdekat', 'makanan-lokal']
    }
  },

  // ===================== TRANSPORT TO OTHER CITIES =====================
  {
    slug: 'ke-singkawang',
    group: 'transportasi',
    priority: 3,
    id: {
      title: 'Transportasi ke Singkawang dari Bandara Supadio',
      description:
        'Dari Supadio ke Singkawang: jarak jauh sekitar 140+ km, butuh transportasi darat yang direncanakan. Verifikasi rute dan waktu.',
      h1: 'Dari Supadio ke Singkawang',
      intro:
        'Singkawang berada sekitar 140 km lebih ke utara dari Pontianak. Dari Supadio, perjalanan membutuhkan transportasi darat yang direncanakan matang, bukan sekadar singgah bandara.',
      sections: [
        {
          id: 'jarak',
          heading: 'Jarak dan waktu',
          body:
            'Jarak Supadio ke Singkawang umumnya lebih dari 140 km via jalan darat, dengan waktu tempuh beberapa jam tergantung rute dan lalu lintas. Perkiraan ini bukan jaminan waktu tetap.'
        },
        {
          id: 'moda',
          heading: 'Moda transportasi',
          body:
            'Opsi meliputi bus antarkota, travel, atau sewa mobil. Konfirmasikan rute, jadwal, dan tarif melalui operator resmi; panduan ini tidak menetapkan jadwal pasti.'
        },
        {
          id: 'tips',
          heading: 'Tips',
          body:
            'Rencanakan menginap di Singkawang jika tiba larut malam. Jangan menganggap ada transportasi langsung setiap saat dari bandara.'
        }
      ],
      faq: [
        {
          q: 'Berapa jauh Singkawang dari bandara?',
          a: 'Lebih dari 140 km via darat, beberapa jam perjalanan tergantung rute dan lalu lintas.'
        },
        {
          q: 'Apakah ada transportasi langsung?',
          a: 'Opsi bus, travel, atau sewa mobil tersedia; konfirmasikan jadwal dan tarif ke operator resmi.'
        }
      ],
      related: ['sewa-mobil', 'dari-pontianak', 'ke-mempawah']
    },
    en: {
      title: 'Transport to Singkawang from Supadio Airport',
      description:
        'From Supadio to Singkawang: a long distance of about 140+ km needs planned ground transport. Verify route and time.',
      h1: 'From Supadio to Singkawang',
      intro:
        'Singkawang is about 140 km or more north of Pontianak. From Supadio, the trip needs well-planned ground transport, not just an airport stop.',
      sections: [
        {
          id: 'distance',
          heading: 'Distance and time',
          body:
            'The distance from Supadio to Singkawang is generally over 140 km by road, with a trip of several hours depending on route and traffic. This estimate is not a guaranteed fixed time.'
        },
        {
          id: 'modes',
          heading: 'Transport modes',
          body:
            'Options include intercity bus, travel service, or rental car. Confirm route, schedule, and fare through the official operator; this guide sets no fixed schedule.'
        },
        {
          id: 'tips',
          heading: 'Tips',
          body:
            'Plan to stay in Singkawang if arriving late at night. Do not assume direct transport is available at all hours from the airport.'
        }
      ],
      faq: [
        {
          q: 'How far is Singkawang from the airport?',
          a: 'Over 140 km by road, several hours depending on route and traffic.'
        },
        {
          q: 'Is there direct transport?',
          a: 'Bus, travel service, or rental car are available; confirm schedule and fare with the official operator.'
        }
      ],
      related: ['sewa-mobil', 'dari-pontianak', 'ke-mempawah']
    }
  },
  {
    slug: 'ke-mempawah',
    group: 'transportasi',
    priority: 3,
    id: {
      title: 'Transportasi ke Mempawah dari Bandara Supadio',
      description:
        'Dari Supadio ke Mempawah: kota di utara Pontianak, jarak puluhan km. Verifikasi rute dan transportasi melalui operator.',
      h1: 'Dari Supadio ke Mempawah',
      intro:
        'Mempawah (Kubu Raya/Mempawah) berada di utara Pontianak, beberapa puluh kilometer dari bandara. Perjalanan butuh transportasi darat yang dikonfirmasikan.',
      sections: [
        {
          id: 'jarak',
          heading: 'Jarak dan waktu',
          body:
            'Mempawah berjarak beberapa puluh km dari bandara tergantung titik tujuan persis; waktu tempuh bervariasi dengan lalu lintas. Perkiraan bukan jaminan waktu tetap.'
        },
        {
          id: 'moda',
          heading: 'Moda transportasi',
          body:
            'Opsi meliputi bus, travel, atau sewa mobil. Konfirmasikan rute, jadwal, dan tarif melalui operator resmi; panduan ini tidak menetapkan jadwal pasti.'
        },
        {
          id: 'tips',
          heading: 'Tips',
          body:
            'Gunakan peta untuk menentukan titik tujuan persis di Mempawah dan waktu ke bandara sebagai cadangan.'
        }
      ],
      faq: [
        {
          q: 'Berapa jauh Mempawah dari bandara?',
          a: 'Beberapa puluh km tergantung titik tujuan; waktu tempuh bervariasi dengan lalu lintas.'
        },
        {
          q: 'Apa transportasinya?',
          a: 'Bus, travel, atau sewa mobil; konfirmasikan ke operator resmi.'
        }
      ],
      related: ['sewa-mobil', 'ke-singkawang', 'dari-pontianak']
    },
    en: {
      title: 'Transport to Mempawah from Supadio Airport',
      description:
        'From Supadio to Mempawah: a town north of Pontianak, tens of km away. Verify route and transport through the operator.',
      h1: 'From Supadio to Mempawah',
      intro:
        'Mempawah (Kubu Raya/Mempawah) is north of Pontianak, tens of kilometres from the airport. The trip needs confirmed ground transport.',
      sections: [
        {
          id: 'distance',
          heading: 'Distance and time',
          body:
            'Mempawah is tens of km from the airport depending on the exact destination; travel time varies with traffic. The estimate is not a guaranteed fixed time.'
        },
        {
          id: 'modes',
          heading: 'Transport modes',
          body:
            'Options include bus, travel service, or rental car. Confirm route, schedule, and fare through the official operator; this guide sets no fixed schedule.'
        },
        {
          id: 'tips',
          heading: 'Tips',
          body:
            'Use a map to set the exact destination point in Mempawah and keep airport time as a buffer.'
        }
      ],
      faq: [
        {
          q: 'How far is Mempawah from the airport?',
          a: 'Tens of km depending on the destination point; travel time varies with traffic.'
        },
        {
          q: 'What transport is there?',
          a: 'Bus, travel service, or rental car; confirm with the official operator.'
        }
      ],
      related: ['sewa-mobil', 'ke-singkawang', 'dari-pontianak']
    }
  }
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function topicsByGroup(locale: Locale): Record<TopicGroup, Topic[]> {
  const out = {} as Record<TopicGroup, Topic[]>;
  for (const g of TOPIC_GROUP_ORDER) out[g] = [];
  for (const t of TOPICS) out[t.group].push(t);
  return out;
}

export const AIRPORT_MAP = MAP;
export const GMAPS = G;

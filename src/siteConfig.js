// ╔══════════════════════════════════════════════════════════════════╗
// ║  STROOD MUSLIM ASSOCIATION — SITE CONFIGURATION                ║
// ║                                                                ║
// ║  Edit this file to update all dynamic content on the website.  ║
// ║  No need to touch any component code.                          ║
// ╚══════════════════════════════════════════════════════════════════╝

export const siteConfig = {

  // ─── Organisation ─────────────────────────────────────────────────
  name: "Strood Muslim Association",
  shortName: "SMA",
  established: 2026,
  tagline: "A Place of Peace in the Heart of Strood",
  subtitle:
    "Join our growing community for weekly Jummu'ah prayer and special occasions",

  // ─── Jummu'ah Prayer ──────────────────────────────────────────────
  // UPDATE THIS SECTION EVERY WEEK
  jummah: {
    date: "Every Friday",
    startTime: "1:00 PM",
    jamaatTime: "1:30 PM",
    imam: "Ustadh Ismail Zubair",
  },

  // ─── Eid Prayer (set to null to hide) ────────────────────────────
  eid: null,

  dailyPrayers: {
    city: "Strood",
    country: "United Kingdom",
    method: 15, // 15 = Moonsighting Committee. See https://aladhan.com/prayer-times-api#GetCalendarByCitys for methods
  },

  // ─── Location ────────────────────────────────────────────────────
  location: {
    venueName: "Frindsbury Extra Memorial Hall",
    addressLine1: "Holly Road, Wainscott",
    addressLine2: "Rochester, Kent",
    postcode: "ME2 4LG",
    mapsQuery:
      "Frindsbury+Extra+Memorial+Hall,+Holly+Road,+Wainscott,+Rochester,+Kent,+ME2+4LG",
  },

  // ─── Contact ─────────────────────────────────────────────────────
  contact: {
    whatsapp: { display: "07535 140301", raw: "07535140301" },
    phone: { display: "07497 212535", raw: "07497212535" },
    whatsappGroup: "https://chat.whatsapp.com/EmHqWvQqnFwJsaVZIVOWCQ",
  },

  // ─── Notices ─────────────────────────────────────────────────────
  // Add or remove notices as needed. Each needs a unique id.
  notices: [
    {
      id: "parking",
      icon: "parking",
      title: "Parking Notice",
      body: "We kindly ask all attendees to park with consideration for our neighbours. Please avoid blocking driveways and access roads so we can maintain the warm relationship we value with the local community.",
    },
    {
      id: "wudhu",
      icon: "wudhu",
      title: "Wudhu Reminder",
      body: "Please note that wudhu facilities are not currently available at the hall. We ask that you kindly arrive in a state of purification so you can join the prayer comfortably.",
    },
  ],

  // ─── About Section ───────────────────────────────────────────────
  about: {
    heading: "Our Beginning",
    paragraphs: [
      "Founded in May 2026, the Strood Muslim Association was born from a simple yet powerful idea — that the Muslim community in Strood and the surrounding Medway towns deserves a welcoming, accessible space for congregational worship.",
      "What began as a small gathering for Jummu'ah prayer has quickly grown into a vibrant community. Every Friday, we come together at Frindsbury Extra Memorial Hall to pray, reflect, and strengthen our bonds as neighbours, families, and friends.",
      "We are more than a prayer service — we are a community taking its first steps together, guided by the needs and aspirations of every member who walks through our doors.",
    ],
  },

  // ─── Vision Pillars ──────────────────────────────────────────────
  vision: {
    heading: "Our Vision",
    subtitle: "Three pillars that guide everything we do",
    pillars: [
      {
        icon: "mosque",
        title: "Rooted in Worship",
        description:
          "Our foundation is the weekly Jummu'ah prayer and special occasions such as Eid Salah. As we grow, our services will expand to meet the spiritual needs of our community.",
      },
      {
        icon: "community",
        title: "Guided by Community",
        description:
          "We don't believe in a one-size-fits-all approach. Our direction is shaped by you — the community. As we listen and learn, we'll introduce the services that matter most.",
      },
      {
        icon: "growth",
        title: "Growing Together",
        description:
          "From humble beginnings to a thriving association, our journey is just starting. Every new face, every shared prayer, and every act of kindness adds a new chapter to our story.",
      },
    ],
  },

  // ─── Footer ──────────────────────────────────────────────────────
  footer: {
    closingMessage: "We look forward to welcoming you this Friday",
    verse: {
      arabic: "إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِّلْعَالَمِينَ",
      translation:
        "Indeed, the first House of worship established for mankind was that at Bakkah — blessed and a guidance for the worlds.",
      reference: "Qur'an 3:96",
    },
  },
};

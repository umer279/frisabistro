export type EventItem = {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  isRecurring?: boolean;
  featured?: boolean;
};

export const events: EventItem[] = [
  {
    slug: "bossaproject-quartet-live",
    title: "BOSSAPROJECT QUARTET live @ FRISÀ BISTRÒ",
    date: "2026-05-29",
    time: "21:00",
    location: "Frisà Bistrò",
    description:
      "Serata jazz con il Bossaproject Quartet: un viaggio tra bossa nova, swing e improvvisazione nel cuore di Milano Isola.",
    image: "/images/event-1.jpg",
    imageAlt: "Bossaproject Quartet al Frisà Bistrò",
    featured: true,
  },
  {
    slug: "domenica-in-jazz",
    title: "Domenica in jazz",
    date: "2026-05-31",
    time: "12:00",
    location: "Frisà Bistrò",
    description:
      "Appuntamento ricorrente con il miglior jazz domenicale: brunch, cucina pugliese e musica dal vivo.",
    image: "/images/event-2.jpg",
    imageAlt: "Domenica in jazz al Frisà Bistrò",
    isRecurring: true,
    featured: true,
  },
  {
    slug: "ohe-semm-chi",
    title: "I...Ohè Semm Chi!... – Storie e canzoni di malà e ligera",
    date: "2026-06-05",
    time: "21:00",
    location: "Frisà Bistrò",
    description:
      "Uno spettacolo di musica e racconti che attraversa le tradizioni salentine con malinconia e leggerezza.",
    image: "/images/event-3.jpg",
    imageAlt: "Ohè Semm Chi al Frisà Bistrò",
    featured: true,
  },
  {
    slug: "frisa-jazz-gang-alfredo-ferrario",
    title: "Frisà Jazz Gang presenta Alfredo Ferrario",
    date: "2026-05-30",
    time: "21:00",
    location: "Frisà Bistrò",
    description:
      "La Frisà Jazz Gang ospita Alfredo Ferrario per una serata di standard jazz e improvvisazione.",
    image: "/images/event-2.jpg",
    imageAlt: "Frisà Jazz Gang con Alfredo Ferrario",
  },
  {
    slug: "stardust-jazz-4et",
    title: "Stardust Jazz 4et – Live al Frisà Bistrò",
    date: "2026-06-19",
    time: "21:00",
    location: "Frisà Bistrò",
    description:
      "Il quartetto Stardust Jazz porta sul palco del bistrò i grandi classici del jazz americano.",
    image: "/images/event-1.jpg",
    imageAlt: "Stardust Jazz 4et live",
  },
  {
    slug: "federica-zeta-love-lounge",
    title: "FEDERICA ZETA Love Lounge Vibes @ Frisà Bistrò",
    date: "2026-06-25",
    time: "21:00",
    location: "Frisà Bistrò",
    description:
      "Serata lounge con Federica Zeta: voci calde, atmosfera intima e cucina pugliese.",
    image: "/images/event-3.jpg",
    imageAlt: "Federica Zeta Love Lounge Vibes",
  },
  {
    slug: "jazz-al-capolinea",
    title: "Jazz al Capolinea “Frisà Bistrò” Live",
    date: "2026-05-09",
    time: "21:00",
    location: "Frisà Bistrò",
    description:
      "Serata speciale Jazz al Capolinea con ospiti del panorama jazz milanese.",
    image: "/images/event-2.jpg",
    imageAlt: "Jazz al Capolinea al Frisà Bistrò",
  },
  {
    slug: "mela-manouche",
    title: "MELA MANOUCHE – Live al Frisà Bistrò",
    date: "2026-05-07",
    time: "21:00",
    location: "Frisà Bistrò",
    description:
      "Gypsy jazz e manouche con Mela Manouche: energia, virtuosismo e atmosfera parigina.",
    image: "/images/event-1.jpg",
    imageAlt: "Mela Manouche live",
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(limit?: number): EventItem[] {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function formatEventDate(date: string, options?: Intl.DateTimeFormatOptions): string {
  return new Date(date + "T12:00:00").toLocaleDateString("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  });
}

export function formatEventDateShort(date: string): string {
  return new Date(date + "T12:00:00").toLocaleDateString("it-IT", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

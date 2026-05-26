export const site = {
  name: "Frisà Bistrò",
  tagline: "Cucina salentina · Jazz live · Milano Isola",
  url: "https://www.frisabistro.com",
  logo: "/images/logo.png",
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/about.jpg",
  interiorImage: "/images/interior.jpg",
  defaultOgImage: "/images/hero.jpg",
  description:
    "Ristorante pugliese nel cuore di Milano Isola: frise, orecchiette fatte in casa, vino e musica jazz live ogni settimana.",
  cuisine: "Cucina pugliese e salentina",
} as const;

export const contact = {
  address: "Via Alserio 3",
  zone: "Zona Isola",
  city: "Milano",
  postalCode: "20159",
  fullAddress: "Via Alserio 3, 20159 Milano (MI)",
  phone: "02 4944 9740",
  phoneHref: "tel:+390249449740",
  email: "info@frisabistro.com",
  emailHref: "mailto:info@frisabistro.com",
  instagram: "https://www.instagram.com/frisabistro",
  facebook: "https://www.facebook.com/FrisaBistro",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.0!2d9.1894!3d45.492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786ecb8c8c8c8c9%3A0x0!2sVia%20Alserio%2C%203%2C%2020159%20Milano%20MI!5e0!3m2!1sit!2sit!4v1",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Via+Alserio+3,+20159+Milano",
} as const;

export const hours = {
  summary: "Martedì – Domenica",
  detail: "Da colazione al dopocena",
  days: [
    { day: "Lunedì", open: false },
    { day: "Martedì", open: true, note: "Colazione – dopocena" },
    { day: "Mercoledì", open: true, note: "Colazione – dopocena" },
    { day: "Giovedì", open: true, note: "Colazione – dopocena" },
    { day: "Venerdì", open: true, note: "Colazione – dopocena" },
    { day: "Sabato", open: true, note: "Colazione – dopocena" },
    { day: "Domenica", open: true, note: "Colazione – dopocena" },
  ],
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/eventi", label: "Eventi" },
  { to: "/contatti", label: "Contatti" },
] as const;

export const hero = {
  title: "Cena pugliese & musica live",
  subtitle: "a Milano Isola",
  tagline: "Frise, vino e musica live nel cuore di Milano",
  ctaBook: "Prenota ora",
  ctaEvents: "Eventi live",
} as const;

export const pillars = [
  {
    title: "Cucina salentina",
    subtitle: "Sapori autentici del Sud",
    image: "/images/pillar-cucina.png",
    alt: "Piatti della tradizione salentina al Frisà Bistrò",
  },
  {
    title: "Musica live",
    subtitle: "Eventi ogni settimana",
    image: "/images/pillar-musica.png",
    alt: "Serata jazz dal vivo al Frisà Bistrò",
  },
  {
    title: "Milano Isola",
    subtitle: "Atmosfera intima e vibrante",
    image: "/images/interior.jpg",
    alt: "Interno del ristorante Frisà Bistrò in zona Isola",
  },
] as const;

export const about = {
  title: "Chi siamo",
  paragraphs: [
    "Frisà Bistrò nasce da un'esperienza trentennale nel settore della ristorazione italiana. Situato in via Alserio 3, alle porte della zona Isola, uno dei punti di spicco della movida milanese.",
    "Il ristorante offre una grande varietà di piatti per soddisfare tutti i tipi di gusti. Dai famosi rustici alle orecchiette fatte in casa, dalla carne al pesce, passando dalle freschissime verdure ai nostri fritti, fino ad arrivare al rinomato pasticciotto salentino. Se vuoi gustare la famosa frisa, questo è il posto giusto.",
    "Prepariamo tutti i nostri piatti utilizzando solo materie fresche e di altissima qualità, adoperando ingredienti a km 0 per garantirvi sempre piatti genuini.",
  ],
} as const;

export const review = {
  author: "Davide",
  rating: 5,
  text: "Uno dei miei posti preferiti. Cibo ottimo e personale attento, sorridente e super efficiente. Ambiente molto carino e frequentato da musicisti quindi qualcuno suona sempre!! Super consigliato!!",
} as const;

export const footer = {
  cta: "Ti aspettiamo",
  copyright: `© ${new Date().getFullYear()} Frisà Bistrò — Tutti i diritti riservati`,
} as const;

export const seo = {
  home: {
    title: "Frisà Bistrò | Ristorante pugliese Milano Isola, Jazz Live",
    description:
      "Cucina salentina, frise e musica jazz live a Milano Isola. Osteria pugliese in Via Alserio 3. Prenota il tuo tavolo.",
  },
  menu: {
    title: "Menu osteria pugliese | Frisà Bistrò Milano",
    description:
      "Menu autentico pugliese: frise, orecchiette, primi di mare e terra, secondi e dolci salentini. Prezzi e specialità al Frisà Bistrò.",
  },
  events: {
    title: "Eventi musicali e jazz live | Frisà Bistrò Milano",
    description:
      "Scopri la programmazione di concerti jazz e musica dal vivo al Frisà Bistrò, locale con musica live a Milano Isola.",
  },
  book: {
    title: "Prenota un tavolo | Frisà Bistrò Milano Isola",
    description:
      "Prenota il tuo tavolo al Frisà Bistrò: cucina pugliese e serate con musica live in Via Alserio 3, Milano.",
  },
  contact: {
    title: "Contatti e orari | Frisà Bistrò Milano Isola",
    description:
      "Via Alserio 3, Milano Isola. Tel. 02 4944 9740. Orari, mappa e contatti del Frisà Bistrò.",
  },
  privacy: {
    title: "Informativa sulla privacy | Frisà Bistrò",
    description: "Informativa sul trattamento dei dati personali del sito Frisà Bistrò.",
  },
} as const;

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`;
}

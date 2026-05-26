import { Helmet } from "react-helmet-async";
import type { EventItem } from "../../data/events";
import { contact, hours, site } from "../../data/site";

export function RestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}${site.heroImage}`,
    telephone: "+390249449740",
    email: contact.email,
    servesCuisine: ["Pugliese", "Salentina", "Italiana"],
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressLocality: contact.city,
      postalCode: contact.postalCode,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.492,
      longitude: 9.1894,
    },
    openingHoursSpecification: hours.days
      .filter((d) => d.open)
      .map((d) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: d.day,
        opens: "08:00",
        closes: "24:00",
      })),
    sameAs: [contact.instagram, contact.facebook],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function EventJsonLd({ event }: { event: EventItem }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: event.title,
    description: event.description,
    startDate: event.time ? `${event.date}T${event.time}:00` : event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address,
        addressLocality: contact.city,
        postalCode: contact.postalCode,
        addressCountry: "IT",
      },
    },
    image: `${site.url}${event.image}`,
    organizer: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

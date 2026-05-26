import { EventCard } from "../components/events/EventCard";
import { PageHero } from "../components/layout/PageHero";
import { SeoHead } from "../components/layout/SeoHead";
import { events, getUpcomingEvents } from "../data/events";
import { seo, site } from "../data/site";

export function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = events
    .filter((e) => e.date < new Date().toISOString().slice(0, 10))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <SeoHead
        title={seo.events.title}
        description={seo.events.description}
        path="/eventi"
        image={site.interiorImage}
      />
      <PageHero
        title="Eventi musicali"
        subtitle="Jazz live ogni settimana"
        image={site.interiorImage}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-charcoal/80 leading-relaxed">
          Immergiti nell&apos;atmosfera unica dei locali con musica dal vivo a Milano.
          Scopri la nostra programmazione e partecipa a serate indimenticabili al Frisà
          Bistrò.
        </p>

        <h2 className="mb-8 font-display text-2xl font-bold text-olive">Prossimi eventi</h2>
        {upcoming.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-charcoal/70">Nessun evento in programma al momento.</p>
        )}

        {past.length > 0 && (
          <>
            <h2 className="mb-8 mt-16 font-display text-2xl font-bold text-olive/70">
              Eventi passati
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 opacity-75">
              {past.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

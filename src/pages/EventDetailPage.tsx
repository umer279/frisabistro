import { Link, useParams } from "react-router-dom";
import { EventJsonLd } from "../components/layout/JsonLd";
import { SeoHead } from "../components/layout/SeoHead";
import { Button } from "../components/ui/Button";
import { formatEventDate, getEventBySlug } from "../data/events";
import { site } from "../data/site";

export function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-olive">Evento non trovato</h1>
        <Button to="/eventi" variant="secondary" className="mt-6">
          Torna agli eventi
        </Button>
      </div>
    );
  }

  return (
    <>
      <SeoHead
        title={event.title}
        description={event.description}
        path={`/eventi/${event.slug}`}
        image={event.image}
        type="article"
      />
      <EventJsonLd event={event} />

      <article>
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden bg-charcoal">
          <img
            src={event.image}
            alt={event.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="mx-auto max-w-6xl">
              <time
                dateTime={event.date}
                className="rounded-full bg-terracotta px-4 py-1 text-sm font-semibold text-cream"
              >
                {formatEventDate(event.date)}
                {event.time && ` · ore ${event.time}`}
              </time>
              <h1 className="mt-4 font-display text-3xl font-bold text-cream md:text-5xl">
                {event.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-charcoal/90">{event.description}</p>
          <p className="mt-4 text-charcoal/70">
            <strong>Luogo:</strong> {event.location} — {site.name}, Via Alserio 3, Milano
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/prenota" variant="primary">
              Prenota un tavolo
            </Button>
            <Link
              to="/eventi"
              className="inline-flex items-center rounded-full border-2 border-olive/30 px-6 py-3 font-semibold text-olive hover:bg-olive/5"
            >
              ← Tutti gli eventi
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

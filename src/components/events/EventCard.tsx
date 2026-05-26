import { Link } from "react-router-dom";
import type { EventItem } from "../../data/events";
import { formatEventDateShort } from "../../data/events";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-cream-dark shadow-md transition-shadow hover:shadow-lg">
      <Link to={`/eventi/${event.slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={event.image}
            alt={event.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <time
              dateTime={event.date}
              className="rounded-full bg-terracotta/15 px-3 py-1 text-xs font-semibold text-terracotta"
            >
              {formatEventDateShort(event.date)}
            </time>
            {event.isRecurring && (
              <span className="rounded-full bg-olive/15 px-3 py-1 text-xs font-semibold text-olive">
                Date multiple
              </span>
            )}
          </div>
          <h3 className="mt-3 font-display text-lg font-bold text-olive group-hover:text-terracotta">
            {event.title}
          </h3>
          <p className="mt-2 text-sm text-charcoal/70">{event.location}</p>
          <span className="mt-3 inline-block text-sm font-semibold text-terracotta">
            Scopri di più →
          </span>
        </div>
      </Link>
    </article>
  );
}

import { getUpcomingEvents } from "../../data/events";
import { EventCard } from "../events/EventCard";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function EventsPreview() {
  const upcoming = getUpcomingEvents(3);

  return (
    <Section
      id="eventi"
      title="Prossimi eventi"
      subtitle="Musica live"
      className="bg-cream-dark/50"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {upcoming.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/eventi" variant="secondary">
          Tutti gli eventi
        </Button>
      </div>
    </Section>
  );
}

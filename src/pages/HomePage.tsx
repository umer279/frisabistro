import { AboutSection } from "../components/home/AboutSection";
import { EventsPreview } from "../components/home/EventsPreview";
import { Hero } from "../components/home/Hero";
import { Pillars } from "../components/home/Pillars";
import { Review } from "../components/home/Review";
import { SeoHead } from "../components/layout/SeoHead";
import { Button } from "../components/ui/Button";
import { Section } from "../components/ui/Section";
import { seo } from "../data/site";

export function HomePage() {
  return (
    <>
      <SeoHead
        title={seo.home.title}
        description={seo.home.description}
        path="/"
      />
      <Hero />
      <Pillars />
      <AboutSection />
      <EventsPreview />
      <Review />
      <Section className="text-center">
        <h2 className="font-display text-3xl font-bold text-olive">
          Ti aspettiamo in Via Alserio
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-charcoal/80">
          Prenota il tuo tavolo per una cena pugliese con musica live nel cuore di Milano Isola.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/prenota" variant="primary">
            Prenota ora
          </Button>
          <Button to="/contatti" variant="secondary">
            Come raggiungerci
          </Button>
        </div>
      </Section>
    </>
  );
}

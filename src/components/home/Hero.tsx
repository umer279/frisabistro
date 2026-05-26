import { hero, site } from "../../data/site";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={site.heroImage}
        alt="Interno del Frisà Bistrò con tavoli apparecchiati"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        width={1920}
        height={1440}
      />
      <div className="absolute inset-0 bg-charcoal/60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/20 px-4 py-1.5 text-sm font-semibold text-gold-light backdrop-blur-sm">
            {hero.tagline}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl">
            {hero.title}
            <span className="mt-2 block text-2xl font-normal text-cream/90 sm:text-3xl">
              {hero.subtitle}
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/prenota" variant="primary">
              {hero.ctaBook}
            </Button>
            <Button to="/eventi" variant="outline">
              {hero.ctaEvents}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

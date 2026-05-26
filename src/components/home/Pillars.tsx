import { pillars } from "../../data/site";
import { Section } from "../ui/Section";

export function Pillars() {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="group overflow-hidden rounded-2xl bg-cream-dark shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={pillar.image}
                alt={pillar.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-display text-xl font-bold text-olive">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-terracotta">
                {pillar.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

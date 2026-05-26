import { about, site } from "../../data/site";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function AboutSection() {
  return (
    <Section id="chi-siamo" title={about.title} subtitle="La nostra storia">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-4 text-charcoal/90 leading-relaxed">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <Button to="/menu" variant="secondary" className="mt-4">
            Scopri il menu
          </Button>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={site.aboutImage}
            alt="Piatti e atmosfera del Frisà Bistrò"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width={940}
            height={928}
          />
        </div>
      </div>
    </Section>
  );
}

import { review } from "../../data/site";
import { Section } from "../ui/Section";

export function Review() {
  return (
    <Section dark className="!bg-olive">
      <blockquote className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center gap-1 text-gold" aria-label={`${review.rating} stelle`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i} aria-hidden>
              ★
            </span>
          ))}
        </div>
        <p className="mt-6 font-display text-xl italic leading-relaxed text-cream md:text-2xl">
          &ldquo;{review.text}&rdquo;
        </p>
        <footer className="mt-6 text-gold-light font-semibold">— {review.author}</footer>
      </blockquote>
    </Section>
  );
}

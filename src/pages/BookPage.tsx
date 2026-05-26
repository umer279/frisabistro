import { ReservationForm } from "../components/booking/ReservationForm";
import { PageHero } from "../components/layout/PageHero";
import { SeoHead } from "../components/layout/SeoHead";
import { seo, site } from "../data/site";

export function BookPage() {
  return (
    <>
      <SeoHead
        title={seo.book.title}
        description={seo.book.description}
        path="/prenota"
      />
      <PageHero
        title="Prenota il tuo tavolo"
        subtitle="Scegli giorno e orario"
        image={site.interiorImage}
      />

      <div className="mx-auto max-w-xl px-4 py-12 sm:px-6 lg:px-8">
        <ReservationForm />
      </div>
    </>
  );
}

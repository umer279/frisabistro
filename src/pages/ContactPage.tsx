import { PageHero } from "../components/layout/PageHero";
import { SeoHead } from "../components/layout/SeoHead";
import { Button } from "../components/ui/Button";
import { contact, hours, seo } from "../data/site";

export function ContactPage() {
  return (
    <>
      <SeoHead
        title={seo.contact.title}
        description={seo.contact.description}
        path="/contatti"
      />
      <PageHero title="Contatti" subtitle="Ti aspettiamo" />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-olive">{contact.fullAddress}</h2>
            <p className="mt-2 text-charcoal/70">{contact.zone}</p>

            <dl className="mt-8 space-y-4">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-terracotta">
                  Telefono
                </dt>
                <dd>
                  <a
                    href={contact.phoneHref}
                    className="text-lg font-semibold text-olive hover:text-terracotta"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-terracotta">
                  Email
                </dt>
                <dd>
                  <a
                    href={contact.emailHref}
                    className="text-lg font-semibold text-olive hover:text-terracotta"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-terracotta">
                  Orari
                </dt>
                <dd className="text-charcoal/80">
                  <p>{hours.summary}</p>
                  <p>{hours.detail}</p>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-terracotta">
                  Social
                </dt>
                <dd className="flex gap-4">
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-olive hover:text-terracotta"
                  >
                    Instagram
                  </a>
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-olive hover:text-terracotta"
                  >
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/prenota" variant="primary">
                Prenota ora
              </Button>
              <a
                href={contact.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-olive/30 px-6 py-3 font-semibold text-olive hover:bg-olive/5"
              >
                Apri in Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="Mappa Frisà Bistrò, Via Alserio 3 Milano"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.198!2d9.1894!3d45.492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b8f8f8f8f9%3A0x0!2sVia%20Alserio%2C%203%2C%2020159%20Milano%20MI!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}

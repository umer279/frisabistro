import { PageHero } from "../components/layout/PageHero";
import { SeoHead } from "../components/layout/SeoHead";
import { contact, seo, site } from "../data/site";

export function PrivacyPage() {
  return (
    <>
      <SeoHead
        title={seo.privacy.title}
        description={seo.privacy.description}
        path="/privacy"
        noindex
      />
      <PageHero title="Informativa sulla privacy" />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 prose prose-olive">
        <p className="text-charcoal/80 leading-relaxed">
          La presente informativa descrive le modalità di trattamento dei dati personali
          degli utenti che consultano il sito web di {site.name} ai sensi del Regolamento
          UE 2016/679 (GDPR).
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-olive">Titolare del trattamento</h2>
        <p className="mt-2 text-charcoal/80">
          {site.name}
          <br />
          {contact.fullAddress}
          <br />
          Email:{" "}
          <a href={contact.emailHref} className="text-terracotta hover:underline">
            {contact.email}
          </a>
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-olive">Dati raccolti</h2>
        <p className="mt-2 text-charcoal/80">
          Attraverso il modulo di prenotazione raccogliamo nome, cognome, email, telefono,
          data e ora della prenotazione, numero di ospiti e note facoltative, al solo fine di
          gestire la richiesta di prenotazione.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-olive">Base giuridica</h2>
        <p className="mt-2 text-charcoal/80">
          Il trattamento è basato sull&apos;esecuzione di misure precontrattuali su richiesta
          dell&apos;interessato (art. 6, par. 1, lett. b GDPR).
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-olive">Conservazione</h2>
        <p className="mt-2 text-charcoal/80">
          I dati saranno conservati per il tempo necessario a evadere la richiesta e, in
          caso di prenotazione confermata, per gli obblighi di legge applicabili.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-olive">Diritti dell&apos;interessato</h2>
        <p className="mt-2 text-charcoal/80">
          È possibile esercitare i diritti di accesso, rettifica, cancellazione, limitazione,
          opposizione e portabilità scrivendo a {contact.email}.
        </p>
      </div>
    </>
  );
}

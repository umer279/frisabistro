import { SeoHead } from "../components/layout/SeoHead";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Pagina non trovata"
        description="La pagina richiesta non esiste."
        noindex
      />
      <div className="mx-auto max-w-6xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold text-olive">404</h1>
        <p className="mt-4 text-charcoal/70">Pagina non trovata.</p>
        <Button to="/" variant="primary" className="mt-8">
          Torna alla home
        </Button>
      </div>
    </>
  );
}

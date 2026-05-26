import { Link } from "react-router-dom";
import { contact, footer, hours, navLinks, site } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-t border-olive/10 bg-charcoal py-12 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={site.logo}
              alt={site.name}
              className="mb-4 h-12 w-auto brightness-0 invert"
              width={120}
              height={48}
            />
            <p className="font-display text-xl font-bold">{site.name}</p>
            <p className="mt-2 text-sm text-cream/70">{site.tagline}</p>
            <p className="mt-4 text-lg font-semibold text-gold-light">{footer.cta}</p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-light">
              Navigazione
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/prenota"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Prenota
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-light">
              Contatti
            </p>
            <address className="not-italic text-sm text-cream/80">
              <p>{contact.address}</p>
              <p>
                {contact.zone}, {contact.city} {contact.postalCode}
              </p>
              <p className="mt-2">
                <a href={contact.phoneHref} className="hover:text-cream">
                  Tel. {contact.phone}
                </a>
              </p>
              <p>
                <a href={contact.emailHref} className="hover:text-cream">
                  {contact.email}
                </a>
              </p>
              <p className="mt-2 text-cream/60">
                {hours.summary} · {hours.detail}
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-gold-light"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-gold-light"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </div>
            </address>
          </div>
        </div>

        <p className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

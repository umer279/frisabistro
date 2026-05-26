import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, site } from "../../data/site";
import { Button } from "../ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg =
    scrolled || !isHome
      ? "border-b border-olive/10 bg-cream/95 shadow-sm backdrop-blur-md"
      : "bg-transparent";

  const textClass = scrolled || !isHome ? "text-olive" : "text-cream";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-olive focus:px-4 focus:py-2 focus:text-cream"
      >
        Vai al contenuto
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={site.logo}
            alt={site.name}
            className="h-10 w-auto object-contain md:h-12"
            width={120}
            height={48}
          />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navigazione principale"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-olive text-cream"
                    : `${textClass} hover:bg-olive/10`
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/prenota" variant="primary" className="ml-2 !py-2 !text-sm">
            Prenota
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button to="/prenota" variant="primary" className="!px-4 !py-2 !text-sm">
            Prenota
          </Button>
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
              scrolled || !isHome
                ? "border-olive/20 text-olive"
                : "border-cream/30 text-cream"
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-olive/10 bg-cream/98 px-4 py-4 backdrop-blur-md md:hidden"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-base font-semibold ${
                      isActive ? "bg-olive text-cream" : "text-olive hover:bg-olive/10"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

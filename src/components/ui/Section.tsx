type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? "bg-olive text-cream" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <header className="mb-12 text-center">
            {subtitle && (
              <p
                className={`text-sm font-semibold uppercase tracking-widest ${
                  dark ? "text-gold-light" : "text-terracotta"
                }`}
              >
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                className={`mt-2 font-display text-3xl font-bold md:text-4xl ${
                  dark ? "text-cream" : "text-olive"
                }`}
              >
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

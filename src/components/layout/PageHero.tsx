type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[40vh] items-end overflow-hidden bg-charcoal">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-charcoal/65" aria-hidden />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-olive" aria-hidden />}

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            {subtitle}
          </p>
        )}
        <h1 className="mt-2 font-display text-4xl font-bold text-cream md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

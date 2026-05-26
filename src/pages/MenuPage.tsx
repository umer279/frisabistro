import { useEffect, useState } from "react";
import { PageHero } from "../components/layout/PageHero";
import { SeoHead } from "../components/layout/SeoHead";
import { MenuCategorySection } from "../components/menu/MenuCategorySection";
import { MenuNav } from "../components/menu/MenuNav";
import { Button } from "../components/ui/Button";
import { menuCategories, menuIntro } from "../data/menu";
import { seo, site } from "../data/site";

export function MenuPage() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    menuCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SeoHead
        title={seo.menu.title}
        description={seo.menu.description}
        path="/menu"
        image={site.aboutImage}
      />
      <PageHero
        title="Il nostro menu"
        subtitle="Osteria pugliese"
        image={site.aboutImage}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-charcoal/80 leading-relaxed">
          {menuIntro}
        </p>

        <div className="mb-8 lg:hidden">
          <MenuNav activeId={activeId} onSelect={setActiveId} />
        </div>

        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <MenuNav activeId={activeId} onSelect={setActiveId} />
          <div className="space-y-12">
            {menuCategories.map((category) => (
              <MenuCategorySection key={category.id} category={category} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button to="/prenota" variant="primary">
            Prenota un tavolo
          </Button>
        </div>
      </div>
    </>
  );
}

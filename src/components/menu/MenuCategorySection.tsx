import type { MenuCategory } from "../../data/menu";
import { MenuItem } from "./MenuItem";

export function MenuCategorySection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="scroll-mt-28">
      <h3 className="mb-4 font-display text-2xl font-bold text-olive border-b-2 border-terracotta/30 pb-2">
        {category.title}
      </h3>
      <div>
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

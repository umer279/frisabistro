import { formatPrice } from "../../data/site";
import type { MenuItem as MenuItemType } from "../../data/menu";

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div className="flex gap-4 border-b border-olive/10 py-4 last:border-0">
      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-charcoal">{item.name}</h4>
        {item.description && (
          <p className="mt-1 text-sm text-charcoal/70">{item.description}</p>
        )}
      </div>
      <p className="shrink-0 font-semibold text-terracotta">{formatPrice(item.price)}</p>
    </div>
  );
}

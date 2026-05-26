import { menuCategories } from "../../data/menu";

type MenuNavProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export function MenuNav({ activeId, onSelect }: MenuNavProps) {
  return (
    <>
      <nav
        className="hidden lg:block sticky top-24 self-start"
        aria-label="Categorie menu"
      >
        <ul className="space-y-1">
          {menuCategories.map((cat) => (
            <li key={cat.id}>
              <a
                href={`#${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(cat.id);
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  activeId === cat.id
                    ? "bg-olive text-cream"
                    : "text-olive hover:bg-olive/10"
                }`}
              >
                {cat.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <label className="lg:hidden block">
        <span className="sr-only">Seleziona categoria</span>
        <select
          value={activeId}
          onChange={(e) => {
            onSelect(e.target.value);
            document.getElementById(e.target.value)?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full rounded-lg border border-olive/20 bg-cream px-4 py-3 text-olive font-semibold"
        >
          {menuCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

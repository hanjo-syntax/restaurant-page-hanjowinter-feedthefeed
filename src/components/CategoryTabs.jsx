const defaultCategories = [
  {
    id: 'bao',
    label: 'Bao',
    icon: '/images/food-cloche-icon.png',
  },
  {
    id: 'bowls',
    label: 'Bowls',
    icon: '/images/steaming-noodle-bowl-icon.png',
  },
  {
    id: 'ramen',
    label: 'Ramen',
    icon: '/images/noodle-chopsticks-bowl-icon.png',
  },
  {
    id: 'sweets',
    label: 'Süßes',
    icon: '/images/cupcake-icon.png',
  },
  {
    id: 'drinks',
    label: 'Drinks',
    icon: '/images/takeaway-drink-icon.png',
  },
];

export default function CategoryTabs({
  categories = defaultCategories,
  // Standardmäßig ist die erste Kategorie aktiv; ?. verhindert einen Fehler bei einer leeren Liste.
  activeCategory = categories[0]?.id,
  onSelect,
}) {
  return (
    <nav
      aria-label="Menükategorien"
      className="bw-full overflow-x-auto border-b border-zinc-800 bg-zinc-950"
    >
      <div className="mx-auto flex w-max min-w-full max-w-6xl justify-start gap-4 px-4 sm:gap-8 sm:px-6 lg:justify-between lg:px-10">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isActive}
              className={`group relative flex shrink-0 flex-col items-center gap-2 px-3 py-4 sm:flex-row ${
                isActive
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-white'
              }`}
              onClick={() => onSelect?.(category.id)}
            >
              <img
                src={category.icon}
                alt=""
                className="h-7 w-7 object-contain opacity-70 transition-opacity group-hover:opacity-100"
              />
              <span className="font-heading text-2xl uppercase leading-none sm:text-3xl">
                {category.label}
              </span>
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 transition-colors ${
                  isActive ? 'bg-cyan-400' : 'bg-transparent'
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}

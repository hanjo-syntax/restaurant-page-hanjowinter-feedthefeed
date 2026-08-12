import { useMemo, useState } from 'react';
import Button from '../components/Button';
import CategoryTabs from '../components/CategoryTabs';
import DishCard from '../components/DishCard';
import Section from '../components/Section';

const menuItems = [
  {
    category: 'bao',
    title: 'K-Pop Crunch Bao',
    description: 'Knuspriger Blumenkohl, Kimchi, Sesam und Neon-Mayo.',
    price: '8,50',
    tags: ['vegan', 'scharf'],
    imageUrl: '/images/korean-fried-cauliflower-bao.png',
  },
  {
    category: 'bao',
    title: 'Seoul BBQ Bao',
    description: 'Zartes BBQ, knackiger Salat und würzige Gochujang-Sauce.',
    price: '9,50',
    tags: ['scharf'],
    imageUrl: '/images/korean-fried-cauliflower-bao-pair.png',
  },
  {
    category: 'bao',
    title: 'Neon Tofu Bao',
    description: 'Knuspriger Tofu, Gurke, Frühlingszwiebel und Sesam.',
    price: '8,90',
    tags: ['vegan'],
    imageUrl: '/images/neon-ramen-bowl-bao-buns.png',
  },
  {
    category: 'bao',
    title: 'Miso Mushroom Bao',
    description: 'Gebratene Pilze, Miso-Glasur und cremige Chili-Mayo.',
    price: '8,90',
    tags: ['vegan'],
    imageUrl: '/images/pink-coconut-ramen-tofu-bowl.png',
  },
  {
    category: 'bowls',
    title: 'Seoul Glow Bowl',
    description: 'Tofu, Reis, knackiges Gemüse und Sesam-Dressing.',
    price: '12,90',
    tags: ['vegan'],
    imageUrl: '/images/korean-tofu-rice-bowl.png',
  },
  {
    category: 'bowls',
    title: 'Pink Coconut Bowl',
    description: 'Kokosbrühe, Tofu, Gemüse und frische Kräuter.',
    price: '13,50',
    tags: ['vegan', 'scharf'],
    imageUrl: '/images/pink-coconut-ramen-tofu-bowl.png',
  },
  {
    category: 'ramen',
    title: 'Tiger Ramen',
    description: 'Würzige Brühe, Mais, Ei, Pak Choi und Chiliöl.',
    price: '13,90',
    tags: ['scharf'],
    imageUrl: '/images/spicy-corn-ramen-bowl.png',
  },
  {
    category: 'ramen',
    title: 'Pink Miso Ramen',
    description: 'Cremige Miso-Brühe, Tofu, Pak Choi und Rote-Bete-Nudeln.',
    price: '14,50',
    tags: ['vegan'],
    imageUrl: '/images/pink-broth-ramen-pork-bowl.png',
  },
  {
    category: 'sweets',
    title: 'Matcha Cheesecake',
    description: 'Cremiger Matcha-Käsekuchen mit knusprigem Boden.',
    price: '6,50',
    tags: [],
    imageUrl: '/images/matcha-cheesecake-pink-cocktail.png',
  },
  {
    category: 'drinks',
    title: 'Neon Pink',
    description: 'Fruchtiger Cocktail mit leuchtendem Neon-Finish.',
    price: '7,90',
    tags: [],
    imageUrl: '/images/neon-restaurant-table-pink-cocktail.png',
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('bao');

  const visibleItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
      <>
        <section className="bg-zinc-900 px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
              Unsere Speisekarte
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">
              Zum Teilen gemacht. Für Trends serviert.
            </h1>
            <p className="mt-5 max-w-xl text-base font-bold leading-7 text-zinc-400 sm:text-lg">
              Kräftiges asiatisches Streetfood, limitierte Creator-Drops und Gerichte für jeden Geschmack.
            </p>
          </div>
        </section>

        <CategoryTabs
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl">
            {activeCategory === 'sweets'
              ? 'Süßes'
              : activeCategory === 'drinks'
                ? 'Drinks'
                : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleItems.map((item) => (
              <DishCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-2" aria-label="Menüseite">
            {[0, 1, 2, 3, 4, 5].map((page) => (
              <span
                key={page}
                className={`h-4 w-4 rounded-full ${page === 0 ? 'bg-zinc-500' : 'bg-zinc-200'}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </section>

        <Section
          id="allergens"
          bg="border-y border-zinc-800 bg-zinc-900"
          hideHeader
          className="my-0 px-6 py-10 sm:px-10 lg:px-16"
          contentClassName="mt-0 w-full"
        >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center sm:flex-row">
          <img
            src="/images/info-icon.png"
            alt=""
            aria-hidden="true"
            className="h-12 w-12 object-contain"
          />

            <div className="text-zinc-400">
              <h3 className="text-2xl font-bold uppercase text-white">
                Allergeninformationen
              </h3>

              <p className="mt-2 text-lg font-bold">
                Bitte informiere unser Team über Allergien oder Unverträglichkeiten.
              </p>

              <a
                href="#allergens"
                className="mt-2 inline-block text-lg font-bold text-cyan-400 underline underline-offset-4"
              >
                Alle Allergene ansehen
              </a>
            </div>
          </div>
        </Section>

        <Section
          id="book"
          bg="bg-cyan-400 text-zinc-950"
          hideHeader
          className="mx-2 my-4 px-6 py-14 sm:px-10 lg:px-16"
          contentClassName="mt-0 w-full"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-bold uppercase tracking-[0.18em] text-zinc-800">See you at The Feed</p>
              <h2 className="mt-2 text-4xl font-bold uppercase leading-tight sm:text-6xl">Bereit für deinen nächsten Besuch?</h2>
            </div>
            <Button href="#reservation" variant="primary" className="shrink-0">Tisch reservieren</Button>
          </div>
        </Section>
      </>
  );
}

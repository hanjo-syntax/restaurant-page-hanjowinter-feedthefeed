import { useMemo, useState } from 'react';
import Button from '../components/Button';
import CategoryTabs from '../components/CategoryTabs';
import DishCard from '../components/DishCard';
import Section from '../components/Section';
// Import der Gerichte. "with {type: 'JSON}" kann man auch
// als "import {dishes} from '../data/dishes.json'" schreiben.
// In Vite-Projekten werden .json-Dateien automatisch erkannt und verarbeitet.
 
import dishes from '../data/dishes.json' with {type:'json'};

export default function MenuPage() {
  // Der React-Hook useState speichert einen Wert, der sich während der Nutzung der Seite ändern kann
  // Hier ist "bao" der Startwert für die aktive Kategorie
  // useState gibt ein Array mit zwei Werten zurück: den aktuellen Zustand und eine Setter-Funktion

  // Array-Destructuring verteilt diese Werte anhand ihrer Reihenfolge auf zwei Variablen:
  // activeCategory liest den aktuellen Wert, setActiveCategory aktualisiert ihn

  // Man nutzt diese Schreibweise weil beide Werte dadurch direkt benannt
  // und ohne zusätzlichen Zugriff auf das Rückgabe-Array verwendet werden können
  
  // Die Setter-Funktion wird von React bereitgestellt und muss nicht selbst definiert werden
  // Beim Klick auf einen Kategorie-Tab wird setActiveCategory aufgerufen; React rendert
  // die Komponente danach neu und zeigt die zur ausgewählten Kategorie passenden Gerichte an
  const [activeCategory, setActiveCategory] = useState('bao');
 
  // currentPage merkt sich die aktuell angezeigte Menüseite. Die Zählung beginnt bei 0.
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  // Der Hook useMemo speichert das Ergebnis der Filterung zwischen
  // Die Liste wird nur neu berechnet, wenn sich activeCategory ändert
  // Dadurch wird bei einem erneuten Rendern ohne Kategorienwechsel keine neue
  // Filterung durchgeführt. Die Filterfunktion gibt nur Gerichte zurück, deren
  // category zur aktuell ausgewählten Kategorie passt.
  const visibleItems = useMemo(
    () => dishes.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  // ceil() rundet auf die nächste, ganze Zahl auf,
  // damit das letzt Gericht nicht verschluckt wird
  // z.B. itemPerPage = 2 | 5 Dishes = 5 / 2 = 2.5 Pages
  // ceil rundet dann auf 3 Pages auf

  // slice() nimmt nur den Ausschnitt der Gerichte für die aktuelle Seite.
  // So werden pro Seite höchstens itemsPerPage Karten angezeigt.
  const pageCount = Math.ceil(visibleItems.length / itemsPerPage);
  const paginatedItems = visibleItems.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  // Beim Wechsel der Kategorie beginnen wir wieder auf der ersten Seite.
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setCurrentPage(0);
  };

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
          onSelect={handleCategorySelect}
        />

        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl">
            {activeCategory === 'sweets'
              ? 'Süßes'
              : activeCategory === 'drinks'
                ? 'Drinks'
                : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h2>

          <div
            key={`${activeCategory}-${currentPage}`}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Nur die Gerichte der aktuellen Seite werden als Karten erzeugt. */}
            {paginatedItems.map((item, index) => (
              <div
                key={`${item.category}-${item.title}-${index}`}
                className="motion-safe:animate-menu-switch"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <DishCard {...item} />
              </div>
            ))}
          </div>

          <nav className="mt-12 flex justify-center gap-2" aria-label="Menüseiten">
            {/* Array.from erzeugt genau so viele Buttons, wie es Menüseiten gibt. */}
            {Array.from({ length: pageCount }, (_, page) => (
              <button
                key={page}
                type="button"
                aria-label={`Menüseite ${page + 1}`}
                aria-current={page === currentPage ? 'page' : undefined}
                onClick={() => setCurrentPage(page)}
                className={`h-4 w-4 rounded-full ${page === currentPage ? 'bg-zinc-500' : 'bg-zinc-200'}`}
              />
            ))}
          </nav>
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

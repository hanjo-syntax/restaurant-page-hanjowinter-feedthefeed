import Section from '../components/Section';

const allergens = [
  ['A', 'Glutenhaltiges Getreide'],
  ['B', 'Krebstiere'],
  ['C', 'Eier'],
  ['D', 'Fisch'],
  ['E', 'Erdnüsse'],
  ['F', 'Soja'],
  ['G', 'Milch und Laktose'],
  ['H', 'Schalenfrüchte'],
  ['I', 'Sellerie'],
  ['J', 'Senf'],
  ['K', 'Sesam'],
  ['L', 'Schwefeldioxid und Sulfite'],
];

export default function AllergenePage() {
  return (
    <Section
      bg="bg-zinc-900"
      eyebrow="Gut zu wissen · Feed the Feed"
      title="Allergene"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-10 md:py-24 lg:px-16"
      contentClassName="mt-10 max-w-4xl"
    >
      <p className="max-w-3xl text-xl font-bold leading-8 text-zinc-400">
        Deine Sicherheit geht vor. Bitte informiere unser Team bei deiner Bestellung über Allergien oder Unverträglichkeiten. Rezepturen und Zutaten können sich ändern.
      </p>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {allergens.map(([code, label]) => (
          <div key={code} className="flex items-center gap-4 border border-zinc-800 bg-zinc-950 px-5 py-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-zinc-950">{code}</span>
            <span className="text-lg font-bold text-zinc-300">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-10 border-l-4 border-pink-500 pl-5 text-lg font-bold leading-8 text-zinc-500">
        <p>Wir bereiten unsere Speisen in einer Küche zu, in der verschiedene Allergene verarbeitet werden. Eine vollständig allergenfreie Zubereitung können wir daher nicht garantieren.</p>
      </div>
    </Section>
  );
}

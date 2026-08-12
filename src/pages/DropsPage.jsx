import Button from '../components/Button';
import DishCard from '../components/DishCard';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';

const drops = [
  {
    badgeKind: 'Creator Drop',
    badgeColor: 'pink',
    title: 'Pink Miso Ramen',
    price: '14,50',
    description: 'Cremige pinke Miso-Brühe mit Chiliöl, knusprigem Tofu, Pak Choi und Rote-Bete-Nudeln.',
    imageUrl: '/images/pink-coconut-ramen-tofu-bowl.png',
    tags: ['MiaMiso x Feed the Feed', 'limitiert'],
  },
  {
    badgeKind: 'Kitchen Drop',
    badgeColor: 'cyan',
    title: 'K-Pop Crunch Bao',
    price: '8,50',
    description: 'Knuspriger Blumenkohl, Kimchi, Sesam und Neon-Mayo – gemacht zum Teilen und Markieren.',
    imageUrl: '/images/korean-fried-cauliflower-bao-pair.png',
    tags: ['vegan', 'leicht scharf'],
  },
];

export default function DropsPage() {
  return (
    <>
      <section className="bg-zinc-900 px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-cyan-400">Aktionen · Creator Drops</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-bold uppercase leading-[0.95] sm:text-7xl md:text-8xl">Nicht lange da. Für deinen Feed gemacht.</h1>
            <p className="mt-7 max-w-xl text-xl font-bold leading-8 text-zinc-400 sm:text-2xl">
              Limitierte Gerichte, wechselnde Creator und neue Gründe, wiederzukommen.
            </p>
          </div>
          <HeroImage src="/images/pink-coconut-ramen-tofu-bowl.png" alt="Pinkes Miso-Ramen als Creator-Drop" />
        </div>
      </section>

      <Section eyebrow="Jetzt im Drop" title="Dein nächster Lieblingsmoment">
        <div className="grid gap-6 md:grid-cols-2">
          {drops.map((drop) => <DishCard key={drop.title} {...drop} />)}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/menu" variant="primaryLight">Zur Speisekarte</Button>
        </div>
      </Section>

      <Section bg="bg-zinc-900" eyebrow="So funktioniert’s" title="Komm vorbei, bevor es vorbei ist">
        <div className="grid gap-5 md:grid-cols-3">
          {['Drop entdecken', 'Tisch reservieren', 'Moment teilen'].map((step, index) => (
            <article key={step} className="border border-cyan-800 bg-zinc-950 p-6">
              <p className="text-4xl font-bold text-pink-500">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-bold uppercase">{step}</h3>
              <p className="mt-3 text-lg font-bold leading-7 text-zinc-500">
                {index === 0 && 'Unsere Drops wechseln regelmäßig und sind nur erhältlich, solange der Vorrat reicht.'}
                {index === 1 && 'Sichere dir deinen Platz in Ehrenfeld und probiere den neuesten Drop direkt vor Ort.'}
                {index === 2 && 'Markiere @feedthefeed.cgn oder nutze #FeedTheFeed – vielleicht landest du in unserem Feed.'}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="bg-cyan-400 text-zinc-950" hideHeader className="mx-2 my-4 px-6 py-14 sm:px-10 lg:px-16" contentClassName="mt-0 w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-zinc-800">Ready when you are</p>
            <h2 className="mt-2 text-4xl font-bold uppercase leading-tight sm:text-6xl">Welchen Drop probierst du zuerst?</h2>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">Tisch reservieren</Button>
        </div>
      </Section>
    </>
  );
}

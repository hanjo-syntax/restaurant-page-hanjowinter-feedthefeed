import Button from '../components/Button';
import HeroImage from '../components/HeroImage';
import IconFeatureRow from '../components/IconFeatureRow';
import ImageRow from '../components/ImageRow';
import OpeningHours from '../components/OpeningHours';
import Section from '../components/Section';
import SplitSection from '../components/SplitSection';

const locationFeatures = [
  {
    icon: '/images/steaming-noodle-bowl-icon.png',
    label: 'Streetfood in Ehrenfeld',
    caption: 'Kräftige Aromen, heiße Bowls und Bao zum Teilen – mitten in Köln.',
  },
  {
    icon: '/images/neon-camera-illustration.png',
    label: 'Dein nächster Fotospot',
    caption: 'Neon, Farbe und Details, die deinen Besuch genauso gut aussehen lassen wie er schmeckt.',
  },
  {
    icon: '/images/takeaway-drink-icon.png',
    label: 'Für jede Runde',
    caption: 'Ob schneller Lunch, Date Night oder großer Creator-Abend: am Tisch ist Platz für alle.',
  },
];

const locationDetails = [
  {
    eyebrow: 'Für deinen Abend',
    title: 'Von Lunch bis Late Night',
    text: 'Starte mit einer Bowl, teile ein paar Bao und bleib auf einen Drink. Unsere Karte ist so gedacht, dass jede Runde ihren eigenen Rhythmus findet.',
  },
  {
    eyebrow: 'Für deine Crew',
    title: 'Zusammen schmeckt besser',
    text: 'Große Tische, unkompliziertes Sharing und genug Auswahl für Veganer:innen, Schärfe-Fans und alle, die einfach neugierig sind.',
  },
  {
    eyebrow: 'Für deinen Feed',
    title: 'Licht, Farbe, Moment',
    text: 'Unsere Neon-Spots und wechselnden Creator-Drops machen jeden Besuch anders. Markiere @feedthefeed.cgn und werde Teil der Location.',
  },
];

const atmosphereImages = [
  { src: '/images/neon-restaurant-table-pink-cocktail.png', alt: 'Neonbeleuchteter Restauranttisch mit pinkem Cocktail' },
  { src: '/images/neon-ramen-bowl-bao-buns.png', alt: 'Ramen und Bao im Neonlicht' },
  { src: '/images/matcha-cheesecake-pink-cocktail.png', alt: 'Matcha-Cheesecake und pinker Cocktail' },
  { src: '/images/korean-tofu-rice-bowl-top-view.png', alt: 'Koreanische Bowl aus der Vogelperspektive' },
  { src: '/images/neon-restaurant-table-pink-cocktail.png' },
];

export default function FeedPage() {
  return (
    <>
        <section className="bg-zinc-900 px-6 py-16 sm:px-10 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-bold uppercase tracking-[0.18em] text-cyan-400">The Feed · Köln-Ehrenfeld</p>
              <h1 className="mt-4 max-w-3xl text-5xl font-bold uppercase leading-[0.95] sm:text-7xl md:text-8xl">
                Mehr als ein Restaurant.
              </h1>
              <p className="mt-7 max-w-xl text-xl font-bold leading-8 text-zinc-400 sm:text-2xl">
                Ein Ort für gutes Essen, große Runden und alles, was du direkt in deinen Feed bringen willst.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#location" variant="primary">Location entdecken</Button>
                <Button href="#book" variant="primaryLight">Tisch reservieren</Button>
              </div>
            </div>
            <HeroImage
              src="/images/neon-restaurant-table-pink-cocktail.png"
              alt="Neonbeleuchteter Tisch im Feed the Feed"
            />
          </div>
        </section>

        <Section
          id="location"
          bg="bg-transparent"
          eyebrow="Why Feed the Feed"
          title="Eine Location mit eigener Energie"
        >
          <div className="max-w-3xl text-xl font-bold leading-8 text-zinc-400 sm:text-2xl">
            <p>
              The Feed verbindet Restaurant, Treffpunkt und Content-Spot. Du kommst wegen des Essens, entdeckst neue Lieblingsgerichte und gehst mit einem Abend nach Hause, den du teilen möchtest.
            </p>
          </div>

          <div className="mt-12">
            <IconFeatureRow items={locationFeatures} />
          </div>

          <div className="mt-14 grid gap-5 border-t border-cyan-800 pt-10 md:grid-cols-3">
            {locationDetails.map((detail) => (
              <article key={detail.title} className="border border-cyan-800 bg-zinc-950 p-6">
                <p className="font-bold uppercase tracking-[0.16em] text-pink-500">{detail.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-bold uppercase leading-tight">{detail.title}</h3>
                <p className="mt-4 text-lg font-bold leading-7 text-zinc-500">{detail.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <SplitSection
          bg="bg-zinc-900"
          eyebrow="Find us"
          title="Venloer Straße 214"
          reverse
          leftContent={
            <div className="mt-6">
              <p className='text-zinc-400 py-3 font-bold text-xl'>
                FEED THE FEED<br/>
                Venloer Straße 214<br/>
                50823 Köln, Deutschland<br/><br/>
                <i>
                Fünf Minuten vom Bahnhof Ehrenfeld.<br />
                Linien 3, 4 und 13 halten ganz in der Nähe.
                </i> 
              </p>
              <div className="mt-8 max-w-md">
                <OpeningHours />
              </div>
            </div>
          }
        >
          <HeroImage
            src="/images/restaurant-location-map-ehrenfeld.png"
            alt="Karte zur Position von The Feed in Ehrenfeld"
          />
        </SplitSection>

        <Section
          bg="bg-transparent"
          eyebrow="Inside the Feed"
          title="Komm für das Essen. Bleib für die Atmosphäre."
        >
          <ImageRow images={atmosphereImages} />
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

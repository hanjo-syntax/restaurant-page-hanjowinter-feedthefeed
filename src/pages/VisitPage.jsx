import Button from '../components/Button';
import FAQ from '../components/FAQ';
import HeroImage from '../components/HeroImage';
import IconFeatureRow from '../components/IconFeatureRow';
import OpeningHours from '../components/OpeningHours';
import Section from '../components/Section';

const visitFeatures = [
  { icon: '/images/steaming-noodle-bowl-icon.png', label: 'ÖPNV', caption: 'Fünf Minuten vom Bahnhof Ehrenfeld. Die Linien 3, 4 und 13 halten ganz in der Nähe.' },
  { icon: '/images/info-icon.png', label: 'Barrierefrei', caption: 'Stufenloser Eingang, zugängliches WC und Platz für Rollstühle.' },
  { icon: '/images/calendar-icon.png', label: 'Parken', caption: 'Straßenparkplätze gibt es in der Umgebung. Wir empfehlen die Anreise mit dem ÖPNV.' },
];

const questions = [
  { question: 'Gibt es vegane Optionen?', answer: 'Ja – auf unserer Karte findest du mehrere vegane Bowls, Bao und wechselnde Creator-Drops.' },
  { question: 'Kann ich für größere Gruppen reservieren?', answer: 'Klar. Schreib uns für Gruppen ab acht Personen am besten vorab über die Kontaktseite.' },
  { question: 'Ist das Restaurant barrierefrei?', answer: 'Unser Eingang und das Restaurant sind stufenlos zugänglich. Bei Fragen hilft dir unser Team gerne weiter.' },
  { question: 'Darf ich professionelles Kamera-Equipment mitbringen?', answer: 'Für größere Shootings sprich uns bitte vorher an. Handyfotos und kleine Kameras sind jederzeit willkommen.' },
];

export default function VisitPage() {
  return (
    <>
      <section className="bg-zinc-900 px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-cyan-400">Besuch · Feed the Feed</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-bold uppercase leading-[0.95] sm:text-7xl md:text-8xl">Find us.</h1>
            <p className="mt-7 max-w-xl text-xl font-bold leading-8 text-zinc-400 sm:text-2xl">Asiatisches Streetfood, Creator-Drops und Late-Night-Dinner mitten in Köln-Ehrenfeld.</p>
          </div>
          <HeroImage src="/images/restaurant-location-map-ehrenfeld.png" alt="Lageplan von Feed the Feed in Ehrenfeld" />
        </div>
      </section>

      <Section eyebrow="Our location" title="Komm vorbei">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <HeroImage src="/images/neon-restaurant-table-pink-cocktail.png" alt="Neonbeleuchteter Tisch im Feed the Feed" />
          <div>
            <p className="text-2xl font-bold uppercase text-cyan-400">Feed the Feed</p>
            <p className="mt-3 text-2xl font-bold leading-9">Venloer Straße 214<br />50823 Köln</p>
            <div className="mt-8"><OpeningHours /></div>
          </div>
        </div>
      </Section>

      <Section bg="bg-zinc-900" eyebrow="Plan your visit" title="Alles vor deiner Ankunft">
        <IconFeatureRow items={visitFeatures} />
      </Section>

      <Section eyebrow="FAQ" title="Häufig gefragt">
        <FAQ items={questions} />
      </Section>

      <Section bg="bg-cyan-400 text-zinc-950" hideHeader className="mx-2 my-4 px-6 py-14 sm:px-10 lg:px-16" contentClassName="mt-0 w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div><p className="font-bold uppercase tracking-[0.18em] text-zinc-800">See you at The Feed</p><h2 className="mt-2 text-4xl font-bold uppercase leading-tight sm:text-6xl">Bereit für deinen Besuch?</h2></div>
          <Button href="/contact" variant="primary" className="shrink-0">Tisch reservieren</Button>
        </div>
      </Section>
    </>
  );
}

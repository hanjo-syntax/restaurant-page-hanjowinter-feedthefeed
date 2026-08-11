import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import IconFeatureRow from '../components/IconFeatureRow';
import OpeningHours from '../components/OpeningHours';
import Section from '../components/Section';
import { navigationLinks, socialLinks } from '../data/navigation';

const visitFeatures = [
  {
    icon: '/images/steaming-noodle-bowl-icon.png',
    label: 'Vorbeikommen',
    caption: 'Venloer Straße 214, 50823 Köln – mitten in Ehrenfeld und nur wenige Minuten vom Bahnhof entfernt.',
  },
  {
    icon: '/images/calendar-icon.png',
    label: 'Tisch sichern',
    caption: 'Für größere Gruppen und besondere Abende empfehlen wir, vorab einen Tisch zu reservieren.',
  },
  {
    icon: '/images/info-icon.png',
    label: 'Fragen klären',
    caption: 'Allergien, Gruppenbuchung oder Kooperation? Schreib uns – wir melden uns in der Regel innerhalb von zwei Werktagen.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-pink-500 selection:text-white">
      <Header />

      <main>
        <section className="bg-zinc-900 px-6 py-16 sm:px-10 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-bold uppercase tracking-[0.18em] text-cyan-400">Kontakt · Feed the Feed</p>
              <h1 className="mt-4 max-w-3xl text-5xl font-bold uppercase leading-[0.95] sm:text-7xl md:text-8xl">Sag Hallo.</h1>
              <p className="mt-7 max-w-xl text-xl font-bold leading-8 text-zinc-400 sm:text-2xl">
                Du hast eine Frage, planst einen Abend mit deiner Crew oder möchtest mit uns zusammenarbeiten? Wir freuen uns auf deine Nachricht.
              </p>
            </div>
            <HeroImage src="/images/neon-restaurant-table-pink-cocktail.png" alt="Tisch im Feed the Feed" />
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-24">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-cyan-400">Get in touch</p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-tight sm:text-5xl">Wie können wir helfen?</h2>
            <p className="mt-6 text-xl font-bold leading-8 text-zinc-400">
              Für Reservierungen kannst du uns direkt über den Button erreichen. Für alle anderen Anliegen nutze das Formular oder schreib uns eine E-Mail.
            </p>
            <div className="mt-8 space-y-3 text-lg font-bold text-zinc-300">
              <a className="block text-cyan-400 hover:text-pink-400" href="mailto:hello@feedthefeed.de">hello@feedthefeed.de</a>
              <a className="block hover:text-cyan-400" href="tel:+492215550142">+49 221 555 01 42</a>
              <p>@feedthefeed.cgn</p>
            </div>
            <div className="mt-10 max-w-md"><OpeningHours /></div>
          </div>

          <form className="border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-bold uppercase tracking-[0.12em] text-zinc-400">
                Name
                <input className="mt-2 w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-base normal-case tracking-normal text-white outline-none placeholder:text-zinc-600 focus:border-cyan-400" type="text" name="name" placeholder="Dein Name" />
              </label>
              <label className="text-sm font-bold uppercase tracking-[0.12em] text-zinc-400">
                E-Mail
                <input className="mt-2 w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-base normal-case tracking-normal text-white outline-none placeholder:text-zinc-600 focus:border-cyan-400" type="email" name="email" placeholder="dein@email.de" />
              </label>
            </div>
            <label className="mt-6 block text-sm font-bold uppercase tracking-[0.12em] text-zinc-400">
              Nachricht
              <textarea className="mt-2 min-h-40 w-full resize-y border border-zinc-700 bg-zinc-950 px-4 py-3 text-base normal-case tracking-normal text-white outline-none placeholder:text-zinc-600 focus:border-cyan-400" name="message" placeholder="Worum geht es?" />
            </label>
            <Button variant="primary" className="mt-6" type="submit">Nachricht senden</Button>
          </form>
        </section>

      </main>

      <Footer navigationLinks={navigationLinks} socialLinks={socialLinks} />
    </div>
  );
}

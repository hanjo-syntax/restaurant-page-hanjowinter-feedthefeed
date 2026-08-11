import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { navigationLinks, socialLinks } from '../data/navigation';

export default function Error404Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-pink-500 selection:text-white">
      <Header />

      <main className="flex min-h-[60vh] items-center justify-center px-6 py-20 text-center sm:px-10">
        <section className="max-w-2xl">
          <p className="font-bold uppercase tracking-[0.2em] text-cyan-400">404 · Nicht gefunden</p>
          <h1 className="mt-4 text-6xl font-bold uppercase leading-none sm:text-8xl">Dieser Feed ist leer.</h1>
          <p className="mx-auto mt-6 max-w-xl text-xl font-bold leading-8 text-zinc-400">
            Die gesuchte Seite gibt es hier nicht. Zurück zum Start und weiter im Feed stöbern?
          </p>
          <Button href="/" variant="primary" className="mt-8">Zur Startseite</Button>
        </section>
      </main>

      <Footer navigationLinks={navigationLinks} socialLinks={socialLinks} />
    </div>
  );
}

import Button from '../components/Button';

export default function Error404Page() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="font-bold uppercase tracking-[0.2em] text-cyan-400">
        404 · Nicht gefunden
      </p>

      <h1 className="mt-4 text-6xl font-bold uppercase leading-none sm:text-8xl">
        Dieser Feed ist leer.
      </h1>

      <p className="mt-6 max-w-xl text-xl font-bold leading-8 text-zinc-400">
        Die gesuchte Seite gibt es hier nicht. Zurück zum Start und weiter im Feed stöbern?
      </p>

      <Button href="/" variant="primary" className="mt-8">
        Zur Startseite
      </Button>
    </section>
  );
}
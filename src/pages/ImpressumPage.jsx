import Section from '../components/Section';

export default function ImpressumPage() {
  return (
    <Section
      bg="bg-zinc-900"
      eyebrow="Rechtliches · Feed the Feed"
      title="Impressum"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-10 md:py-24 lg:px-16"
      contentClassName="mt-10 max-w-3xl space-y-10 text-lg font-bold leading-8 text-zinc-400"
    >
      <div>
        <h2 className="text-2xl uppercase text-white">Angaben gemäß § 5 TMG</h2>
        <p className="mt-3">Feed the Feed GmbH<br />Venloer Straße 214<br />50823 Köln</p>
      </div>
      <div>
        <h2 className="text-2xl uppercase text-white">Kontakt</h2>
        <p className="mt-3">Telefon: +49 221 555 01 42<br />E-Mail: hello@feedthefeed.de</p>
      </div>
      <div>
        <h2 className="text-2xl uppercase text-white">Vertretung</h2>
        <p className="mt-3">Geschäftsführung: Mina Park</p>
      </div>

    </Section>
  );
}

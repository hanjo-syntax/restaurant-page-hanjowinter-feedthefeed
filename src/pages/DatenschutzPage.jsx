import Section from '../components/Section';

export default function DatenschutzPage() {
  return (
    <Section
      eyebrow="Rechtliches · Feed the Feed"
      title="Datenschutz"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-10 md:py-24 lg:px-16"
      contentClassName="mt-10 max-w-3xl space-y-10 text-lg font-bold leading-8 text-zinc-400"
    >
      <div>
        <h2 className="text-2xl uppercase text-white">Kurz gesagt</h2>
        <p className="mt-3">Wir behandeln deine Daten vertraulich und verarbeiten sie nur, wenn dies für den Betrieb unserer Website oder deine Anfrage erforderlich ist.</p>
      </div>
      <div>
        <h2 className="text-2xl uppercase text-white">Kontaktaufnahme</h2>
        <p className="mt-3">Wenn du uns per E-Mail oder Kontaktformular schreibst, nutzen wir deine Angaben ausschließlich zur Bearbeitung deines Anliegens. Wir geben sie nicht ohne deine Einwilligung weiter.</p>
      </div>
      <div>
        <h2 className="text-2xl uppercase text-white">Newsletter</h2>
        <p className="mt-3">Für den Newsletter benötigen wir deine E-Mail-Adresse. Du kannst dich jederzeit über den Abmeldelink in jeder Nachricht abmelden.</p>
      </div>
      <div>
        <h2 className="text-2xl uppercase text-white">Deine Rechte</h2>
        <p className="mt-3">Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten. Schreib uns dafür an hello@feedthefeed.de.</p>
      </div>
    </Section>
  );
}

import { useMemo, useState } from 'react';
import Button from '../components/Button';
import ReservationOptionCard from '../components/ReservationOptionCard';
import ReservationProgress from '../components/ReservationProgress';
import ReservationTicket from '../components/ReservationTicket';

const dates = [
  { value: '2026-08-21', day: 'FR', date: '21', label: 'Freitag, 21. August' },
  { value: '2026-08-22', day: 'SA', date: '22', label: 'Samstag, 22. August' },
  { value: '2026-08-23', day: 'SO', date: '23', label: 'Sonntag, 23. August' },
  { value: '2026-08-24', day: 'MO', date: '24', label: 'Montag, 24. August' },
];

const times = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

const zones = [
  { value: 'Surprise me', title: 'Surprise me', caption: 'Das Team findet den besten Spot für dich.' },
  { value: 'Window seat', title: 'Window seat', caption: 'Neonlicht, Straße und beste People-Watching-Position.' },
  { value: 'Crew table', title: 'Crew table', caption: 'Mehr Platz zum Teilen, Quatschen und Feed-en.' },
  { value: 'Bar spot', title: 'Bar spot', caption: 'Nah dran an Drinks, Bao und dem Küchen-Action.' },
];

export default function ReservationPage() {
  // Alle Auswahlwerte liegen bewusst in einem lokalen Formularzustand. So bleibt die
  // Vorschau synchron, ohne dass Datum, Crew und Zone jeweils eigene Form-Logik brauchen.
  const [date, setDate] = useState(dates[1].value);
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(4);
  const [zone, setZone] = useState(zones[0].value);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const selectedDate = useMemo(() => dates.find((item) => item.value === date), [date]);
  const reservation = { dateLabel: selectedDate.label, time, guests, zone };

  function adjustGuests(amount) {
    // Die Grenzen verhindern ungültige Werte im Demo-Flow. Ein späteres Backend kann
    // diese Regel zusätzlich gegen reale Tischkapazitäten validieren.
    setGuests((current) => Math.min(12, Math.max(1, current + amount)));
  }

  function submitReservation(event) {
    event.preventDefault();
    // Aktuell simuliert die Seite die erfolgreiche Reservierung. Hier kann später der
    // API-Aufruf angeschlossen werden; die Ticket-Ansicht bleibt davon entkoppelt.
    setIsConfirmed(true);
  }

  return (
    <div className="bg-zinc-950">
      <section className="relative overflow-hidden bg-zinc-900 px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <div className="pointer-events-none absolute -right-12 top-10 h-64 w-64 rounded-full border-[32px] border-pink-500/15" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-px w-1/2 bg-cyan-400/40" />
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-cyan-400">Reserve · Feed the Feed</p>
          <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
            <div>
              <h1 className="max-w-4xl text-6xl font-bold uppercase leading-[0.84] sm:text-8xl md:text-9xl">Secure your table.</h1>
              <p className="mt-8 max-w-xl text-xl font-bold leading-8 text-zinc-400 sm:text-2xl">Bring your crew. Wir servieren dir asiatisches Streetfood, Neonlicht und einen Abend, der im Feed bleibt.</p>
            </div>
            <div className="border-l-2 border-pink-500 pl-5 text-lg font-bold uppercase leading-7 text-pink-300">
              <p>Next drop</p>
              <p className="text-4xl text-white">FR — SUN</p>
              <p className="mt-2 text-sm text-zinc-500">Täglich ab 17:30 Uhr</p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10 md:py-20 lg:px-16">
        {isConfirmed ? (
          <ReservationTicket reservation={reservation} onReset={() => setIsConfirmed(false)} />
        ) : (
          <form onSubmit={submitReservation} className="grid gap-10 lg:grid-cols-[1fr_0.38fr] lg:items-start">
            <div>
              <ReservationProgress currentStep={3} />

              <fieldset className="mt-12">
                <legend className="text-4xl font-bold uppercase sm:text-5xl">Pick your night.</legend>
                <p className="mt-3 font-bold text-zinc-500">Wann soll dein Feed beginnen?</p>
                <div className="mt-7 grid grid-cols-4 gap-2 sm:gap-3">
                  {dates.map((item) => (
                    <button key={item.value} type="button" onClick={() => setDate(item.value)} className={`border p-3 text-left transition sm:p-4 ${date === item.value ? 'border-cyan-400 bg-cyan-400 text-zinc-950' : 'border-zinc-800 bg-zinc-900 hover:border-cyan-400'}`}>
                      <span className="block text-xs font-bold uppercase tracking-[0.16em]">{item.day}</span>
                      <span className="mt-2 block text-3xl font-bold sm:text-4xl">{item.date}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {times.map((item) => (
                    <button key={item} type="button" onClick={() => setTime(item)} className={`border px-3 py-2 text-sm font-bold transition ${time === item ? 'border-pink-400 bg-pink-500 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-pink-400 hover:text-white'}`}>{item}</button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-14">
                <legend className="text-4xl font-bold uppercase sm:text-5xl">Your crew.</legend>
                <p className="mt-3 font-bold text-zinc-500">Wie viele hungrige Menschen kommen?</p>
                <div className="mt-7 flex w-full max-w-sm items-center justify-between border border-zinc-800 bg-zinc-900 p-3">
                  <button type="button" onClick={() => adjustGuests(-1)} aria-label="Person entfernen" className="grid h-12 w-12 place-items-center bg-zinc-800 text-2xl font-bold hover:bg-cyan-400 hover:text-zinc-950">−</button>
                  <span className="text-3xl font-bold">{guests} <span className="text-base uppercase text-zinc-500">Personen</span></span>
                  <button type="button" onClick={() => adjustGuests(1)} aria-label="Person hinzufügen" className="grid h-12 w-12 place-items-center bg-zinc-800 text-2xl font-bold hover:bg-cyan-400 hover:text-zinc-950">+</button>
                </div>
              </fieldset>

              <fieldset className="mt-14">
                <legend className="text-4xl font-bold uppercase sm:text-5xl">Choose your zone.</legend>
                <p className="mt-3 font-bold text-zinc-500">Oder überlass uns den besten Spot.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {zones.map((item) => (
                    <ReservationOptionCard key={item.value} title={item.title} caption={item.caption} selected={zone === item.value} onClick={() => setZone(item.value)} />
                  ))}
                </div>
              </fieldset>

              <Button type="submit" variant="primary" className="mt-12 w-full px-6 py-5 text-xl shadow-[6px_6px_0_#22d3ee] sm:w-auto">Tisch reservieren →</Button>
            </div>

            <aside className="sticky top-6 border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
              <p className="font-bold uppercase tracking-[0.18em] text-cyan-400">Your table preview</p>
              <div className="my-6 h-px bg-zinc-800" />
              <dl className="space-y-5 text-sm font-bold">
                <div className="flex justify-between gap-4"><dt className="text-zinc-500">Datum</dt><dd className="text-right uppercase">{selectedDate.label}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-zinc-500">Zeit</dt><dd>{time} Uhr</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-zinc-500">Crew</dt><dd>{guests} Personen</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-zinc-500">Zone</dt><dd className="text-right">{zone}</dd></div>
              </dl>
              <div className="mt-8 border-l-2 border-pink-500 pl-4 text-sm font-bold leading-6 text-zinc-400">Für Gruppen ab 8 Personen oder besondere Anlässe schreib uns bitte vorher.</div>
            </aside>
          </form>
        )}
      </main>
    </div>
  );
}

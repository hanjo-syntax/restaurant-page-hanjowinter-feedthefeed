export default function ReservationTicket({ reservation, onReset }) {
  return (
    <section className="relative overflow-hidden border border-cyan-400 bg-cyan-400 p-6 text-zinc-950 shadow-[8px_8px_0_#ec4899] sm:p-10">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] border-zinc-950/10" />
      <p className="font-bold uppercase tracking-[0.18em] text-zinc-800">Feed the Feed · Reservation</p>
      <h2 className="mt-5 text-5xl font-bold uppercase leading-[0.9] sm:text-7xl">Table locked.</h2>
      <p className="mt-5 max-w-md text-lg font-bold leading-7 text-zinc-800">Dein Abend ist eingecheckt. Bring deine Crew, wir kümmern uns um den Rest.</p>

      <div className="my-8 grid gap-5 border-y border-zinc-950/20 py-6 sm:grid-cols-3">
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-700">Datum</p><p className="mt-1 text-xl font-bold uppercase">{reservation.dateLabel}</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-700">Zeit</p><p className="mt-1 text-xl font-bold">{reservation.time} Uhr</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-700">Crew</p><p className="mt-1 text-xl font-bold">{reservation.guests} Personen</p></div>
      </div>

      <p className="text-sm font-bold uppercase tracking-[0.12em] text-zinc-800">{reservation.zone} · Venloer Straße 214 · Köln</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={onReset} className="border-2 border-zinc-950 px-5 py-3 text-sm font-bold uppercase hover:bg-zinc-950 hover:text-cyan-300">Neue Reservierung</button>
        <a href="/visit" className="px-5 py-3 text-sm font-bold uppercase underline underline-offset-4">Anfahrt ansehen</a>
      </div>
    </section>
  );
}

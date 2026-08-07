const defaultOpeningHours = [
    {
        days: 'Dienstag – Donnerstag',
        hours: '17:00 - 23:00',
    },
    {
        days: 'Freitag – Samstag',
        hours: '17:00 - 01:00',
    },
    {
        days: 'Sonntag',
        hours: '15:00 - 22:00',
    },
    {
        days: 'Montag',
        hours: 'Geschlossen',
    }
];

export default function OpeningHours({
    title = "Öffnungszeiten",
    openingHours = defaultOpeningHours }) {
    return (
        <section>
            <h3 id="opening-hours-heading" className="text-3xl font-heading text-white">{title}</h3>
            <dl className="mt-5 text-sm">
                {openingHours.map(({ days, hours }) => (
                    <div key={days} className="flex items-center justify-between gap-6 py-3">
                        <dt className="text-lg font-bold text-zinc-300#">{days}</dt>
                        <dd className="shrink-0 text-lg font-black">{hours}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}

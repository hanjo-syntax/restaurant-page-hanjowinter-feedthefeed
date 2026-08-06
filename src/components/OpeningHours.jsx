const defaultOpeningHours = [
    {
        days: 'Tuesday - Thursday',
        hours: '17:00 - 23:00',
    },
    {
        days: 'Friday - Saturday',
        hours: '17:00 - 01:00',
    },
    {
        days: 'Sunday',
        hours: '15:00 - 22:00',
    },
    {
        days: 'Monday',
        hours: 'Closed',
    }
];

export default function OpeningHours({
    title = "Opening Hours",
    openingHours = defaultOpeningHours }) {
    return (
        <section>
            <h3 id="opening-hours-heading" className="text-3xl font-black text-white">{title}</h3>
            <dl className="mt-5 text-sm">
                {openingHours.map(({ days, hours }) => (
                    <div key={days} className="flex items-center justify-between gap-6 py-3">
                        <dt className="text-xs font-bold text-zinc-300#">{days}</dt>
                        <dd className="shrink-0 text-xs font-black">{hours}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}

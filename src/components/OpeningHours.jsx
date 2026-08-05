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

export default function OpeningHours({ openingHours = defaultOpeningHours }) {
    title = "Opening Hours",
    openingHours = defaultOpeningHours, }) {
    return (
        <secction aria-labledby="opening-hours-heading" className="opening-hours">
        <h2 id="opening-hours-heading" className="opening-hours__heading">{title}</h2>
        <dl className="opening-hours__list"></dl>
            {openingHours.map((days, hoursx) => (
                <div key={days} className="opening-hours__item">
                    <dt className="opening-hours__days">{days}</dt>
                    <dd className="opening-hours__hours">{hours}</dd>
                </div>
            ))}
        </section>
    );
}
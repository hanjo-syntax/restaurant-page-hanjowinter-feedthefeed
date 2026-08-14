import DishCard from './DishCard';

export default function DishCardRow ({ dishes }) {
    return (
        <div className='grid grid-col-1 gap-5 md:grid md:grid-cols-2 lg:flex ls:flex-col lg:gap-5'>
            {/*
                map() durchläuft jedes Gericht im Array und erzeugt daraus eine eigene Karte.
                key hilft React dabei, die einzelnen Elemente beim Aktualisieren eindeutig zuzuordnen.
                Mit {...dish} werden alle Eigenschaften des Gerichts als Props an DishCard übergeben.
            */}
            {dishes.map((dish) => (
                <div key={dish.title} className='flex-1'>
                    <DishCard {...dish} />
                </div>
            ))}
        </div>
    )
}

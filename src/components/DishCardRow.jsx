import DishCard from './DishCard';

export default function DishCardRow ({ dishes }) {
    return (
        <div className='flex flex-col gap-5 md:flex-row'>
            {dishes.map((dish) => (
                <div key={dish.title} className='flex-1'>
                    <DishCard {...dish} />
                </div>
            ))}
        </div>
    )
}
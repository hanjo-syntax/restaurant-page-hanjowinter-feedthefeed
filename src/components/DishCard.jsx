import Badge from './Badge';

export default function DishCard({ badgeKind, badgeColor, title, description, price, tags, imageUrl }) {  
    return (
        <>
        <article className="rounded-xl bg-zinc-900">
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <Badge color={badgeColor || "cyan"}>{ badgeKind }</Badge>
                </div>
                <div className='px-2 py-3'>
                <div className='flex items-start justify-between gap-4'>
                    <h3 className='text-2xl font-heading tracking-tight text-white'>{ title }</h3>
                </div>
                <p className='mt-3 text-xl font-bold leading-6 text-zinc-400'>{ description }</p>
                <span className='shrink-0 text-xl font-bold text-white'>{ price } €</span>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                    {tags.map((tag) => (
                        <span key={ tag } className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400">{ tag }</span>
                    ))}
                </div>
                </div>
            </div>
  
        </article>
        </>
    );
}

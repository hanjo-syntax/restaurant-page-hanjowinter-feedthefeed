import Badge from './Badge';

export default function DishCard({
    badgeKind,
    badgeColor,
    title,
    description,
    price,
    tags = [],
    imageUrl,
    variant = 'dark',
}) {
    const isLight = variant === 'light';

    return (
        <>
        <article className={`overflow-hidden rounded-xl ${isLight ? 'bg-zinc-100 text-zinc-950' : 'bg-zinc-900'}`}>
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="aspect-square h-full w-full object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                />
                {badgeKind && (
                    <div className="absolute left-4 top-4">
                        <Badge color={badgeColor || "cyan"}>{badgeKind}</Badge>
                    </div>
                )}
                <div className="px-4 py-5">
                <div className='flex items-start justify-between gap-4'>
                    <h3 className={`text-2xl font-heading tracking-tight ${isLight ? 'text-zinc-950' : 'text-white'}`}>{title}</h3>
                </div>
                <p className={`mt-3 text-base font-bold leading-6 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>{description}</p>
                <span className={`mt-4 block shrink-0 text-base font-bold ${isLight ? 'text-zinc-950' : 'text-white'}`}>{price} €</span>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                    {tags.map((tag) => (
                        <span key={tag} className={`text-[10px] font-bold uppercase tracking-[0.12em] ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>{tag}</span>
                    ))}
                </div>
                </div>
            </div>
  
        </article>
        </>
    );
}

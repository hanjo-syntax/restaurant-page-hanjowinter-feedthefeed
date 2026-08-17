import Badge from './Badge';

export default function DishCard({
    id,
    badgeKind,
    badgeColor = 'cyan',
    title,
    description,
    price,
    tags = [],
    imageUrl,
    variant = 'dark',
}) {
    const isLight = variant === 'light';

    return (
        <article className={`group flex flex-col overflow-hidden rounded-xl ${isLight ? 'bg-zinc-100 text-zinc-950' : 'bg-zinc-900 text-white'}`}>
            {/* Bild-Container mit eigenem Overflow-Schutz */}
            <div className="relative aspect-square w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-105"
                />
                {badgeKind && (
                    <div className="absolute left-4 top-4">
                        <Badge color={badgeColor}>{badgeKind}</Badge>
                    </div>
                )}
            </div>

            {/* Inhaltsbereich */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                    <a href={`/dish/${id}`} className="block focus:outline-none">
                        <h3 className={`text-2xl font-heading tracking-tight transition hover:underline ${isLight ? 'text-zinc-950' : 'text-white'}`}>
                            {title}
                        </h3>
                    </a>
                </div>

                <p className={`mt-3 flex-1 text-base leading-6 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {description}
                </p>

                <span className={`mt-4 block text-base font-bold ${isLight ? 'text-zinc-950' : 'text-white'}`}>
                    {price} €
                </span>

                {tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                        {tags.map((tag) => (
                            <span 
                                key={tag} 
                                className={`text-[10px] font-bold uppercase tracking-[0.12em] ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
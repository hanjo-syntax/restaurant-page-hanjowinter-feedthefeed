export default function IconFeature({ icon, lucidIcon: LucidIcon, label, caption }) {
    return (
        <article className="flex flex-1 flex-col items-center">
            {LucidIcon ? (
                <LucidIcon aria-label={label} className="w-30 h-30" />
            ) : (
                <img src={icon} alt={label} className="w-30 h-30 object-contain" />
            )}
            <h3 className="mt-5 text-2xl md:text-xl font-bold uppercase text-white">
                {label}
            </h3>
            <p className="mt-2 text-xl text-zinc-500 font-bold lg:text-m">
                {caption}
            </p>
        </article>
    );
}

export default function IconFeature({ icon, label, caption }) {
    return (
        <article className="flex flex-1 flex-col">
            <img src={icon} alt={label} className="w-30 h-30 object-contain" />
            <h3 className="mt-5 text-xl font-bold uppercase text-white">
                {label}
            </h3>
            <p className="mt-2 text-s text-zinc-500 font-bold">
                {caption}
            </p>
        </article>
    );
}
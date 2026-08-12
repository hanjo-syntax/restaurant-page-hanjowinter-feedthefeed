export default function Section({
    bg,
    eyebrow,
    title,
    id,
    children,
    hideHeader = false,
    className = 'my-10 px-6 sm:px-10 md:px-16 lg:px-24',
    contentClassName = 'mt-10',
}) {
    return (
        <section id={id} className={`${bg} ${className}`}>
            {!hideHeader && (
                <>
                    <p className="uppercase font-bold bg-linear-to-b from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                        {eyebrow}
                    </p>

                    <h2 className="text-3xl leading-tight font-bold uppercase sm:text-4xl md:text-6xl">
                        {title}
                    </h2>
                </>
            )}

            <div className={contentClassName}>
                {children}
            </div>
        </section>
    );
}

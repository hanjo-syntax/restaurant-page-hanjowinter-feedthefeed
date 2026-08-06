export default function SplitSection({ bg,eyebrow, title, description, image, imageAlt, reverse = false, children }) {
    return (
        <section className={`${bg} px-30 mx-0 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
                <p className="text-sm text-cyan-400 uppercase font-black mb-2">
                    { eyebrow }
                </p>
                <h2 className="text-7xl font-bold uppercase">
                    { title }
                </h2>
                <p className="mt-6 text-zinc-400">
                    { description }
                </p>

            </div>
            <div className="mt-6 w-full md:w-1/2">
                    {children}
            </div>
        </section>
    );
}
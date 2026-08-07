export default function Section({ bg, eyebrow, title, id, children }) {
    return (
        <section id={id} className={`${bg} my-10 flex flex-col px-6 sm:px-10 md:px-16 lg:px-24`}>
            
                <p className="text-cyan-400 uppercase font-bold">
                    { eyebrow }
                </p>
                
                <h2 className="text-3xl leading-tight font-bold uppercase sm:text-4xl md:text-6xl">
                    { title }
                </h2>
            
            <div className="mt-10">
                {children}
            </div>
        </section>
    );
}

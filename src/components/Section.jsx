export default function Section({ bg, eyebrow, title, id, children }) {
    return (
        <section id={id} className={`${bg} my-10 mx-2 flex flex-col px-0 sm:mx-4 md:mx-8 md:px-10 lg:px-30`}>
            
                <p className="text-cyan-400 uppercase font-black">
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

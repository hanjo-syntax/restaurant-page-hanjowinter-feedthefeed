export default function Section({ bg, eyebrow, title, id, children }) {
    return (
        <section id={id} className={`${bg} px-30 my-10 mx-8 flex flex-col md:flex-col `}>
            
                <p className="text-cyan-400 uppercase font-black">
                    { eyebrow }
                </p>
                
                <h2 className="text-6xl font-bold uppercase">
                    { title }
                </h2>
            
            <div className="mt-10">
                {children}
            </div>
        </section>
    );
}
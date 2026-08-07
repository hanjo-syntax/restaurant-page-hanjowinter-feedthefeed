export default function FooterColumn({ title, links }) {
    return ( 

        <section>
            <h4 className="text-2xl font-bold uppercase text-zinc-500">{title}</h4>
            <ul className="mt-4 space-y-3">
                {links.map((link, index) => (
                    <li key={index} className="">
                        <a href={link.href} className="text-l font-bold text-zinc-300 hover:text-cyan-400">{link.text}</a>
                    </li>
                ))}
            </ul>    
        </section>
    );
}   
export default function FooterColumn({ title, links }) {
    return ( 

        <div className="footer__column">
            <h4 className="footer__column-title">{title}</h4>
            <ul className="footer__column-links">
                {links.map((link, index) => (
                    <li key={index} className="footer__column-link">
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>    
        </div>
    );
}   
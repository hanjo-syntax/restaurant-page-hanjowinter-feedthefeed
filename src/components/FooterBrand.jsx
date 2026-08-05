export default function FooterBrand({ name, tagline }) {
    return (
        <div className="footer__brand-column">
            <a href="#home" className="footer__brand">{ name }</a>
            <p className="footer__brand-description">{ tagline }</p>
        </div>
    );
}

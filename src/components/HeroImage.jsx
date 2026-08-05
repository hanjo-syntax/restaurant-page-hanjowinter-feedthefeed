export default function HeroImage({ 
        src = '/assets/images/hero.jpg',
        alt = "Hero Image",
        badge = 'Most shared'
    }) {
    return (
        <figure className="hero-image">
            <img src={src} alt={alt} className="hero-image__img" />
            {badge && <figcaption className="badge">{badge}</figcaption>}
        </figure>
    );
}

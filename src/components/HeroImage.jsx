export default function HeroImage({ 
        src = '/images/korean-tofu-rice-bowl.png',
        alt = "Hero Image",
        badge = 'Most shared'
    }) {
    return (
        <figure className="relative overflow-hidden rounded-sm">
            <img src={src} alt={alt} className="aspect-[1.32] h-full w-full object-cover" />
        </figure>
    );
}

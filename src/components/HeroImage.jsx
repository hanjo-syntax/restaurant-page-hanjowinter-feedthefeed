export default function HeroImage({
    src = "/images/korean-tofu-rice-bowl.png",
    alt = "Gericht von Feed the Feed",
    animate = false,
}) {
    return (
        <figure
            className={`relative overflow-hidden rounded-sm ${
                animate ? "animate-neon-pulse" : ""
            }`}
        >
            <img
                src={src}
                alt={alt}
                className="aspect-[1.32] h-full w-full object-cover"
            />
        </figure>
    );
}
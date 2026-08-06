export default function ImageRow( {images} ) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image) => (
            <figure
            key={image.src}
            className="aspect-square w-[72vw] shrink-0 overflow-hidden rounded-md sm:w-[30vw] lg:w-[19%]"
            >
            <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
            </figure>
        ))}
        </div>
    );
}
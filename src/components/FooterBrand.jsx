export default function FooterBrand({ name, tagline }) {
    return (
        <div>
            <a href="#home" className="text-base font-black uppercase text-white">{ name }</a>
            <p className="mt-4 text-zinc-500">{ tagline }</p>
        </div>
    );
}

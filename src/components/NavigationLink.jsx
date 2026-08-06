export default function NavigationLink({ href, linkText }) {
    
    return (
        <a href={ href } className="text-xs font-bold text-zinc-300 hover:text-pink-500">
            { linkText }
        </a>
    );
}   
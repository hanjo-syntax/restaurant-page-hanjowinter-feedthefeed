export default function NavigationLink({ href, linkText }) {
    
    return (
        <a href={ href } className="text-xl font-bold text-zinc-300 pb-2 hover:text-yellow-300 hover:border-b hover:border-yellow-300 hover:pb-2">
            { linkText }
        </a>
    );
}   
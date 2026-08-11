import { Link } from "react-router";
export default function NavigationLink({ to, label }) {
    
    return (
        <Link to={to} className="text-xl font-bold text-zinc-300 pb-2 hover:text-yellow-300 hover:border-b hover:border-yellow-300 hover:pb-2">
            { label }
        </Link>
    );
}   

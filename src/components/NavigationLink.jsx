import { NavLink } from "react-router";
export default function NavigationLink({ to, label }) {
    
    return (
        <NavLink
            to={to}
            className={({isActive}) =>
                isActive ? "text-xl font-bold text-pink-500 pb-2 hover:text-yellow-300 hover:border-b hover:border-yellow-300 hover:pb-2"
                           : "text-xl font-bold text-zinc-500 pb-2 hover:text-yellow-300 hover:border-b hover:border-yellow-300 hover:pb-2" 
                }    
            >
            { label }
        </NavLink>
    );
}   

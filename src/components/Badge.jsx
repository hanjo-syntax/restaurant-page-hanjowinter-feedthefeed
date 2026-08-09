export default function Badge({ children, color='yellow' }) {
    const colors = {
        yellow: 'bg-linear-to-b from-yellow-400 to-yellow-200 text-black',
        cyan: 'bg-linear-to-b from-cyan-400 to-cyan-200 text-black',
        pink: 'bg-linear-to-b from-pink-500 to-pink-200 text-white',
        green: "bg-linear-to-b from-green-400 to-green-300 text-black"
    };
    return (
        <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase ${colors[color]}`}>
            { children }
        </span>
    );
}
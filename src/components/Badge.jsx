export default function Badge({ children, color='yellow' }) {
    const colors = {
        yellow: 'bg-yellow-500 text-black',
        cyan: 'bg-cyan-400 text-black',
        pink: 'bg-pink-500 text-white',
    };
    return (
        <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase ${colors[color]}`}>
            { children }
        </span>
    );
}
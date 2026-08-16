export default function ReservationOptionCard({ title, caption, selected, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`group w-full border p-4 text-left transition sm:p-5 ${selected ? 'border-pink-400 bg-pink-500/10 shadow-[0_0_24px_rgba(236,72,153,0.16)]' : 'border-zinc-800 bg-zinc-900 hover:border-cyan-400'}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-bold uppercase text-white">{title}</p>
          <p className="mt-1 text-sm font-bold leading-6 text-zinc-500 group-hover:text-zinc-300">{caption}</p>
        </div>
        <span className={`mt-1 h-4 w-4 shrink-0 rounded-full border ${selected ? 'border-pink-300 bg-pink-400' : 'border-zinc-600'}`} />
      </div>
      {children}
    </button>
  );
}

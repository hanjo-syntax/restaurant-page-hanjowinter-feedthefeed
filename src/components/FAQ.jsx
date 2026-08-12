export default function FAQ({ items }) {
  return (
    <div className="max-w-4xl border-t border-zinc-800">
      {items.map(({ question, answer }) => (
        <details key={question} className="group border-b border-zinc-800 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-bold uppercase sm:text-2xl">
            {question}
            <span className="text-cyan-400 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-2xl pt-4 text-lg font-bold leading-7 text-zinc-500">{answer}</p>
        </details>
      ))}
    </div>
  );
}

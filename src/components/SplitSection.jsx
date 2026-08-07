export default function SplitSection({
  bg,
  eyebrow,
  title,
  reverse = false,
  leftContent,
  children,
}) {
  return (
    <section className={`${bg} flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex w-full flex-col justify-center p-5 sm:p-8 md:w-1/2">
        <p className="mb-2 text-sm font-black uppercase text-cyan-400">
          {eyebrow}
        </p>

        <h2 className="text-4xl leading-tight font-bold uppercase sm:text-5xl md:text-7xl">
          {title}
        </h2>

        {leftContent}

      </div>

      <div className="w-full p-5 sm:p-8 md:w-1/2">
        {children}
      </div>
    </section>
  );
}

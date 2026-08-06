export default function SplitSection({
  bg,
  eyebrow,
  title,
  description,
  reverse = false,
  leftContent,
  children,
}) {
  return (
    <section className={`${bg} px-30 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
        <p className="mb-2 text-sm font-black uppercase text-cyan-400">
          {eyebrow}
        </p>

        <h2 className="text-7xl font-bold uppercase">
          {title}
        </h2>

        {leftContent}

      </div>

      <div className="w-full p-8 md:w-1/2">
        {children}
      </div>
    </section>
  );
}
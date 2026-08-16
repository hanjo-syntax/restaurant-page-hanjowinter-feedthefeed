const variants = {
  // Der cyanfarbene Offset ist das wiederkehrende Neon-Motiv der Reservierungsseite.
  // Jede Variante behält trotzdem ihre eigene Bedeutung und Kontraststufe.
  primary: 'bg-pink-500 text-white shadow-[4px_4px_0_#22d3ee] hover:bg-pink-400 hover:shadow-[5px_5px_0_#22d3ee]',
  primaryLight: 'border-2 border-pink-400 bg-transparent text-white shadow-[4px_4px_0_#22d3ee] hover:bg-pink-500 hover:text-zinc-950',
  secondary: 'bg-zinc-800 text-zinc-100 shadow-[4px_4px_0_#22d3ee] hover:bg-cyan-400 hover:text-zinc-950',
};

export default function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const styles = `inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-bold uppercase transition ${
    variants[variant]
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  );
}

const variants = {
  primary: 'bg-pink-500 text-white hover:bg-pink-400',
  secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}) {
  const styles = `inline-flex items-center justify-center rounded-md px-5 py-3 text-xs font-black ${
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
    <button type="button" className={styles}>
      {children}
    </button>
  );
}
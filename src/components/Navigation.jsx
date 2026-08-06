import { useState } from 'react';
import NavigationLink from './NavigationLink';

export default function Navigation({ items  }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative">
            <button
                type="button"
                className="rounded border border-zinc-700 px-3 py-2 text-xs font-bold uppercase text-zinc-300 md:hidden"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label="Navigation öffnen"
                onClick={() => setIsOpen((open) => !open)}
            >
                Menü
            </button>

            <div className="hidden items-center gap-7 md:flex">
                {items.map((item) => (
                    <NavigationLink key={item.href} href={item.href} linkText={item.linkText} />
                ))}
            </div>

            {isOpen && (
                <div id="mobile-navigation" className="absolute right-0 top-full z-10 mt-3 flex min-w-40 flex-col gap-4 rounded bg-zinc-900 p-5 shadow-lg md:hidden">
                    {items.map((item) => (
                        <NavigationLink
                            key={item.href}
                            href={item.href}
                            linkText={item.linkText}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </div>
            )}
        </nav>
    );
}

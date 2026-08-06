import NavigationLink from './NavigationLink';

export default function Navigation({ items  }) {
    return (
        <div className="hidden items-center gap-7 md:flex">
                {items.map((item) => (
                    <NavigationLink key={item.href} href={item.href} linkText={item.linkText} />
                ))}
        </div>
    );
}


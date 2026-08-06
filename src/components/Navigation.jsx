import NavigationLink from './NavigationLink';

export default function Navigation({ items  }) {
    return (
        <div className="hidden items-center gap-7 md:flex">
                {items.map((item, index) => (
                    <NavigationLink href={item.href} linkText={item.linkText} />
                ))}
        </div>
    );
}



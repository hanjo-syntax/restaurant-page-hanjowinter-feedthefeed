import NavigationLink from './NavigationLink';

export default function Navigation({ items  }) {
    return (
        <div aria-label="Navigation">
                {items.map((item, index) => (
                    <NavigationLink href={item.href} linkText={item.linkText} />
                ))}
        </div>
    );
}



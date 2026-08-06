import IconFeature from './IconFeature';

export default function IconFeatureRow({ items }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
      {items.map((item) => (
        <IconFeature
          key={item.label}
          icon={item.icon}
          label={item.label}
          caption={item.caption}
        />
      ))}
    </div>
  );
}

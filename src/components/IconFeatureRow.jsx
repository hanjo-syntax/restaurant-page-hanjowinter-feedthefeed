import IconFeature from './IconFeature';

export default function IconFeatureRow({ items }) {
  return (
    <div className="flex flex-row flex-wrap gap-6">
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
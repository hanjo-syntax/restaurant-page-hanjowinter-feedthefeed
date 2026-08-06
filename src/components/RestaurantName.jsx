export default function RestaurantName({ 
    name = 'Feed the Feed',
    description = 'Eat it, Post it, Feed the Feed' }) {
  return (
    <div>
      <a href="/" className="text-sm font-black uppercase text-white">{name}</a>
      <p className="sr-only">{description}</p>
    </div>
  );
}

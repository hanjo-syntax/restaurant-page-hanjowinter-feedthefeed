export default function RestaurantName({ 
    name = 'Feed the Feed',
    description = 'Iss es, poste es, füttere den Feed' }) {
  return (
    <div>
      <a href="/" className="text-sm font-black uppercase text-white">{name}</a>
      <p className="sr-only">{description}</p>
    </div>
  );
}

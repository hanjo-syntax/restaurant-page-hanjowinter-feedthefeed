export default function RestaurantName({ 
    name = 'Feed the Feed',
    description = 'Eat it, Post it, Feed the Feed' }) {
  return (
    <div className="restaurant-name-block">
      <h1 className="restaurant-name">{name}</h1>
      <p className="restaurant-description">{description}</p>
    </div>
  );
}

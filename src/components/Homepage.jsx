import DishCard from './DishCard';
import HeroSection from './HeroSection';
import OpeningHours from './OpeningHours';
  
export default function HomePage() {  
  return (  
    <div>
      <header className="header">
      <div className="header__content">
          <HeroSection />
      </div>
    </header>
    <main>
      <section>
        <div className="section__content">

          <OpeningHours />
        </div>
      </section>
<section>
    <DishCard kind="Appetizer" title="Caesar Salad" description="Fresh romaine lettuce with Caesar dressing" price="$8.99" tags={['Vegetarian']} imageUrl="/images/caesar-salad.jpg" />
</section>

      </main>
    </div>
  );  
}
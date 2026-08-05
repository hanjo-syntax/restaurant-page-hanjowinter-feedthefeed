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

      </main>
    </div>
  );  
}
import WelcomeText from './WelcomeText';
import HeroImage from './HeroImage';
import heroImage from '../assets/hero.png';
import RestaurantName from './RestaurantName';

export default function HeroSection({
    heroImageSrc = heroImage,
    heroImageAlt = 'Hero Image',
    heroImageBadge = 'Most shared',
    WelcomeTextEyebrow = 'Welcome to Feed the Feed',
    WelcomeTextTitle = 'Eat it, Post it, Feed the Feed',
    WelcomeTextDescription = 'Feed the Feed is a restaurant that serves delicious food and drinks. We are located in the heart of the city and we are open every day.'
}) {
    return (
        <section className="hero-section">
            <div className="hero-section__content">
                <RestaurantName />
                <WelcomeText
                    eyebrow={WelcomeTextEyebrow}
                    title={WelcomeTextTitle}
                    description={WelcomeTextDescription}
                />
            </div>
            <HeroImage src={heroImageSrc} alt={heroImageAlt} badge={heroImageBadge} />
        </section>
    );
}

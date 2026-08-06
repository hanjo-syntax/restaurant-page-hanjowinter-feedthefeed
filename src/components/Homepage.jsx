import DishCard from './DishCard';
import HeroSection from './HeroSection';
import RestaurantName from './RestaurantName';
import OpeningHours from './OpeningHours';
import Navigation from './Navigation';  
import Section from './Section';
import SplitSection from './SplitSection';
import IconFeatureRow from './IconFeatureRow';
import DishCarRow from './DishCardRow';

export default function HomePage() {  
  return (  
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-1000 selection:bg:bg-pink-500 selection:text-white">
      <header className="mx-auto flex max-w-6x1 items-center justify-between px-6 py-6 ls:px-18">
        <RestaurantName/>
        <Navigation items={[
          { href: '#home', linkText: 'Home' },
          { href: '#menu', linkText: 'Menu' },
          { href: '#feed', linkText: 'The Feed' },
          { href: '#drops', linkText: 'Drops' },
          { href: '#visit', linkText: 'Visit' }
        ]} />
      </header>
      <main className="mx-auto max-w-6x1 px-6 py-6 ls:px-10">
        <HeroSection/>

        <SplitSection bg="bg-zinc-900" eyebrow="The Concept" 
        title="It's not just dinner. It's content."
        image="/images/concept-image.png"
        imageAlt="Concept Image"
        description="FEED THE FEED combines bold Asian street food, changing creator collaborations and immersive photo spots. Every dish is designed to taste good before and after the camera comes out."
        >
          <IconFeatureRow
            items={[
              {
                icon: '/images/neon-noodle-bowl-illustration.png',
                label: 'Bold Asian Street Food',
                caption:
                  'Our menu is inspired by the bold flavors of Asian street food, with a focus on fresh ingredients and unique flavor combinations.',
              },
              {
                icon: '/images/neon-sushi-bowl-illustration.png',
                label: 'Changing Creator Collaborations',
                caption:
                  'We collaborate with different creators to bring you new and exciting dishes that are designed to be shared and enjoyed.',
              },
              {
                icon: '/images/neon-camera-illustration.png',
                label: 'Immersive Photo Spots',
                caption:
                  'Our restaurant is designed to be a visual experience, with immersive photo spots that are perfect for capturing your dining experience.',
              },
            ]}
          />
        </SplitSection>
        <Section bg="none" 
        eyebrow="Trending now" 
        title="The dishes taking over your feed" 
        description="Check out the latest dishes that are trending on your feed.">

          
        </Section>
      </main>
    </div>
  );  
}
import HeroSection from './HeroSection';
import HeroImage from './HeroImage';
import RestaurantName from './RestaurantName';
import OpeningHours from './OpeningHours';
import Navigation from './Navigation';  
import Section from './Section';
import SplitSection from './SplitSection';
import IconFeatureRow from './IconFeatureRow';
import DishCardRow from './DishCardRow';
import ImageRow from './ImageRow';
import Footer from './Footer';
import Button from './Button';
const dishes = [
            {
              badgeKind: 'Trending',
              badgeColor:'yellow',
              title: 'K-Pop Crunch Bao',
              description:'Crispy, Kimchi. sesame and neon mayo',
              price: '8,50', tags:['vegan', 'spicy'],
              imageUrl:'/images/korean-fried-cauliflower-bao.png'
            },
            {
              badgeKind: 'CREATOR',
              badgeColor:'cyan',
              title: 'Tiger Ramen',
              description:'Crispy, Kimchi. sesame and neon mayo',
              price: '8,50', tags:['vegan', 'spicy'],
              imageUrl:'/images/spicy-corn-ramen-bowl.png'
            },
              {
              badgeKind: 'vegan',
              badgeColor:'green',
              title: 'Seoul Glow Bowl',
              description:'Crispy, Kimchi. sesame and neon mayo',
              price: '8,50', tags:['vegan', 'spicy'],
              imageUrl:'/images/korean-tofu-rice-bowl.png'
            },
          ];

const feedImages = [
  {
    src: '/images/pink-coconut-ramen-tofu-bowl.png',
    alt: 'Pink coconut ramen bowl',
  },
  {
    src: '/images/matcha-cheesecake-pink-cocktail.png',
    alt: 'Matcha cheesecake and cocktail',
  },
  {
    src: '/images/korean-tofu-rice-bowl-top-view.png',
    alt: 'Korean tofu rice bowl',
  },
  {
    src: '/images/korean-fried-cauliflower-bao-pair.png',
    alt: 'Korean fried cauliflower bao',
  },
  {
    src: '/images/neon-restaurant-table-pink-cocktail.png',
    alt: 'Neon restaurant table',
  },
];

export default function HomePage() {  
  return (  
    <div className="min-h-screen min-w-full bg-zinc-950 font-sans text-zinc-100 selection:bg-pink-500 selection:text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10 lg:max-w-full">
        <RestaurantName/>
        <Navigation items={[
          { href: '#home', linkText: 'Home' },
          { href: '#menu', linkText: 'Menu' },
          { href: '#feed', linkText: 'The Feed' },
          { href: '#drops', linkText: 'Drops' },
          { href: '#visit', linkText: 'Visit' }
        ]} />
      </header>
      <main className="mx-auto px-6 py-6 lg:max-w-9xl lg:px-10">
        <HeroSection/>

        <SplitSection bg="bg-zinc-900" eyebrow="The Concept" 
        title="It's not just dinner. It's content."
          leftContent={
              <div className="mt-6">
                <p className="text-xl text-zinc-500 font-bold">
                  FEED THE FEED combines bold Asian street food, changing creator collaborations and immersive photo spots. Every dish is designed to taste good before and after the camera comes out.
                </p>
              </div>
          }
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
                label: 'Creator Collaborations',
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

          <DishCardRow dishes = {dishes}
          />
        </Section>
        <SplitSection
          bg="bg-zinc-900"
          eyebrow="Limited Creator Drop"
          title="MiaMiso x Feed the Feed"
          description="Nur für kurze Zeit erhältlich."
          reverse='true'
          leftContent={
            <div className="mt-6">
              <h3 className="text-xl font-black text-pink-400">
                Pink Miso Ramen
              </h3>
              <p className='text-zinc-500 py-3'>
                Creamy pink miso broth with chilli oil, crispy tofu, pak choi and beetroot noodles.
              </p>
                <Button href="#book" variant="primary">
                    Book a Table
                </Button> 
            </div>
          }
        >
          <HeroImage 
            src='/images/pink-coconut-ramen-tofu-bowl.png'
            alt='Pink Miso Ramen'
            badge='Limited to 500 bownls'
          />

        </SplitSection>

        <Section
          id="feed"
          bg="bg-transparent"
          eyebrow="The Feed"
          title="Tag @feedthefeed.cgn or use #FeedTheFeed to get featured"
        >
          <ImageRow images={feedImages} />
        </Section>

        <SplitSection
          bg="bg-transparent"
          eyebrow="Visit us"
          title="Find us"
          reverse='false'
          leftContent={
            <div className="mt-6">
              <p className='text-white py-3'>
                FEED THE FEED<br/>
                Venloer Straße 214<br/>
                50823 Cologne, Germany  
              </p>
              <OpeningHours/>
            </div>
          }
        >
          <HeroImage 
            src='/images/restaurant-location-map-ehrenfeld.png'
            alt='Location Map of our Restaurant'
            badge='-'
          />

        </SplitSection>
        <Footer />
      </main>
    </div>
  );  
}

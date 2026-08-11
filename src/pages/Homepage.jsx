import HeroSection from '../components/HeroSection';
import HeroImage from '../components/HeroImage';
import OpeningHours from '../components/OpeningHours';
import Header from '../components/Header';
import Section from '../components/Section';
import SplitSection from '../components/SplitSection';
import IconFeatureRow from '../components/IconFeatureRow';
import DishCardRow from '../components/DishCardRow';
import ImageRow from '../components/ImageRow';
import Footer from '../components/Footer';
import Button from '../components/Button';

import {
  navigationLinks,
  socialLinks,
} from '../data/navigation';

// Items für die IconRow in der Konzept Section
const iconRowItems = [
              {
                icon: '/images/neon-noodle-bowl-illustration.png',
                label: 'Kräftiges asiatisches Streetfood',
                caption:
                  'Unsere Speisekarte ist von den kräftigen Aromen asiatischen Streetfoods inspiriert – mit frischen Zutaten und einzigartigen Geschmackskombinationen.',
              },
              {
                icon: '/images/neon-sushi-bowl-illustration.png',
                label: 'Creator-Kooperationen',
                caption:
                  'Wir arbeiten mit verschiedenen Creators zusammen und bringen dir neue, aufregende Gerichte zum Teilen und Genießen.',
              },
              {
                icon: '/images/neon-camera-illustration.png',
                label: 'Immersive Fotospots',
                caption:
                  'Unser Restaurant ist ein visuelles Erlebnis – mit immersiven Fotospots, die deine kulinarischen Momente perfekt festhalten.',
              },
];

// Daten der Gerichte in der Trend Section
const dishes = [
            {
              badgeKind: 'Im Trend',
              badgeColor:'yellow',
              title: 'K-Pop Crunch Bao',
              description:'Knusprig, Kimchi, Sesam und Neon-Mayo',
              price: '8,50', tags:['vegan', 'scharf'],
              imageUrl:'/images/korean-fried-cauliflower-bao.png'
            },
            {
              badgeKind: 'CREATOR',
              badgeColor:'cyan',
              title: 'Tiger Ramen',
              description:'Knusprig, Kimchi, Sesam und Neon-Mayo',
              price: '8,50', tags:['vegan', 'scharf'],
              imageUrl:'/images/spicy-corn-ramen-bowl.png'
            },
              {
              badgeKind: 'VEGAN',
              badgeColor:'green',
              title: 'Seoul Glow Bowl',
              description:'Knusprig, Kimchi, Sesam und Neon-Mayo',
              price: '8,50', tags:['vegan', 'scharf'],
              imageUrl:'/images/korean-tofu-rice-bowl.png'
            },
];

// Bilder für die Feed Section
const feedImages = [
          {
            src: '/images/pink-coconut-ramen-tofu-bowl.png',
            alt: 'Ramen-Schale mit rosa Kokosbrühe',
          },
          {
            src: '/images/matcha-cheesecake-pink-cocktail.png',
            alt: 'Matcha-Käsekuchen und Cocktail',
          },
          {
            src: '/images/korean-tofu-rice-bowl-top-view.png',
            alt: 'Koreanische Tofu-Reisschale',
          },
          {
            src: '/images/korean-fried-cauliflower-bao-pair.png',
            alt: 'Koreanische Bao mit frittiertem Blumenkohl',
          },
          {
            src: '/images/neon-restaurant-table-pink-cocktail.png',
            alt: 'Restauranttisch mit Neonbeleuchtung',
          },
];

export default function HomePage() {  
  return (  
    <div className="min-h-screen min-w-full bg-zinc-950 font-sans text-zinc-100 selection:bg-pink-500 selection:text-white">
      <Header />
      <main className="py-6">
        <HeroSection/>

        <SplitSection bg="bg-zinc-900" eyebrow="Das Konzept" 
        title="Es ist nicht nur Abendessen. Es ist Content."
          leftContent={
              <div className="mt-6">
                <p className="text-xl text-zinc-500 font-bold">
                  FEED THE FEED verbindet kräftiges asiatisches Streetfood, wechselnde Creator-Kooperationen und immersive Fotospots. Jedes Gericht schmeckt gut – vor und nach dem Auslösen der Kamera.
                </p>
              </div>
          }
        >
          <IconFeatureRow
            items={iconRowItems}
          />
        </SplitSection>
        <Section bg="none" 
        eyebrow="Jetzt im Trend" 
        title="Diese Gerichte erobern deinen Feed" 
        description="Entdecke die neuesten Gerichte, die gerade in deinem Feed im Trend liegen.">

          <DishCardRow dishes = {dishes}
          />
        </Section>
        <SplitSection
          bg="bg-zinc-900"
          eyebrow="Limitierter Creator-Drop"
          title="MiaMiso x Feed the Feed"
          description="Nur für kurze Zeit erhältlich."
          reverse='true'
          leftContent={
            <div className="mt-6">
              <h3 className="text-xl font-blac bg-linear-to-b from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                Pinkes Miso-Ramen
              </h3>
              <p className='text-zinc-500 py-3'>
                Cremige pinke Miso-Brühe mit Chiliöl, knusprigem Tofu, Pak Choi und Rote-Bete-Nudeln.
              </p>
                <Button href="#book" variant="primary">
                    Tisch reservieren
                </Button> 
            </div>
          }
        >
          <HeroImage 
            src='/images/pink-coconut-ramen-tofu-bowl.png'
            alt='Pinkes Miso-Ramen'
            badge='Auf 500 Schalen limitiert'
          />

        </SplitSection>

        <Section
          id="feed"
          bg="bg-transparent"
          eyebrow="Der Feed"
          title="Markiere @feedthefeed.cgn oder nutze #FeedTheFeed, um vorgestellt zu werden"
        >
          <ImageRow images={feedImages} />
        </Section>

        <SplitSection
          bg="bg-transparent"
          eyebrow="Besuche uns"
          title="So findest du uns"
          reverse='false'
          leftContent={
            <div className="mt-6">
              <p className='text-zinc-400 py-3 font-bold text-xl'>
                FEED THE FEED<br/>
                Venloer Straße 214<br/>
                50823 Köln, Deutschland<br/><br/>
                <i>
                Fünf Minuten vom Bahnhof Ehrenfeld.<br />
                Linien 3, 4 und 13 halten ganz in der Nähe.
                </i>  
              </p>
              <OpeningHours/>
            </div>
          }
        >
          <HeroImage 
            src='/images/restaurant-location-map-ehrenfeld.png'
            alt='Lageplan unseres Restaurants'
            badge='-'
          />

        </SplitSection>
        <Footer 
            navigationLinks={navigationLinks}
            socialLinks={socialLinks}
        />
      </main>
    </div>
  );  
}

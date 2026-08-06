import WelcomeText from './WelcomeText';
import HeroImage from './HeroImage';
import RestaurantName from './RestaurantName';

export default function HeroSection({
    heroImageSrc = '/images/korean-tofu-rice-bowl.png',
    heroImageAlt = 'Hero Image',
    heroImageBadge = 'Most shared',
    WelcomeTextEyebrow = 'Welcome to Feed the Feed',
    WelcomeTextTitle = 'Eat it.Post it. Feed the Feed.',
    WelcomeTextDescription = 'Feed the Feed is a restaurant that serves delicious food and drinks. We are located in the heart of the city and we are open every day.'
}) {
    return (
        <section className="flex flex-1 flex-row items-center justify-center gap-12 py-16 px-40">
            <div className="w-full">
                <WelcomeText
                    eyebrow={WelcomeTextEyebrow}
                    title={WelcomeTextTitle}
                    description={WelcomeTextDescription}
                />
            <div className="mt-8 flex flex-wrap itelms-center gap-4">
                <a href="#" className="rounded-lg bg-pink-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-600">
                    Book a Table
                </a>
                <a href="#" className="rounded-lg border border-pink-500 px-6 py-3 text-sm font-semibold text-pink-500 transition-colors hover:bg-pink-500 hover:text-white">
                    Explore the Menu
                </a>
            </div>
            <p className="mt-7 text-xs font-semibold text-zinc-500">#feedthefeed - #feedthefeed.cgn</p>
            </div>
            <div className="w-full ">
                <HeroImage src={heroImageSrc} alt={heroImageAlt} badge={heroImageBadge} />
            </div>
        </section>
    );
}

import WelcomeText from './WelcomeText';
import HeroImage from './HeroImage';
import Button from './Button';

export default function HeroSection({
    heroImageSrc = '/images/korean-tofu-rice-bowl.png',
    heroImageAlt = 'Gericht von Feed the Feed',
    heroImageBadge = 'Am meisten geteilt',
    WelcomeTextEyebrow = 'Willkommen bei Feed the Feed',
    WelcomeTextTitle = 'Eat it. Post it. Feed the Feed.',
    WelcomeTextDescription = 'Feed the Feed ist ein Restaurant mit köstlichem Essen und leckeren Drinks. Wir liegen im Herzen der Stadt und haben jeden Tag geöffnet.'
}) {
    return (
        <section className="flex flex-1 flex-col items-center justify-center gap-8 py-10 md:flex-row md:gap-12 md:py-16 md:px-10">
            <div className="w-full">
                <WelcomeText
                    eyebrow={WelcomeTextEyebrow}
                    title={WelcomeTextTitle}
                    description={WelcomeTextDescription}
                />
            <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#book" variant="primary" className='animate-pulse'>
                    Tisch reservieren
                </Button> 
                <Button href="#Menu" variant="primaryLight">
                    Speisekarte entdecken
                </Button>
            </div>
            <p className="mt-7 text-xs font-semibold text-zinc-500">#feedthefeed - #feedthefeed.cgn</p>
            </div>
            <div className="w-full ">
                <HeroImage src={heroImageSrc} alt={heroImageAlt} badge={heroImageBadge} animate/>
            </div>
        </section>
    );
}

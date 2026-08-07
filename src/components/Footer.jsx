import FooterBrand from "./FooterBrand";
import FooterColum from "./FooterColumn";
import SubscribeForm from "./SubscribeForm";

const navigationLinks = [
    { href: '#home', text: 'Home' },
    { href: '#menu', text: 'Menu' },
    { href: '#feed', text: 'The feed' },
    { href: '#drops', text: 'Drops' },
    { href: '#visit', text: 'visit' },
]

const socialLinks = [
    { href: '#instagram', text: 'Instagram' },
    { href: '#tiktok', text: 'TikTok' },
    { href: '#youtube', text: 'YouTube' },
]

export default function Footer() {
    return (
        <footer className="mt-8 bg-zinc-900">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-6 py-14 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:px-10">
                <FooterBrand
                    name="Feed the Feed"
                    tagline="Asian street food. Made to share. Made to trend." />
                <FooterColum title="Navigation" links={ navigationLinks } />
                <FooterColum title="Social" links={ socialLinks } />
            

                <div className="sm:min-w-56">
                    <p className="text-sm font-black uppercase text-zinc-500">
                        Stay in the loop
                    </p>
                    <p className="mt-4 text-xs text-zinc-500">
                        Get drops, news and exclusive offers.
                    </p>
                    <SubscribeForm />
                </div>

            </div>
            <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-zinc-800 p-6 font-bold text-zinc-500 lg:px-10">
                <span>(C) 2026 FEED THE FEED</span>
                <span>IMPRINT - PRIVACY - ALLERGENES</span>
            </div>
        </footer>
    )
}

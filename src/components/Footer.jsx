import FooterBrand from "./FooterBrand";
import FooterColum from "./FooterColumn";
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
                    <form className="mt-4 flex gap-2">
                        <label className="sr-only" htmlFor="footer-email">Email address</label>
                        <input id="footer-email" type="email" placeholder="Email address"
                        className="min-w-0 flex-1 rounded-sm border border-zinc-700 bg-zinc-950 px-3 py-2 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-cyan-400"
                        />
                        <button type="submit" className="rounded-sm bg-pink-500 px-3 text-xs font-black text-white hover:bg-pink-400">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>
            <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-zinc-800 p-6 font-bold text-zinc-500 lg:px-10">
                <span>(C) 2026 FEED THE FEED</span>
                <span>IMPRINT - PRIVACY - ALLERGENES</span>
            </div>
        </footer>
    )
}

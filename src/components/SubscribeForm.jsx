
import Button from "./Button"

export default function SubscribeForm ({ children}) {
    return (
            <form className="mt-4 flex gap-2">
                        <label className="sr-only" htmlFor="footer-email">Email address</label>
                        <input id="footer-email" type="email" placeholder="Email address"
                        className="min-w-0 flex-1 rounded-sm border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-cyan-400"
                        />
                        <Button >
                            Subscribe
                        </Button>
            </form>
    )
}
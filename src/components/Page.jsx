import Header from "./Header";
import Footer from "./Footer";
import { navigationLinks, socialLinks, legalLinks } from '../data/navigation';
export default function Page({ header = true, footer = true, Content }) {
  return (
    <div>
      {header && <Header />}

      <main>
        <Content />
      </main>

      {footer && (
        <Footer
          navigationLinks={navigationLinks}
          socialLinks={socialLinks}
          legalLinks={legalLinks}
        />
      )}
    </div>
  );
}

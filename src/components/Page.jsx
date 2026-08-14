import Header from "./Header";
import Footer from "./Footer";
import { navigationLinks, socialLinks, legalLinks } from '../data/navigation';
export default function Page({ header = true, footer = true, Content }) {
  return (
    <div>
      {/* Content wird als Komponente übergeben: Das Layout ist wiederverwendbar. */}
      {header && <Header />}

      <main>
        <Content />
      </main>

      {footer && (
        // Navigationsdaten kommen zentral aus einer Datei statt aus mehreren Komponenten.
        // Die Erweiterung wird vereinfacht
        <Footer
          navigationLinks={navigationLinks}
          socialLinks={socialLinks}
          legalLinks={legalLinks}
        />
      )}
    </div>
  );
}

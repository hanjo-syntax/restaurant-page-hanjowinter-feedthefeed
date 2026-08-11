import Button from './Button';
import Navigation from './Navigation';
import RestaurantName from './RestaurantName';
import { navItems } from '../data/navigation';

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:max-w-full lg:px-10">
      <RestaurantName />
      <Navigation items={navItems}>Menü</Navigation>
      <Button href="#book" variant="primary" className="hidden shrink-0 md:inline-flex">
        Tisch reservieren
      </Button>
    </header>
  );
}

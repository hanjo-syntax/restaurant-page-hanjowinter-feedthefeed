# Wiederverwendbare React-Komponenten

## Grundprinzipien

- Layout-Komponenten nehmen ihren Inhalt überwiegend über `children` oder `leftContent` entgegen.
- Klassen werden mit Tailwind CSS direkt in den Komponenten gesetzt. Zusätzliche Klassen können bei vielen Komponenten über `className` ergänzt werden.
- Bilder aus `public/images` werden mit einem Pfad ab `/images/...` referenziert.
- Interne Seitenlinks verwenden React Router (`to`), einfache Sprungziele und externe Ziele verwenden `href`.

## Seiten- und Layout-Komponenten

### `Page`

Gemeinsamer Seitenrahmen mit optionalem Header und Footer.

```jsx
<Page header footer Content={Homepage} />
```

| Prop | Typ | Default | Beschreibung |
| --- | --- | --- | --- |
| `Content` | `Component` | – | Seitenkomponente, die im `<main>` gerendert wird |
| `header` | `boolean` | `true` | Header anzeigen oder ausblenden |
| `footer` | `boolean` | `true` | Footer anzeigen oder ausblenden |

Neue Seiten werden normalerweise in `src/App.jsx` als Route mit `Page` eingebunden.

### `Section`

Standard-Container für Inhaltsabschnitte mit optionalem Eyebrow und Titel.

```jsx
<Section bg="bg-zinc-900" eyebrow="Der Feed" title="Für deinen Feed gemacht">
  <ImageRow images={images} />
</Section>
```

| Prop | Typ | Default | Beschreibung |
| --- | --- | --- | --- |
| `bg` | `string` | – | Tailwind-Klassen für den Hintergrund |
| `eyebrow` | `string` | – | Kleine Überschrift über dem Titel |
| `title` | `string` | – | Abschnittstitel |
| `id` | `string` | – | HTML-ID für Sprunglinks |
| `children` | `ReactNode` | – | Inhalt des Abschnitts |
| `hideHeader` | `boolean` | `false` | Eyebrow und Titel ausblenden |
| `className` | `string` | `my-10 px-6 sm:px-10 md:px-16 lg:px-24` | Klassen des `<section>` |
| `contentClassName` | `string` | `mt-10` | Klassen des Inhalts-Containers |

### `SplitSection`

Zweiteiliger Abschnitt. `leftContent` erscheint in der Textspalte, `children` in der Bild- oder Inhalts-Spalte.

```jsx
<SplitSection
  bg="bg-zinc-900"
  eyebrow="Das Konzept"
  title="Es ist nicht nur Abendessen."
  leftContent={<p>Asiatisches Streetfood und Creator-Drops.</p>}
>
  <HeroImage src="/images/korean-tofu-rice-bowl.png" alt="Tofu-Reisschale" />
</SplitSection>
```

| Prop | Typ | Default | Beschreibung |
| --- | --- | --- | --- |
| `bg` | `string` | – | Tailwind-Hintergrundklassen |
| `eyebrow` | `string` | – | Abschnittslabel |
| `title` | `string` | – | Abschnittstitel |
| `reverse` | `boolean` | `false` | Spaltenreihenfolge ab `md` umkehren |
| `leftContent` | `ReactNode` | – | Inhalt unter dem Titel |
| `children` | `ReactNode` | – | Inhalt der zweiten Spalte |

### `Header`, `Footer`

`Header` ist der globale Kopfbereich mit `RestaurantName`, `Navigation` und Reservierungsbutton. Er wird ohne Props verwendet:

```jsx
<Header />
```

`Footer` akzeptiert Linklisten im Format `{ to, label }`:

```jsx
<Footer navigationLinks={navigationLinks} socialLinks={socialLinks} />
```

Ohne Props werden leere Listen verwendet. `Page` liefert automatisch die Listen aus `src/data/navigation.js`.

## Navigation und Aktionen

### `Button`

Ein Button, der bei gesetztem `href` automatisch als Link gerendert wird.

```jsx
<Button href="/menu" variant="primary">Speisekarte</Button>
<Button type="submit" variant="primaryLight">Senden</Button>
```

| Prop | Typ | Default | Beschreibung |
| --- | --- | --- | --- |
| `children` | `ReactNode` | – | Beschriftung oder Inhalt |
| `href` | `string` | – | Bei Angabe wird ein `<a>` statt `<button>` verwendet |
| `type` | `string` | `button` | Button-Typ, z. B. `submit` |
| `variant` | `primary \| primaryLight \| secondary` | `primary` | Visuelle Variante |
| `className` | `string` | `''` | Zusätzliche Tailwind-Klassen |

### `Navigation`

Responsive Navigation mit Desktop-Links und mobiler Variante.

```jsx
<Navigation items={[{ to: '/menu', label: 'Speisekarte' }]}>Menü</Navigation>
```

`items` ist eine Liste aus `{ to, label }`. Der Button-Inhalt wird über `children` gesetzt. Der Öffnungszustand wird intern verwaltet.

### `NavigationLink`

Ein einzelner React-Router-Link mit aktivem Zustand.

```jsx
<NavigationLink to="/contact" label="Kontakt" />
```

### `RestaurantName`

Markenname im Header. Optional können Name und Screenreader-Beschreibung überschrieben werden.

```jsx
<RestaurantName name="Feed the Feed" description="Asiatisches Streetfood-Restaurant" />
```

## Inhaltskomponenten

### `HeroSection`

Komponierter Hero aus `WelcomeText`, zwei `Button`s und `HeroImage`.

```jsx
<HeroSection
  heroImageSrc="/images/pink-coconut-ramen-tofu-bowl.png"
  heroImageAlt="Ramen mit Kokosbrühe"
  WelcomeTextTitle="Eat it. Post it. Feed the Feed."
/>
```

Verfügbare Props: `heroImageSrc`, `heroImageAlt`, `heroImageBadge`, `WelcomeTextEyebrow`, `WelcomeTextTitle` und `WelcomeTextDescription`. Alle besitzen sinnvolle Feed-the-Feed-Defaults.

### `WelcomeText`

Textblock mit Eyebrow, Titel und Beschreibung. Der Titel wird an Punkten getrennt; jeder Satz wird in einer eigenen Zeile ausgegeben.

```jsx
<WelcomeText
  eyebrow="Willkommen"
  title="Eat it. Post it."
  description="Streetfood für deinen Abend."
/>
```

### `HeroImage`

Bild mit responsivem Seitenverhältnis und Hover-Zoom.

```jsx
<HeroImage src="/images/neon-restaurant-table-pink-cocktail.png" alt="Neonbeleuchteter Tisch" />
```

`src` und `alt` sind optional, sollten für eigene Inhalte aber explizit gesetzt werden.

### `DishCard` und `DishCardRow`

`DishCard` zeigt Gericht, Bild, Preis, Beschreibung, Tags und optional ein Badge. `variant="light"` erzeugt eine helle Karte.

```jsx
const dish = {
  badgeKind: 'Im Trend',
  badgeColor: 'yellow',
  title: 'K-Pop Crunch Bao',
  description: 'Knuspriger Blumenkohl, Kimchi und Neon-Mayo.',
  price: '8,50',
  tags: ['vegan', 'scharf'],
  imageUrl: '/images/korean-fried-cauliflower-bao.png',
};

<DishCard {...dish} />
<DishCardRow dishes={[dish]} />
```

Pflichtdaten für `DishCard` sind praktisch `title`, `description`, `price` und `imageUrl`; `tags` ist standardmäßig `[]`. `DishCardRow` erwartet eine Liste im selben Format und rendert daraus ein responsives Raster.

### `Badge`

Kompaktes Label für Status oder Kategorien.

```jsx
<Badge color="cyan">Creator</Badge>
```

Erlaubte Farben: `yellow`, `cyan`, `pink`, `green`. Standard ist `yellow`.

### `CategoryTabs`

Menükategorien mit aktivem Zustand. Der Parent verwaltet `activeCategory` und reagiert auf `onSelect`.

```jsx
const [activeCategory, setActiveCategory] = useState('bao');

<CategoryTabs
  activeCategory={activeCategory}
  onSelect={setActiveCategory}
/>
```

Eigene Kategorien verwenden `{ id, label, icon }`. Ohne `categories` werden Bao, Bowls, Ramen, Süßes und Drinks aus den Defaults verwendet.

### `ImageRow`

Horizontale, auf Mobilgeräten scrollbarere Bildreihe.

```jsx
<ImageRow images={[
  { src: '/images/pink-coconut-ramen-tofu-bowl.png', alt: 'Ramen' },
  { src: '/images/matcha-cheesecake-pink-cocktail.png', alt: 'Dessert und Cocktail' },
]} />
```

Jedes Bild benötigt `src` und `alt`. Für dekorative Bilder kann `alt` leer sein.

### `IconFeature` und `IconFeatureRow`

`IconFeature` ist ein einzelnes Feature; `IconFeatureRow` rendert mehrere Features aus einer Liste.

```jsx
<IconFeatureRow items={[{
  icon: '/images/neon-camera-illustration.png',
  label: 'Fotospots',
  caption: 'Dein Abend, perfekt für den Feed.',
}]} />
```

Ein Item benötigt `label` und `caption`; für das Icon kann entweder `icon` (Bildpfad)
oder `lucidIcon` (Lucide-Komponente) verwendet werden. Der Schlüssel wird aus `label` gebildet.

```jsx
import { Camera } from 'lucide-react';

<IconFeatureRow items={[{
  lucidIcon: Camera,
  label: 'Fotospots',
  caption: 'Dein Abend, perfekt für den Feed.',
}]} />
```

### `OpeningHours`

Liste der Öffnungszeiten mit optionalem Titel und eigener Datenquelle.

```jsx
<OpeningHours openingHours={[
  { days: 'Montag', hours: 'Geschlossen' },
  { days: 'Dienstag – Donnerstag', hours: '17:00 - 23:00' },
]} />
```

Ohne `openingHours` werden die Standardzeiten des Restaurants verwendet. Jeder Eintrag hat `days` und `hours`.

## Footer-Komponenten

### `FooterBrand`

Markenname und Claim für den Footer:

```jsx
<FooterBrand name="Feed the Feed" tagline="Asiatisches Streetfood." />
```

### `FooterColumn`

Linkspalte mit Überschrift:

```jsx
<FooterColumn
  title="Navigation"
  links={[{ to: '/menu', label: 'Speisekarte' }]}
/>
```

### `SubscribeForm`

Vorgefertigtes Newsletter-Formular mit E-Mail-Feld und `Button`. Es wird aktuell ohne Props verwendet:

```jsx
<SubscribeForm />
```

ToDo: Die Komponente enthält bisher keine Submit-Logik.

## Empfohlene Kompositionen

```jsx
export default function NewPage() {
  return (
    <>
      <Section eyebrow="Intro" title="Deine Überschrift" bg="bg-zinc-900">
        <HeroImage src="/images/example.png" alt="Beschreibung" />
      </Section>

      <SplitSection
        eyebrow="Mehr erfahren"
        title="Zwei Spalten für Text und Bild"
        leftContent={<Button href="/contact">Kontakt</Button>}
      >
        <ImageRow images={images} />
      </SplitSection>
    </>
  );
}
```

Für neue Seiten gilt: Seitenlogik und Daten gehören in `src/pages` oder `src/data`; wiederkehrende Darstellung gehört in `src/components`.

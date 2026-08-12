# FEED THE FEED

FEED THE FEED ist ein fiktives, auf Influencer und Social Media ausgerichtetes asiatisches Street-Food-Restaurant. Das Projekt entsteht im Rahmen eines Webentwicklungskurses und wird mit React und Tailwind CSS umgesetzt.

Das Restaurant verbindet intensives asiatisches Street Food, zeitlich begrenzte Kooperationen mit Content Creators und visuell auffällige Gerichte, die speziell für soziale Medien inszeniert werden. Die visuelle Identität setzt auf dunkle Flächen, kräftige Typografie und Neonakzente in Pink, Cyan und Acid Yellow.

## Projektziele

Ziel des Projekts ist es, eine moderne Restaurant-Website zu planen, zu gestalten und zu entwickeln.

Die Website soll:

- das Restaurant und sein Konzept präsentieren
- die Speisekarte und einzelne Gerichte darstellen
- Kontaktinformationen und Öffnungszeiten bereitstellen
- Tischreservierungen ermöglichen
- auf Desktop- und Mobilgeräten gut funktionieren
- wiederverwendbare React-Komponenten verwenden
- Tailwind CSS für das Styling einsetzen
- einem einheitlichen Designsystem folgen

## Geplante Seiten

Die Website soll folgende Seiten enthalten:

- Startseite
- Speisekarte
- The Feed
- Drops & Kooperationen
- Reservierungen
- Besuch & Kontakt

Die erforderlichen Kernseiten sind die Startseite, die Speisekarte und die Kontaktseite.

## Designprozess

Die Benutzeroberfläche wurde vor Beginn der Entwicklung in Figma geplant.

Der Designprozess umfasst:

- Low-Fidelity-Wireframes
- ein Desktop-Mockup der Startseite
- Planung responsiver Layouts
- wiederverwendbare UI-Komponenten
- Typografiestile
- Farbvariablen
- Variablen für Abstände und Eckradien
- Buttons, Badges, Formularfelder, Karten, Header und Footer

Die Screenshots im Verzeichnis `docs` dokumentieren die aktuellen Planungs- und Designphasen.

## Wireframes

Die Wireframes befinden sich unter:

```text
docs/wireframes/
```

Aktuell enthalten sind:

- Desktop-Startseite
- Desktop-Speisekarte
- Kontaktseite

## Mockups

Die High-Fidelity-Mockups befinden sich unter:

```text
docs/mockups/
```

Das Mockup der Startseite zeigt die finale visuelle Richtung einschließlich Typografie, Farben, Bildsprache und wiederverwendbarer UI-Komponenten.

## Visuelle Identität

### Farben

Die Hauptfarbpalette besteht aus:

- dunklen neutralen Hintergründen
- Neonpink für primäre Aktionen
- Cyan für sekundäre Aktionen und Links
- Acid Yellow für Hervorhebungen und Badges
- hellen neutralen Farben für Texte

### Designstil

Der visuelle Stil ist:

- kraftvoll
- urban
- energiegeladen
- auf soziale Medien ausgerichtet
- von Neonästhetik inspiriert
- stark visuell geprägt

## Geplanter Technologie-Stack

- React
- Tailwind CSS

## Geplante Komponentenstruktur

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   └── Input.jsx
│   ├── cards/
│   │   └── DishCard.jsx
│   └── layout/
│       ├── Header.jsx
│       └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   └── Contact.jsx
└── data/
    └── dishes.js
```

## Aktueller Stand

Der aktuelle Projektstand umfasst:

- Restaurantkonzept abgeschlossen
- Seitenstruktur geplant
- Designsystem in Figma erstellt
- Desktop-Wireframe der Startseite abgeschlossen
- Desktop-Mockup der Startseite abgeschlossen
- Desktop-Wireframe der Speisekarte abgeschlossen
- wiederverwendbare UI-Komponenten in Figma vorbereitet
- erste Screenshots zum Repository hinzugefügt

## Komponenten-Dokumentation

Eine Referenz aller wiederverwendbaren React-Komponenten, ihrer Props, Datenstrukturen und typischen Verwendung findest du in [`docs/COMPONENTS.md`](docs/COMPONENTS.md).

## Figma

Das vollständige Designsystem, die Wireframes und Mockups befinden sich im Figma-Projekt.

```text
https://www.figma.com/design/yjVR5965NmdjxblOntH5oA/Feed-the-Feed---Website?node-id=1-2&m=dev&t=AjzvXEdpYtQUwhWr-1
```

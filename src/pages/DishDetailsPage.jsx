import { useParams, Link } from 'react-router';
import dishes from '../data/dishes.json';

export default function DishDetailsPage() {
  const { id } = useParams();
  
  // Sicherer Typ-Vergleich (String-Konvertierung)
  const dish = dishes.find((d) => String(d.id) === id);

  // 404 / Nicht gefunden abfangen
  if (!dish) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold">Gericht nicht gefunden</h2>
        <Link to="/menu" className="mt-4 inline-block text-cyan-500 underline">
          ← Zurück zur Speisekarte
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <Link 
        to="/menu" 
        className="mb-6 inline-flex items-center text-sm font-medium text-zinc-400 transition hover:text-white"
      >
        ← Zurück zur Speisekarte
      </Link>

      {dish.imageUrl && (
        <img 
          src={dish.imageUrl} 
          alt={dish.name || dish.title} 
          className="mb-6 aspect-video w-full rounded-xl object-cover"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          {dish.category && (
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {dish.category}
            </span>
          )}
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
            {dish.name || dish.title}
          </h1>
        </div>
        <span className="text-2xl font-bold text-white shrink-0">
          {dish.price} €
        </span>
      </div>

      <p className="mt-4 text-base leading-relaxed text-zinc-400">
        {dish.description}
      </p>

      {dish.tags && dish.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {dish.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
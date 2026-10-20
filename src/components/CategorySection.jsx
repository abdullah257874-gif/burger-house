import { ArrowRight } from 'lucide-react';

const categoryMeta = {
  all: { title: 'All Burgers', emoji: '🍔', accent: 'from-brand-accent/30 to-brand-accentSoft/20' },
  beef: { title: 'Beef Burgers', emoji: '🥩', accent: 'from-orange-500/20 to-red-500/20' },
  chicken: { title: 'Chicken Burgers', emoji: '🍗', accent: 'from-yellow-500/20 to-orange-500/20' },
  zinger: { title: 'Zinger Burgers', emoji: '🌶️', accent: 'from-red-500/20 to-pink-500/20' },
  veggie: { title: 'Veggie Burgers', emoji: '🥬', accent: 'from-green-500/20 to-lime-500/20' },
  combo: { title: 'Burger Combos', emoji: '🍟', accent: 'from-brand-accent/20 to-brand-accentSoft/20' },
  sides: { title: 'Fries and Sides', emoji: '🍟', accent: 'from-amber-500/20 to-orange-500/20' },
  drinks: { title: 'Drinks and Shakes', emoji: '🥤', accent: 'from-cyan-500/20 to-blue-500/20' },
};

export default function CategorySection({ categories, selectedCategory, onSelectCategory }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Categories</p>
          <h2 className="mt-3 text-3xl font-black text-brand-text">Pick your favorites</h2>
        </div>
        <button type="button" className="hidden items-center gap-2 text-sm font-semibold text-brand-accent md:inline-flex">
          View all <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const meta = categoryMeta[category.id] || categoryMeta.all;
          const isActive = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={`group relative overflow-hidden rounded-[1.6rem] border p-4 text-left transition ${
                isActive ? 'border-brand-accent bg-brand-accent/10' : 'border-white/10 bg-brand-panel hover:border-brand-accent/60'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${meta.accent} opacity-80`} />
              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-bg/60 text-3xl shadow-lg">
                    {meta.emoji}
                  </div>
                  <p className="text-lg font-bold text-brand-text">{category.name}</p>
                </div>
                <ArrowRight className={`h-5 w-5 transition ${isActive ? 'text-brand-accent' : 'text-brand-muted group-hover:text-brand-accent'}`} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

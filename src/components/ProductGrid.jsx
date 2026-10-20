import { Minus, Plus, ShoppingBag } from 'lucide-react';

export default function ProductGrid({ products, selectedCategory, onAddToCart }) {
  const visibleProducts =
    selectedCategory === 'all' ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Popular Menu</p>
          <h2 className="mt-3 text-3xl font-black text-brand-text">Big flavors, perfectly stacked</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <article key={product.id} className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-brand-panel transition duration-300 hover:-translate-y-1 hover:shadow-glow">
            <div className="relative">
              <img src={product.image} alt={product.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              {product.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-brand-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-bg">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-brand-text">{product.name}</h3>
                </div>
                <div className="rounded-full bg-brand-accent/10 px-2.5 py-1 text-sm font-semibold text-brand-accent">
                  Rs. {product.price}
                </div>
              </div>

              <p className="text-sm leading-6 text-brand-muted">{product.description}</p>

              <div className="flex items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-brand-bg px-2 py-1.5">
                  <button type="button" className="rounded-full bg-white/5 p-1 text-brand-text transition hover:text-brand-accent" aria-label={`Decrease quantity for ${product.name}`}>
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-6 text-center text-sm font-semibold text-brand-text">1</span>
                  <button type="button" className="rounded-full bg-white/5 p-1 text-brand-text transition hover:text-brand-accent" aria-label={`Increase quantity for ${product.name}`}>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onAddToCart(product, 1)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2.5 text-sm font-semibold text-brand-bg transition hover:bg-brand-accent/90"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

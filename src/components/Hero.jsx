import { ArrowRight, Clock3, Leaf, Truck } from 'lucide-react';

export default function Hero() {
  const trustPoints = [
    { icon: Leaf, label: 'Fresh ingredients' },
    { icon: Truck, label: 'Fast delivery' },
    { icon: Clock3, label: 'Customer favorites' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-brand-bg bg-hero">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Fresh • Hot • Delicious
          </span>
          <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight text-brand-text sm:text-5xl lg:text-6xl">
            Burgers Made to Make You Smile.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-brand-muted sm:text-lg">
            Freshly prepared burgers, premium ingredients, melted cheese, and unforgettable flavor in every bite.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3.5 font-semibold text-brand-bg transition hover:scale-[1.02] hover:bg-brand-accent/90"
            >
              Order Your Burger <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-brand-text transition hover:border-brand-accent hover:text-brand-accent"
            >
              Explore Menu
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-brand-muted">
                <Icon className="h-4 w-4 text-brand-accent" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-gradient-to-r from-brand-accent/20 via-brand-accentSoft/15 to-transparent blur-3xl" />
          <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-brand-panel p-3 shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80"
              alt="Juicy double cheeseburger with melted cheese and fresh toppings"
              className="h-[480px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute -left-3 top-10 rounded-full border border-brand-accent/40 bg-brand-bg/80 px-3 py-2 text-sm text-brand-accent shadow-xl backdrop-blur-sm">
              Premium Patty
            </div>
            <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-brand-bg/80 px-4 py-2 text-sm text-brand-text backdrop-blur-sm">
              4.9/5 Favorite Pick
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

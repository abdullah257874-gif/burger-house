import { CheckCircle2 } from 'lucide-react';

const features = ['Fresh Ingredients', 'Made to Order', 'Big, Bold Flavor'];

export default function AboutSection() {
  return (
    <section id="about-us" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">About us</p>
          <h2 className="text-3xl font-black text-brand-text">Our Passion Is Great Burgers.</h2>
          <p className="text-base leading-7 text-brand-muted">
            At Burger House, we focus on the details that matter most: fresh ingredients, flavorful sauces, carefully prepared patties, and warm, friendly service. Every burger is meant to deliver a memorable bite that feels comforting and crave-worthy.
          </p>

          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-full border border-white/10 bg-brand-panel px-4 py-3 text-brand-text">
                <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
            alt="Burger ingredients and burgers arranged at a restaurant"
            className="h-[520px] w-full rounded-[2rem] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

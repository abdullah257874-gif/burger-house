import { ArrowRight } from 'lucide-react';

export default function OfferSection({ deals, onAddDeal }) {
  return (
    <section id="special-offers" className="bg-brand-panel py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Special offers</p>
            <h2 className="mt-3 text-3xl font-black text-brand-text">Great value, real flavor</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {deals.map((deal) => (
            <article key={deal.id} className="rounded-[1.8rem] border border-white/10 bg-brand-bg p-5">
              <div className="mb-5 flex items-center justify-between gap-2">
                <span className="rounded-full bg-brand-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                  Deal
                </span>
                <span className="text-xl font-black text-brand-text">Rs. {deal.price}</span>
              </div>

              <h3 className="text-2xl font-bold text-brand-text">{deal.name}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{deal.description}</p>

              <button
                type="button"
                onClick={() => onAddDeal(deal)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2.5 text-sm font-semibold text-brand-bg transition hover:bg-brand-accent/90"
              >
                Order Deal <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

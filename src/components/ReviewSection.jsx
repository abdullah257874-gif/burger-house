const reviews = [
  {
    name: 'Ayesha K.',
    quote: 'This place nails the balance between juicy patty and crisp toppings. The fries are a perfect match.',
  },
  {
    name: 'Hamza T.',
    quote: 'The ordering was quick, the burger was packed with flavor, and the service felt genuinely welcoming.',
  },
  {
    name: 'Sana R.',
    quote: 'A premium burger experience with bold flavor and a clean, modern vibe. Definitely worth a repeat visit.',
  },
];

export default function ReviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Customer reviews</p>
        <h2 className="mt-3 text-3xl font-black text-brand-text">Sample feedback from burger lovers</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-[1.8rem] border border-white/10 bg-brand-panel p-6">
            <div className="mb-4 text-brand-accent">★★★★★</div>
            <p className="text-base leading-7 text-brand-muted">“{review.quote}”</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-accentSoft font-bold text-brand-bg">
                {review.name.charAt(0)}
              </div>
              <span className="font-semibold text-brand-text">{review.name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

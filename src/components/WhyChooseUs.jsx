import { Clock3, Leaf, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    icon: Clock3,
    title: 'Freshly Prepared Food',
    text: 'Every burger is made with care and served at its best, without unnecessary delays.',
  },
  {
    icon: Leaf,
    title: 'Quality Ingredients',
    text: 'We build our menu around fresh produce, savory sauces, and premium burger essentials.',
  },
  {
    icon: Truck,
    title: 'Convenient Ordering',
    text: 'A streamlined online experience makes ordering quick, easy, and stress-free.',
  },
  {
    icon: ShieldCheck,
    title: 'Friendly Customer Service',
    text: 'Our team is here to make every order feel personal, warm, and welcoming.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-bg py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Why choose us</p>
          <h2 className="mt-3 text-3xl font-black text-brand-text">A burger experience built for your cravings</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-[1.8rem] border border-white/10 bg-brand-panel p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent/12 text-brand-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-text">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

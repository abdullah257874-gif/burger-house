import { Mail, MapPin, Phone, Send, Clock3 } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Enter a valid email address.';
    if (!formData.message.trim()) nextErrors.message = 'Message is required.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('Demo form only — no backend is connected yet, so this submission is for testing purposes only.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-brand-panel py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Contact</p>
            <h2 className="mt-3 text-3xl font-black text-brand-text">Let’s talk burgers</h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[1.6rem] border border-white/10 bg-brand-bg p-5">
              <div className="mb-4 flex items-center gap-3"><Phone className="h-5 w-5 text-brand-accent" /> <span>+92 300 1234567</span></div>
              <div className="mb-4 flex items-center gap-3"><Mail className="h-5 w-5 text-brand-accent" /> <span>hello@burgerhouse.example</span></div>
              <div className="mb-4 flex items-center gap-3"><MapPin className="h-5 w-5 text-brand-accent" /> <span>Placeholder Address, Karachi</span></div>
              <div className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-brand-accent" /> <span>Mon–Sun: 12:00 PM – 11:30 PM</span></div>
            </div>

            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-brand-bg">
              <iframe
                title="Restaurant map placeholder"
                src="https://www.google.com/maps?q=Karachi%20Pakistan&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.8rem] border border-white/10 bg-brand-bg p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-brand-muted">Name</label>
                <input name="name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-brand-panel px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent" placeholder="Your name" />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-brand-muted">Email</label>
                <input name="email" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-brand-panel px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent" placeholder="you@example.com" />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-brand-muted">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" className="w-full rounded-2xl border border-white/10 bg-brand-panel px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent" placeholder="Tell us how we can help" />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-3 font-semibold text-brand-bg transition hover:bg-brand-accent/90">
              Send Message <Send className="h-4 w-4" />
            </button>

            {status && <p className="mt-4 text-sm text-brand-accent">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

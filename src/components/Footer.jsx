import { Facebook, Instagram, MapPin, Mail, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-brand-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center gap-3 text-lg font-bold text-brand-text">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-accentSoft text-brand-bg">
              🍔
            </div>
            Burger House
          </div>
          <p className="max-w-sm text-sm leading-6 text-brand-muted">
            Premium burgers, rich flavors, and a bold neighborhood feel made for burger lovers who want every bite to count.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-brand-panel text-brand-muted transition hover:border-brand-accent hover:text-brand-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-brand-text">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-muted">
            <li><a href="#home" className="hover:text-brand-accent">Home</a></li>
            <li><a href="#menu" className="hover:text-brand-accent">Menu</a></li>
            <li><a href="#about-us" className="hover:text-brand-accent">About Us</a></li>
            <li><a href="#special-offers" className="hover:text-brand-accent">Offers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-brand-text">Menu</h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-muted">
            <li><a href="#menu" className="hover:text-brand-accent">Beef Burgers</a></li>
            <li><a href="#menu" className="hover:text-brand-accent">Chicken Burgers</a></li>
            <li><a href="#menu" className="hover:text-brand-accent">Veggie Burgers</a></li>
            <li><a href="#menu" className="hover:text-brand-accent">Fries & Sides</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-brand-text">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-muted">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-accent" /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-accent" /> hello@burgerhouse.example</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-accent" /> Placeholder Street, Karachi</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 py-5 text-sm text-brand-muted sm:px-6 md:flex-row lg:px-8">
          <p>© {currentYear} Burger House. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-accent">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

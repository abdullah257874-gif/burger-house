import { Menu, ShoppingCart, X, Flame } from 'lucide-react';

export default function Navbar({ cartCount, isCartOpen, onToggleCart, isMenuOpen, onToggleMenu }) {
  const navItems = ['Home', 'Menu', 'About Us', 'Special Offers', 'Contact'];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-bg/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-lg font-bold tracking-wide text-brand-text">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-accentSoft text-brand-bg shadow-glow">
            <Flame className="h-5 w-5" />
          </div>
          <span>Burger House</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase().replace(/\s+/g, '-');
            const href = sectionId === 'home' ? '#home' : `#${sectionId}`;
            return (
              <a key={item} href={href} className="text-sm text-brand-muted transition hover:text-brand-accent">
                {item}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open shopping cart"
            onClick={onToggleCart}
            className="relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-brand-text transition hover:border-brand-accent hover:text-brand-accent"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-bold text-brand-bg">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href="#menu"
            className="hidden rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-bg transition hover:scale-[1.02] hover:bg-brand-accent/90 md:inline-flex"
          >
            Order Now
          </a>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={onToggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-brand-bg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, '-');
              const href = sectionId === 'home' ? '#home' : `#${sectionId}`;
              return (
                <a
                  key={item}
                  href={href}
                  className="text-brand-muted transition hover:text-brand-accent"
                  onClick={onToggleMenu}
                >
                  {item}
                </a>
              );
            })}
            <a href="#menu" className="mt-2 inline-flex rounded-full bg-brand-accent px-5 py-3 text-center text-sm font-semibold text-brand-bg" onClick={onToggleMenu}>
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import OfferSection from './components/OfferSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutForm from './components/CheckoutForm';
import { products, categories, promoDeals } from './data/products';

const STORAGE_KEY = 'burger-house-cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const totalCartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id);
      if (existingItem) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...current, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const addDealToCart = (deal) => {
    const productMap = new Map(products.map((product) => [product.id, product]));

    setCartItems((current) => {
      const nextCart = [...current];
      deal.items.forEach(({ productId, quantity }) => {
        const product = productMap.get(productId);
        if (!product) return;

        const existingItem = nextCart.find((item) => item.id === productId);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          nextCart.push({ ...product, quantity });
        }
      });
      return nextCart;
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCartItems((current) =>
      current.flatMap((item) => {
        if (item.id !== id) return [item];
        const nextQuantity = item.quantity + delta;
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      })
    );
  };

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? (subtotal >= 2000 ? 0 : 150) : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePlaceOrder = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar
        cartCount={totalCartCount}
        isCartOpen={isCartOpen}
        onToggleCart={() => setIsCartOpen((current) => !current)}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((current) => !current)}
      />

      <main>
        <Hero />
        <CategorySection categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <ProductGrid products={products} selectedCategory={selectedCategory} onAddToCart={addToCart} />
        <OfferSection deals={promoDeals} onAddDeal={addDealToCart} />
        <AboutSection />
        <WhyChooseUs />
        <ReviewSection />
        <ContactSection />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onIncrease={(id) => updateQuantity(id, 1)}
        onDecrease={(id) => updateQuantity(id, -1)}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <CheckoutForm
        isOpen={isCheckoutOpen}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        total={total}
        onClose={() => setIsCheckoutOpen(false)}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  );
}

export default App;

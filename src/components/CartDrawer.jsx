import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';

export default function CartDrawer({ isOpen, cartItems, onClose, onIncrease, onDecrease, onRemove, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? (subtotal >= 2000 ? 0 : 150) : 0;
  const total = subtotal + deliveryFee;

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-brand-panel p-4 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-lg font-bold text-brand-text">
            <ShoppingCart className="h-5 w-5 text-brand-accent" />
            Your Cart
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-2 text-brand-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex-1 space-y-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="mt-10 rounded-[1.5rem] border border-dashed border-white/10 bg-brand-bg p-6 text-center text-brand-muted">
              Your cart is empty. Add a few burgers and come back for a quick checkout.
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-brand-bg p-3">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-brand-text">{item.name}</p>
                      <p className="text-sm text-brand-muted">Rs. {item.price}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.id)} className="text-brand-muted transition hover:text-brand-accent">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-brand-panel px-2 py-1">
                      <button type="button" onClick={() => onDecrease(item.id)} className="rounded-full bg-white/5 p-1 text-brand-text">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-5 text-center text-sm font-semibold text-brand-text">{item.quantity}</span>
                      <button type="button" onClick={() => onIncrease(item.id)} className="rounded-full bg-white/5 p-1 text-brand-text">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-brand-text">Rs. {item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-5 border-t border-white/10 pt-4">
          <div className="space-y-2 text-sm text-brand-muted">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery fee</span>
              <span>{deliveryFee === 0 ? 'Free' : `Rs. ${deliveryFee}`}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-brand-text">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>
          </div>

          <button
            type="button"
            disabled={cartItems.length === 0}
            onClick={onCheckout}
            className="mt-5 w-full rounded-full bg-brand-accent px-5 py-3 font-semibold text-brand-bg transition hover:bg-brand-accent/90 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-brand-muted"
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </>
  );
}

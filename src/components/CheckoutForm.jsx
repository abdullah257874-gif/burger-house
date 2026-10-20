import { X } from 'lucide-react';
import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  address: '',
  city: '',
  instructions: '',
  orderType: 'Delivery',
  paymentMethod: 'Cash on Delivery',
};

export default function CheckoutForm({ isOpen, subtotal, deliveryFee, total, onClose, onPlaceOrder }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!formData.address.trim()) nextErrors.address = 'Delivery address is required.';
    if (!formData.city.trim()) nextErrors.city = 'City is required.';

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setSuccessMessage('');

    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setSuccessMessage('Demo checkout only — no restaurant backend or payment provider is connected yet.');
    onPlaceOrder();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-brand-panel p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Demo checkout</p>
            <h3 className="mt-2 text-3xl font-black text-brand-text">Complete your order</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-2 text-brand-muted">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-brand-muted">Full name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-brand-bg px-4 py-3 text-brand-text outline-none ring-0 transition focus:border-brand-accent"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-brand-muted">Phone number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-brand-bg px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent"
                  placeholder="0312 3456789"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-brand-muted">Delivery address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full rounded-2xl border border-white/10 bg-brand-bg px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent"
                placeholder="Street address, house number, landmark"
              />
              {errors.address && <p className="mt-1 text-xs text-red-400">{errors.address}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-brand-muted">City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-brand-bg px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent"
                  placeholder="Karachi"
                />
                {errors.city && <p className="mt-1 text-xs text-red-400">{errors.city}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-brand-muted">Delivery instructions</label>
                <input
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-brand-bg px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent"
                  placeholder="Optional notes"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-brand-muted">Order type</label>
                <select
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-brand-bg px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent"
                >
                  <option>Delivery</option>
                  <option>Pickup</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-brand-muted">Payment method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-brand-bg px-4 py-3 text-brand-text outline-none transition focus:border-brand-accent"
                >
                  <option>Cash on Delivery</option>
                  <option>Credit Card</option>
                  <option>Bank Transfer</option>
                </select>
              </div>
            </div>
          </div>

          <aside className="rounded-[1.6rem] border border-white/10 bg-brand-bg p-5">
            <h4 className="text-xl font-bold text-brand-text">Order summary</h4>
            <div className="mt-5 space-y-3 text-sm text-brand-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>{deliveryFee === 0 ? 'Free' : `Rs. ${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-3 text-base font-semibold text-brand-text">
                <span>Final total</span>
                <span>Rs. {total}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-full bg-brand-accent px-5 py-3 font-semibold text-brand-bg transition hover:bg-brand-accent/90 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-brand-muted"
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>

            {successMessage && <p className="mt-4 text-sm text-brand-accent">{successMessage}</p>}
          </aside>
        </form>
      </div>
    </div>
  );
}

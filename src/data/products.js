export const products = [
  {
    id: 'classic-cheeseburger',
    name: 'Classic Cheeseburger',
    price: 650,
    category: 'beef',
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    description: 'Double cheddar, grilled beef, soft brioche, and signature sauce.',
  },
  {
    id: 'double-beef-burger',
    name: 'Double Beef Burger',
    price: 950,
    category: 'beef',
    badge: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
    description: 'Two juicy patties stacked with pickles, onions, and smoky relish.',
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    price: 700,
    category: 'chicken',
    badge: 'Fan Favorite',
    image:
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80',
    description: 'Crunchy chicken fillet, slaw, and creamy burger sauce.',
  },
  {
    id: 'zinger-burger',
    name: 'Zinger Burger',
    price: 750,
    category: 'zinger',
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    description: 'Fiery zinger fillet with crunchy lettuce and cooled mayo.',
  },
  {
    id: 'bbq-bacon-burger',
    name: 'BBQ Bacon-Style Beef Burger',
    price: 1050,
    category: 'beef',
    badge: 'Chef Pick',
    image:
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80',
    description: 'Smoky BBQ glaze, crisp bacon-style strips, and caramelized onions.',
  },
  {
    id: 'spicy-jalapeno-burger',
    name: 'Spicy Jalapeño Burger',
    price: 850,
    category: 'beef',
    image:
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80',
    description: 'Jalapeños, pepper jack, and a fiery kick with fresh tomato.',
  },
  {
    id: 'mushroom-swiss-burger',
    name: 'Mushroom Swiss Burger',
    price: 900,
    category: 'beef',
    image:
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=900&q=80',
    description: 'Swiss cheese, sautéed mushrooms, and rich garlic aioli.',
  },
  {
    id: 'veggie-delight-burger',
    name: 'Veggie Delight Burger',
    price: 550,
    category: 'veggie',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    description: 'Vegetarian patty with greens, tomato, avocado, and herb sauce.',
  },
];

export const categories = [
  { id: 'all', name: 'All Burgers' },
  { id: 'beef', name: 'Beef Burgers' },
  { id: 'chicken', name: 'Chicken Burgers' },
  { id: 'zinger', name: 'Zinger Burgers' },
  { id: 'veggie', name: 'Veggie Burgers' },
  { id: 'combo', name: 'Burger Combos' },
  { id: 'sides', name: 'Fries and Sides' },
  { id: 'drinks', name: 'Drinks and Shakes' },
];

export const promoDeals = [
  {
    id: 'burger-fries-combo',
    name: 'Burger + Fries Combo',
    price: 1090,
    description: 'Classic burger with crispy fries and drink.',
    items: [
      { productId: 'classic-cheeseburger', quantity: 1 },
      { productId: 'veggie-delight-burger', quantity: 1 },
    ],
  },
  {
    id: 'double-burger-deal',
    name: 'Double Burger Deal',
    price: 1780,
    description: 'Two premium burgers and a side of fries.',
    items: [{ productId: 'double-beef-burger', quantity: 2 }],
  },
  {
    id: 'family-burger-box',
    name: 'Family Burger Box',
    price: 2900,
    description: 'A family meal with four burgers and sides.',
    items: [
      { productId: 'classic-cheeseburger', quantity: 2 },
      { productId: 'crispy-chicken-burger', quantity: 2 },
    ],
  },
  {
    id: 'chicken-burger-meal',
    name: 'Chicken Burger Meal',
    price: 930,
    description: 'Crispy chicken burger with fries and sauce.',
    items: [{ productId: 'crispy-chicken-burger', quantity: 1 }],
  },
];

# Burger House

Burger House is a premium burger restaurant and online ordering website built with React, Vite, and Tailwind CSS.

## Features

- Modern hero section with premium burger visuals
- Responsive navigation and mobile menu
- Product catalog with filters and category cards
- Shopping cart with localStorage persistence
- Checkout modal with validation and demo-only messaging
- Special offers, reviews, about, and contact sections
- Demo contact form with validation
- Responsive design for desktop, tablet, and mobile

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide icons

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

## Deployment

This project is ready for deployment on Vercel or Netlify. Use the standard Vite build output from `dist/`.

## Notes

- The cart is saved in `localStorage`.
- The checkout flow is clearly labeled as a demo because no real restaurant backend or payment provider is connected.
- Contact form submission is intentionally demo-only and will show success only after validation passes.

## Project Structure

```bash
src/
  components/
  data/
  App.jsx
  main.jsx
  index.css
package.json
vite.config.js
tailwind.config.js
postcss.config.js
index.html
```

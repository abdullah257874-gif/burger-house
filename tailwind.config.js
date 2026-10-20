/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#111111',
          panel: '#1B1B1B',
          accent: '#F5A623',
          accentSoft: '#E63946',
          text: '#FFFFFF',
          muted: '#B8B8B8',
        },
      },
      boxShadow: {
        glow: '0 10px 40px rgba(245, 166, 35, 0.25)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(245,166,35,0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(230,57,70,0.18), transparent 22%)',
      },
    },
  },
  plugins: [],
};

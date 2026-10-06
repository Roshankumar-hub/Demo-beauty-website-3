/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f5f1ea',
        charcoal: '#272521',
        rose: '#c99183',
        champagne: '#baa07a',
      },
      fontFamily: {
        editorial: ['Bodoni MT', 'Didot', 'Georgia', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

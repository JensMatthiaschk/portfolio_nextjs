/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['var(--font-montserrat)'],
        Sarala: ['var(--font-sarala)'],
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [require("daisyui")],
}

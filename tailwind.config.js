// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik-glitch-regular', 'system-ui'],
      },
    },
  },
  plugins: [],
}

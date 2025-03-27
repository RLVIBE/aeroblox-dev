/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // don't use tailwind color system
        // use m3 theme color
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '.5px' }], // text-base
        sm: ['.875rem', { lineHeight: '1.3125rem', letterSpacing: '.25px' }], // text-sm
        caption: ['.75rem', { lineHeight: '.9375rem', letterSpacing: '.4px' }], // text-caption
      },
    },
  },
  plugins: [],
}

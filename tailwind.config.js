/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('/src/images/bg-stars.svg')",
        'img': "url('/src/images/1556708032_1.jpg')"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans'], // 'Nunito' should match the font family name used in your CSS or HTML
      },
    },
  },
  plugins: [],
}


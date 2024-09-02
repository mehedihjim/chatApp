/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textColor': '#11175D',
        'textOther': '#4D4D4D',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
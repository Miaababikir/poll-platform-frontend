/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fa4a25'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

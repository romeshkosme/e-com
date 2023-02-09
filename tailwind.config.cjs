/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg-light': '#F1FAEE',
        'custom-dark-blue': '#1D3557',
        'custom-blue': '#457B9D',
        'custom-light-blue': '#A8DADC'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'orange': '#ffd895',
      'darkOrange': 'rgb(244, 186, 87)',
      'lightOrange': 'rgb(255, 243, 219)',
      'orangeAlpha': 'rgba(255, 162, 0, 0.5)',
      'dark-typo' : '#2b2b2b',
      'white' : '#ffffff',
      'modale' : 'rgba(0, 0, 0, 0.5)'
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['Indie Flower', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

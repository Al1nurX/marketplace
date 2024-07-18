/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      textColor: {
        'searchColor': 'rgba(60, 42, 153, 0.40)',
        'hoverOnCard': 'rgba(0, 0, 0, 0.50)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'marmelad': ['Marmelad', 'sans-serif'],
        'alegreya-sans-sc': ['Alegreya Sans SC', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom': '1px 1px 20px 10px rgba(95, 83, 83, 0.25)',
      },
      backgroundColor: {
        'hoverOnCard': 'rgba(179, 179, 179, 0.26)',
      }
    },
  },
  plugins: [],
  // plugins: [require('daisyui')],
  // daisyui: {
  //   themes: ["light"],
  // },
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'spacex-black': '#0A0A0A',
        'spacex-dark-grey': '#0C0C0C',
        'spacex-white': '#F3F3F3',
        'spacex-grey': '#E5E5E5',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      maxWidth: {
        screen: '100vw',
      },
    },
    screens: {
      sm: { max: '640px' },
      md: { max: '1024px' },
      lg: { max: '1280px' },
      xl: { max: '1536px' },
      '2xl': { max: '2000px' },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2.5rem',
        md: '2.5rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
}

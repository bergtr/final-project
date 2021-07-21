module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'nav'   : '17%',
        'main'  : '80%',
        'side'  : '15%',
        'full'  : '100%'
      },
      colors: {
        pinkred: {
          DEFAULT: '#EF7186'
        },
        lightpink: {
          DEFAULT: '#EF7186'
        },
        black: {
          DEFAULT: '#616161'
        },
        white: {
          DEFAULT: '#FFFFFF'
        },
        lightgray: {
          DEFAULT: '#E8E8E8'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

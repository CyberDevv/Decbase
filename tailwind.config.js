module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'browner': '#bb967e',
        'brown': '#CAA892'
      },
      borderRadius: {
        '5xl': '2.5rem',
        '7xl': '5rem',
        'large': '10rem'
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem'
      },
      borderWidth: {
        '3': '3px'
      },
      backgroundImage: theme => ({
        'text': "url('public/build/IMG/james-lindsay-kVBzVaVa7Q0-unsplash 1.png')"
      }),
      fontSize: {
        '12xl': ['14rem', '1']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

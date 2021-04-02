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
        'text': "url('https://unsplash.com/photos/h0Vxgz5tyXA')"
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

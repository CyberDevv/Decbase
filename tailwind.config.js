module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
],
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
        'text': "url('https://images.unsplash.com/photo-1564512533667-015a90133f04?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')"
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

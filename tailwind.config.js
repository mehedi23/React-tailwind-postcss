module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'button': '#3498DB',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    extend: {
      backgroundImage: {
        banner: "url('https://www.setaswall.com/wp-content/uploads/2017/11/Aquarium-Wallpaper-30-3840x2400.jpg')"
      }
    },
    colors: {
      primary: '#2C3E50',
      white: '#ffffff',
      light: '#D5D8DC'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
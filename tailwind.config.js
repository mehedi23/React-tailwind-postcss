module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('https://i.ytimg.com/vi/QRGl4AkaOzE/maxresdefault.jpg')"
      }
    },
    colors: {
      primary: '#2C3E50',
      white: '#ffffff',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
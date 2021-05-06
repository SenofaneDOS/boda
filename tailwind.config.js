module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{ 
       'body': ['Core-Deco']
      },
      colors: {
        first: '#888888',
        second: '#2e2d2a',
      },
      boxShadow: {
        cornice: 'inset 0px 0px 0 15px #888888',
      },
      borderWidth: {
        '15': '15px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

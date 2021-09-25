module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: {
            'generator': "url('./images/generator.jpg')",
           }
    },
    transitionDelay: {
        '250': '250ms',
       }
  },
  variants: {
    extend: {
        backgroundColor: ['active'],
    },
  },
  plugins: [],
}

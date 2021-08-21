module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000000',
      white: '#FFFFFF',

      'black-dark': '#161616',
      'black-medium': '#212121',
      'black-light': '#2b2b2b',

      'primary-200': '#BB86FC',
      'primary-500': '#6200EE',
      'primary-700': '#3700B3',

      'secondary-200': '#03D4C6',
      'secondary-900': '#018786',

      gray: {
        50: '#F7F7F7',
        100: '#E1E1E1',
        200: '#CFCFCF',
        300: '#B1B1B1',
        400: '#9E9E9E',
        500: '#767676',
        600: '#626262',
        700: '#515151',
        800: '#3B3B3B',
        900: '#222222',
      },

      'default-red': '#FC4E4E',
      'default-blue': '#0E154C',
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontSize: {
        '5xl': '2.75rem',
      },
      lineHeight: {
        10: '3.375rem',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
  plugins: [],
}

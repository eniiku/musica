/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A4C7C6',
        secondary: '#FACD66',
        white: '#EFEEE0',
        black: '#1D2123',
        'black-alt': '#1A1E1F',
      },
    },
  },
  plugins: [],
};

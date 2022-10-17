/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A4C7C6',
        secondary: '#FACD66',
        light: '#EFEEE0',
        dark: '#1D2123',
        'dark-alt': '#1A1E1F',
      },
    },
  },
  plugins: [],
};

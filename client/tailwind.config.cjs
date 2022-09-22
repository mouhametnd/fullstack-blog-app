const autoprefixer = require('autoprefixer');
const { default: postcss } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pri: ['Montserrat', 'sans-serif'],
        sec: ['Poppins', 'monospace'],
      },
    },
  },
  plugins: [autoprefixer, postcss],
};

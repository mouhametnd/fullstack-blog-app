const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
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

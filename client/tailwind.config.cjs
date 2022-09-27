const autoprefixer = require('autoprefixer');
const { default: postcss } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyBg: '#f7f8fd',
        white: '#ffffff',
        cyanGreen: {
          100: '#17C3B2',
          200: '#5DD9C1',
          300: '#ACFCD9',
        },
        brown: {
          100: '#EE6C4D',
          200: '#FFCB77',
        },
        gray: {
          100: '#888',
          200: '#666',
          300: '#647196'
        },

        red:  {
            100:'#F87171'
        }
      },
      fontFamily: {
        pri: ['Montserrat', 'sans-serif'],
        sec: ['Poppins', 'monospace'],
      },
    },
  },
  plugins: [autoprefixer, postcss],
};

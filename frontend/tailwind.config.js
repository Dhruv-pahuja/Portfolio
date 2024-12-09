import { plugin } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin,
  ],
  variants:{
    scrollbar: ['dark'],
  }
}


/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      //global colors:
      gray: colors.slate,
      pink: colors.pink,
      green: colors.teal,
      purple: colors.indigo,
      blue: colors.blue,

      // Light Mode Colors
      lightBg: colors.slate[50],
      lightAccBg: colors.blue[100],
      darkText: colors.slate[950],

      // Dark Mode Colors
      darkBg: colors.slate[950],
      darkAccBg: colors.slate[800],
      lightText: colors.slate[50],
    },
    fontFamily: {
      birzia: ['Birzia', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      gray: colors.slate,
      pink: colors.pink,
      green: colors.teal,
      purple: colors.indigo,
      blue: colors.blue,

      lightBg: colors.slate[100],
      lightAccBg: colors.blue[100],
      darkText: colors.slate[950],
      discordLight: colors.indigo[400],

      // Dark Mode Colors
      darkBg: colors.slate[950],
      darkAccBg: colors.slate[900],
      lightText: colors.slate[50],
      discordDark: colors.white,
    },
    fontFamily: {
      birzia: ['Birzia', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      'hero-pattern': "url('/images/skeleton_loader.png')",
    },
    container: {
      padding: '4rem',
    },
  },
  plugins: [],
}

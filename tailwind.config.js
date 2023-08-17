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
      'group-310': "url('/images/Group 310.svg')",
      'dark-gradient': 'linear-gradient(180deg, rgba(15, 23, 41, 0.00) 0%, rgba(2, 6, 22, 0.90) 57.86%, #020616 100%)',
      'light-gradient': 'linear-gradient(180deg, rgba(241, 245, 249, 0.00) 1.56%, rgba(241, 245, 249, 0.90) 41.32%, #F1F5F9 100%)',
    },
    container: {
      padding: '4rem',
    },
  },
  plugins: [],
}

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
    extend: {
      colors: {
        ...colors,
        gray: colors.slate,
        pink: colors.pink,
        green: colors.teal,
        purple: colors.indigo,
        blue: colors.blue,

        lightBg: colors.slate[100],
        lightAccBg: colors.indigo[100],
        darkText: colors.slate[950],
        discordLight: colors.indigo[400],

        // Dark Mode Colors
        darkBg: colors.slate[950],
        darkAccBg: colors.slate[800],
        lightText: colors.slate[50],
        discordDark: colors.white,
      },
    },
    fontFamily: {
      birzia: ['Birzia', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      'hero-pattern': "url('/images/skeleton_loader.png')",
      'dark-gradient': 'linear-gradient(180deg, rgba(15, 23, 41, 0.00) 0%, rgba(2, 6, 22, 0.90) 57.86%),url("/images/group-310.svg")',
      'light-gradient': "linear-gradient(180deg, rgba(241, 245, 249, 0.00) 1.56%, rgba(241, 245, 249, 0.90) 41.32%), url('/images/group-310.svg')",
    },
    fontSize: {
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      xl: '1.125rem', // 18px
      '2xl': '1.25rem', // 20px
      '3xl': '1.5rem', // 24px
      '4xl': '2.125rem', // 34px
      '5xl': '3.75rem', // 60px
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
  },
  plugins: [],
}

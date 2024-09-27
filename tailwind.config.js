/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      xxs: '400px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: { lilita: 'lilita', manrope: 'manrope', gochi: 'gochi' },
      colors: { mustard: '#FECD60', clay: '#1f2937', purple: '#c084fc' },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '49%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        blink: 'blink 1.25s infinite',
        wave: 'wave 3s infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        // Scale everything up at larger sizes
        html: { fontSize: '16px' },
        '@screen xs': { html: { fontSize: '18px' } },
        '@screen 2xl': { html: { fontSize: '20px' } },
      })
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.drag-none': {
          '-webkit-user-drag': 'none',
          '-khtml-user-drag': 'none',
          '-moz-user-drag': 'none',
          '-o-user-drag': 'none',
          'user-drag': 'none',
        },
      })
    }),
  ],
}

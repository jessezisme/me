import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const brandColors = () => ({
  brand1: '#f3cd48',
  brand2: '#ee511a',
  brand3: '#d42527',
  brand4: '#a01d42',
  brand5: '#73284e',
});

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  corePlugins: {
    container: false,
    fontWeight: false,
  },
  plugins: [require('./tailwind/plugins/font-variation-plugin.js')],
  theme: {
    extend: {
      colors: ({ theme }) => ({
        ...brandColors(),
        'link-accent': brandColors().brand3,
        'link-accent-hover': brandColors().brand1,
      }),
      textColor: ({ theme }) => ({
        body: {
          DEFAULT: theme('colors')['gray']['950'],
          v1: theme('colors')['gray']['800'],
          v2: theme('colors')['gray']['600'],
          inv: {
            DEFAULT: theme('colors')['gray']['50'],
            v1: theme('colors')['gray']['200'],
            v2: theme('colors')['gray']['400'],
          },
        },
      }),
      fontFamily: {
        body: ['Hanken', ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;

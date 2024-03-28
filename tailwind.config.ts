import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        black: { primary: '#101010', secondary: '#151515' },
        white: { primary: '#f7f7f7', secondary: '#eeeeee' },
        terminal: { primary: '#1e1e1e', secondary: '#89ff69' },
      },
      fontFamily: {
        terminal: "'Iosevka', monospace;",
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  // plugins: [require('@tailwindcss/typography')],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['Crimson Text', 'sans-serif'],
        nanum: ['Nanum Myeongjo', 'serif'],
      },
      colors: {
        primaryColor: {
          defaultColor: '#0393F1',
          fromColor: '#59d2ff',
          toColor: '#028ce7',
        },
        secondColor: {
          defaultColor: '#27272a',
          light: '#52525b',
          dark: '#71717a',
        },
        bgColor: {
          light: '#f9fafb',
          dark: '#18181b',
        },
        textColor: {
          light: '#262626',
          dark: '#d4d4d8',
        },
      },
    },
  },
  plugins: [],
};

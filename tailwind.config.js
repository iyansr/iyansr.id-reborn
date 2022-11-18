module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          custom: '#f92672',
        },
        teal: {
          custom: '#B9FBDF',
        },
        purple: {
          custom: '#FF82E2',
        },
        earth: {
          1: '#594F43',
          2: '#403930',
        },
        bg: {
          0: '#f3f2ff',
          1: '#fff8f2',
          2: '#ffeed9',
          3: '#ffe5cc',
          4: '#ffddbf',
        },
        biru: {
          1: '#4e5e80',
          2: '#4d5566',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
};

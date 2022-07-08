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
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
};

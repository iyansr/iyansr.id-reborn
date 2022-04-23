module.exports = {
	content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
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
	plugins: [require('@tailwindcss/line-clamp')],
}

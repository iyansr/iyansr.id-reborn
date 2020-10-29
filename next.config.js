const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./src/utils/generateSitemap')
		}

		return config
	},
	images: {
		domains: ['iyansr.id', 'localhost:8300', 'ghchart.rshah.org', 'res.cloudinary.com', 'avatars3.githubusercontent.com'],
	},
})

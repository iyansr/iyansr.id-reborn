module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./src/utils/generateSitemap')
		}

		return config
	},
	images: {
		domains: ['ghchart.rshah.org', 'res.cloudinary.com'],
	},
}

module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./src/utils/generateSitemap')
		}

		return config
	},
	images: {
		domains: ['iyansr.id', 'localhost:8300', 'ghchart.rshah.org', 'res.cloudinary.com', 'avatars3.githubusercontent.com'],
	},
}

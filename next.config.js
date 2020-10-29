module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./src/utils/generateSitemap')
		}

		return config
	},
}

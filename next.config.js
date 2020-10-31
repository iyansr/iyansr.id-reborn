const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const readingTime = require('reading-time')

const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
	layoutPath: 'src/components/Template',
	defaultLayout: true,
	fileExtensions: ['mdx'],
	remarkPlugins: [],
	rehypePlugins: [],
	usesSrc: false,
	extendFrontMatter: {
		process: (mdxContent) => ({
			wordCount: mdxContent.split(/\s+/gu).length,
			readingTime: readingTime(mdxContent),
		}),
	},
	reExportDataFetching: false,
})(
	withPWA({
		pwa: {
			dest: 'public',
			runtimeCaching,
			disable: process.env.NODE_ENV === 'development',
		},
		images: {
			domains: ['iyansr.id', 'ghchart.rshah.org', 'res.cloudinary.com', 'avatars3.githubusercontent.com', 'ik.imagekit.io'],
		},

		webpack: (config, { isServer }) => {
			if (isServer) {
				require('./src/utils/generateSitemap')
			}

			return config
		},
	})
)

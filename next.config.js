const { withContentlayer } = require('next-contentlayer')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
	images: {
		domains: ['blogger.googleusercontent.com', 'ik.imagekit.io', 'res.cloudinary.com'],
	},
})

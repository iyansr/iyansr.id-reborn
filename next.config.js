const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },

  poweredByHeader: false,

  images: {
    domains: ['blogger.googleusercontent.com', 'ik.imagekit.io', 'res.cloudinary.com'],
    minimumCacheTTL: 84600 * 90, // 90days
  },
});

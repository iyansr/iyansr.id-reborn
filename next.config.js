const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,

    legacyBrowsers: false,
    browsersListForSwc: true,

    images: { allowFutureImage: true },
    runtime: 'experimental-edge',
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,

  images: {
    domains: ['blogger.googleusercontent.com', 'ik.imagekit.io', 'res.cloudinary.com'],
    minimumCacheTTL: 84600 * 90, // 90days
  },
});

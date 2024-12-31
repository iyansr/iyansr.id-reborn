/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'ik.imagekit.io',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/map/global',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;

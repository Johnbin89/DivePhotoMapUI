/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/map/public',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;

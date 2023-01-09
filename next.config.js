/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.github.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig

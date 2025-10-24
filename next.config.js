/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  env: {
    AGILED_API_KEY: process.env.AGILED_API_KEY,
    SENDFOX_API_KEY: process.env.SENDFOX_API_KEY,
    TIDYCAL_API_KEY: process.env.TIDYCAL_API_KEY,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Railway deployment (non-standalone for better compatibility)
  // output: 'standalone',
  
  // Image configuration
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
      {
        protocol: 'https',
        hostname: 'beaconir.com',
      },
    ],
  },
  
  // Environment variables
  env: {
    AGILED_API_KEY: process.env.AGILED_API_KEY,
    SENDFOX_API_KEY: process.env.SENDFOX_API_KEY,
    TIDYCAL_API_KEY: process.env.TIDYCAL_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig

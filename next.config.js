/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',  // Leave empty if not using a specific port
        pathname: '/**',  // This allows any path under the hostname
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Discern-Match-Web',
  assetPrefix: '/Discern-Match-Web',  // ← add this
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
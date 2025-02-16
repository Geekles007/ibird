/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  output: 'export',
  distDir: 'out',
  images: {
    domains: ['cdn.dribbble.com'],
    unoptimized: true,
  },
});

module.exports = nextConfig;

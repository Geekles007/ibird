/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['cdn.dribbble.com'],
    unoptimized: true,
  },
});

module.exports = nextConfig;

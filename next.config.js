/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  images: {
    domains: ['cdn.dribbble.com'],
  },
});

module.exports = nextConfig;

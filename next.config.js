/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    trailingSlash: false,
    images: { unoptimized: false }
  }
module.exports = nextConfig

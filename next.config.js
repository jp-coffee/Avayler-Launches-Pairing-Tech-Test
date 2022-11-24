/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['imgur.com', 'images2.imgbox.com', 'i.imgur.com'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: "/",
  images: {
    // unoptimized: true,
    domains: ["images.dog.ceo"],
  },
};

module.exports = nextConfig;

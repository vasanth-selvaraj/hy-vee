/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/",
  output:"export",
  images: {
    domains: ["images.dog.ceo"],
  },
};

module.exports = nextConfig;

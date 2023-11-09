/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/",
  images: {
    // unoptimized: true,
    domains: ["images.dog.ceo"],
  },
};

module.exports = nextConfig;

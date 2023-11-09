/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  assetPrefix: "/",
  images: {
    // unoptimized: true,
    domains: ["images.dog.ceo"],
  },
};

module.exports = nextConfig;

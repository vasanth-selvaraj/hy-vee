/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // unoptimized: true,
    domains: ["images.dog.ceo"],
  },
};

module.exports = nextConfig;

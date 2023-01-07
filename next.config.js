/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.squarespace-cdn.com", "dummyimage.com"],
  },
};

module.exports = nextConfig;

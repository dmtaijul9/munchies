/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "munchiesprod.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "munchiesprod.s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "api.lorem.space",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
      },
    ],
  },
};

module.exports = nextConfig;

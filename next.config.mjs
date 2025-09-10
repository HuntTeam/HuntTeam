/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/v1/request",
      },
      {
        protocol: "https",
        hostname: "api.huntteam.ru",
        pathname: "/api/v1/request",
      },
    ],
  },
};

export default nextConfig;

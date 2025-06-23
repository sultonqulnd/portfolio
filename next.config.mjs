/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": new URL("src", import.meta.url).pathname,
    };
    return config;
  },
};

export default nextConfig;

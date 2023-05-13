/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeimg.com", "media.istockphoto.com", "comify.in"],
    loader: "custom",
    loaderFile: "./helpers/imageLoader.js",
  },
};

module.exports = nextConfig;

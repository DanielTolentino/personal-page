module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    loader: "default",
    formats: ["image/webp"],
    unoptimized: true,
  },
};

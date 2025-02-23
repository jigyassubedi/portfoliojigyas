/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/portfoliojigyas", // Important for GitHub Pages
};
module.exports = nextConfig;

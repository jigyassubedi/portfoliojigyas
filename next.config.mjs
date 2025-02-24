/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out", // Ensures the build is placed in the 'out' directory
  images: {
    unoptimized: true, // Required for GitHub Pages and static exports
  },
  basePath: "/portfoliojigyas", // Important for GitHub Pages deployment
  reactStrictMode: true, // Keeps React in strict mode
};

export default nextConfig;

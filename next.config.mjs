/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/portfoliojigyas" : "",
  assetPrefix: isProd ? "/portfoliojigyas/" : "",
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This will make the middleware run on Node.js runtime instead of Edge
    middleware: {
      skipMiddlewareUrlNormalize: true,
      skipTrailingSlashRedirect: true,
    },
  },
  // Add this to ensure proper functioning of WalletConnect and other Node.js dependencies
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
}

module.exports = nextConfig 
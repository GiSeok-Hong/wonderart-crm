const withPWA = require('next-pwa')({
  customWorkerDir: 'src/worker',
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPWA(nextConfig);

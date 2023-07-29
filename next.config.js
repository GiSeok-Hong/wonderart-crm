const withPWA = require("next-pwa")({
  customWorkerDir: "src/worker",
  dest: "public",
});
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPWA(nextConfig);

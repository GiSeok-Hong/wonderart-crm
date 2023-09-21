const withPWA = require('next-pwa')({
  customWorkerDir: 'src/worker',
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withPWA(nextConfig);

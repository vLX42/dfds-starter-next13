/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: {
      autoLabel: 'never'
    },
  },
  experimental: {
    optimizePackageImports: [
      "@dfds-ui/react-components",
      "@dfds-ui/colors",
      "@dfds-ui/grid",
      "@dfds-ui/icons",
      "@dfds-ui/forms",
      "@dfds-ui/modal",
      "@dfds-frontend/cookie-consent",
    ],
  },
  transpilePackages: [
    "@dfds-ui/icons",
    "@dfds-ui/forms",
    "@dfds-ui/react-components",
    "@dfds-ui/theme",
    "@dfds-ui/grid",
    "@dfds-ui/typography",
    "@dfds-ui/experiences",
  ],
};

module.exports = nextConfig;

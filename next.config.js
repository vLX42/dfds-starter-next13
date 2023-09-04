/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.annihil.us"], // Add the domain 'i.annihil.us' to the list of allowed domains
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

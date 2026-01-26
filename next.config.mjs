/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hackmd.io',
        },
      ],
    },
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.tex$/,
        use: 'raw-loader',
      });
      return config;
    },
    // Use webpack for builds (needed for .tex file handling)
    // Turbopack doesn't support raw-loader yet
    turbopack: {},
  };
  
  export default nextConfig;
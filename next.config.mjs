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
    async redirects() {
      return [
        {
          source: '/writing/the-coasean-singularity',
          destination: '/writing/trillions-of-markets',
          permanent: true,
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/supa',
          destination: '/writing/SUPA_AMM.pdf',
        },
        {
          source: '/local-minima',
          destination: '/writing/Local_Minima_Are_Rare_in_High_Dimensions.pdf',
        },
      ];
    },
  };
  
  export default nextConfig;

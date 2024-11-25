const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pokemontcg.io'],
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/pokemon-tcg-ez-search/',
  basePath: '/pokemon-tcg-ez-search',
  output: 'export'
};

export default nextConfig;
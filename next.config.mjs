const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pokemontcg.io'],
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/pokemon-tcg-ez-search/' : '',
  basePath: isProd ? '/pokemon-tcg-ez-search' : '',
  output: 'export'
};

export default nextConfig;
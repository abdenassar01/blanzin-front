import createNextIntlPlugin from 'next-intl/plugin'
import routingRedirects from './redirect-routes.js'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
  images: {
    domains: process.env?.NEXT_IMAGE_DOMAIN?.split(','),
    unoptimized: true,
  },
  typescript: {},
  async redirects() {
    return routingRedirects
  },
  webpack: config => {
    config.resolve.alias.canvas = false
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
    }
    return config
  },
}

export default withNextIntl(nextConfig)

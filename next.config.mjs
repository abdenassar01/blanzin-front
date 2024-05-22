import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/customer',
        permanent: true,
        locale: false,
      },
      {
        source: '/blog',
        destination: '/blog/all',
        permanent: true,
        locale: false,
      },
      {
        source: '/profile',
        destination: '/profile/account',
        permanent: true,
        locale: false,
      },
      {
        source: '/application',
        destination: '/application/overview',
        permanent: true,
        locale: false,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
    };
    return config;
  },
};

export default withNextIntl(nextConfig);

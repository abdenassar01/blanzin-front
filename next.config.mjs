import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {},
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/en/customer',
        permanent: true,
      },
      {
        source: '/fr',
        destination: '/fr/customer',
        permanent: true,
      },
      {
        source: '/ar',
        destination: '/ar/customer',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

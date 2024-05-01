import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {},
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/en/overview/customer',
        permanent: true,
      },
      {
        source: '/fr',
        destination: '/fr/overview/customer',
        permanent: true,
      },
      {
        source: '/ar',
        destination: '/ar/overview/customer',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

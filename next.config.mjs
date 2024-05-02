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
    ];
  },
};

export default withNextIntl(nextConfig);

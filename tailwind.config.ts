/** @type {import('tailwindcss').Config} */
const colors = require('./src/configs/colors');

module.exports = {
  content: [
    './public/**/*.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      keyframes: {
        enter: {
          '0%': {
            marginRight: '-700px',
            tramsform: 'scale(0.8)',
            opacity: 0.5,
          },
          '100%': {
            marginRight: '0',
            tramsform: 'scale(1)',
            opacity: 1,
          },
        },
        leave: {
          '0%': {
            marginLeft: '-700px',
            tramsform: 'scale(0.8)',
          },
          '100%': {
            marginLeft: '0',
            tramsform: 'scale(1)',
          },
        },
      },
      animation: {
        enter: 'enter .5s ease-in',
        leave: 'leave .5s ease-out',
      },
    },
    colors: colors,

    fontSize: {
      xxs: 'clamp(12px, 0.833vw, 12px)', // 12px
      xs: 'clamp(12px, 0.972vw, 14px)', // 14px
      sm: 'clamp(14px, 1.111vw, 16px)', // 14px
      base: 'clamp(16px, 1.25vw, 18px)', // 16px
      xl: 'clamp(18px, 1.042vw, 20px)', // 18px
      xbase: 'clamp(20px, 1.528vw, 22px)', // 22px
      xxl: 'clamp(22px, 1.667vw, 24px)', // 24px
      xm: 'clamp(26px, 1.944vw, 28px)', // 28px
      xxm: 'clamp(28px, 2.083vw, 30px)', // 30px
      '2xl': 'clamp(30px, 2.5vw, 36px)', // 36px
      '3xl': 'clamp(36px, 2.778vw, 40px)', // 36px
      '4xl': 'clamp(40px, 3.333vw, 48px)', // 36px
      'mb-xs': '2.824vw', // 12px
      'mb-xxs': '3.59vw', // 14px
      'mb-xbase': '3.765vw', // 16px
      'mb-base': '4.235vw', // 18px
      'mb-xl': '4.854vw', // 20px
      'mb-2xl': '6.588vw', // 28px
      'mb-3xl': '9.412vw', // 40px
    },
    screens: {
      '2xl': '1700px',
      xl: '1440px',
      lg: { min: '1000px', max: '1250px' },
      md: { min: '767px', max: '1200px' },
      sm: { min: '20px', max: '767px' },
    },
    container: {
      center: true,
      screens: {
        '2xl': '2050px',
        xl: '1216px',
        lg: '950px',
        md: '650px',
        sm: '350px',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/typography')],
};

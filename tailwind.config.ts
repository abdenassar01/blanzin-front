/** @type {import('tailwindcss').Config} */
const colors = require("./src/configs/colors");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        animFw: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        animFw: "animFw 5s linear infinite",
      },
    },
    colors: colors,

    fontSize: {
      xxs: "clamp(12px, 0.833vw, 12px)", // 12px
      xs: "clamp(12px, 0.972vw, 14px)", // 14px
      sm: "clamp(14px, 1.111vw, 16px)", // 16px
      base: "clamp(16px, 1.25vw, 18px)", // 18px
      xl: "clamp(16px, 1.042vw, 20px)", // 20px
      xbase: "clamp(20px, 1.528vw, 22px)", // 22px
      xxl: "clamp(22px, 1.667vw, 24px)", // 24px
      xm: "clamp(26px, 1.944vw, 28px)", // 28px
      xxm: "clamp(28px, 2.083vw, 30px)", // 30px
      "2xl": "clamp(30px, 2.5vw, 36px)", // 36px
      "3xl": "2.778vw", // 40px
      "4xl": "3.333vw", // 48px
      "mb-xs": "2.824vw", // 12px
      "mb-xxs": "3.59vw", // 14px
      "mb-xbase": "3.765vw", // 16px
      "mb-base": "4.235vw", // 18px
      "mb-xl": "4.854vw", // 20px
      "mb-2xl": "6.588vw", // 28px
      "mb-3xl": "9.412vw", // 40px
    },
    screens: {
      "2xl": "1700px",
      xl: "1440px",
      lg: { min: "1000px", max: "1250px" },
      md: { min: "767px", max: "1200px" },
      sm: { min: "20px", max: "767px" },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1216px",
        xl: "1216px",
        lg: "950px",
        md: "650px",
        sm: "350px",
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require("@tailwindcss/typography")],
};

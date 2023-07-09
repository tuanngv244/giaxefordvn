/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      screens: {
        mobile: "320px",
        tablet: "768px",
        laptop: "1199px",
        laptop_large: "1920px",
      },
      colors: {
        black: "#000",
        white: "#fff",
        darkGray: "#484a4a",
        gray: "#4d4d4d",
        lightGray: "#b0b4b8",
        lightGray100: "#cccccc",
        lightGray10: "#f5f5f5",
        mask: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.9360337885154062) 100%)",
        darkMain: "#172554",
        main: "#1e3a8a",
        main600: "#1e40af",
        main500: "#1d4ed8",
        main400: "#3b82f6",
        main300: "#60a5fa",
        main200: "##93c5fd",
        main100: "#bfdbfe",
        blackRgba: "rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        sm: "1rem",
        base: "1.2rem",
        xl: "1.4rem",
        "2xl": "1.6rem",
        "3xl": "2rem",
        "4xl": "2.4rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "6xl": "5.6rem",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      borderRadius: {
        none: "0",
        4: "0.4rem",
        6: "0.6rem",
        10: "1rem",
        30: "3rem",
        50: "50%",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      },
      maxWidth: {
        "9/10": "90%",
        "7/10": "70%",
        "5/10": "50%",
        "3/10": "30%",
      },
      boxShadow: {
        header: "0px 2px 10px 0px rgba(30,58,138,0.3)",
        modal:
          "0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

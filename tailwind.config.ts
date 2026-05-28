import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E8EDF5",
          100: "#C5D0E6",
          200: "#9FB0D5",
          300: "#7890C4",
          400: "#5C77B8",
          500: "#3F5DAC",
          600: "#2D4A99",
          700: "#1E3580",
          800: "#142666",
          900: "#0F2B5B",
          950: "#0A0F1E",
        },
        brand: {
          orange: "#F97316",
          navy: "#0F2B5B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

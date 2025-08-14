import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        newSpirit: ["New Spirit", "serif"],
        founderGrotesk: ["Founder Grotesk", "sans-serif"],
      },

      colors: {
        primary: "#961c1c",
        dark: "#0F172A",
        secondary: "#64748b",
        light: "#CBD5E1",
        navy: "#181823",
      },

      gridTemplateColumns: {
        "auto-fit-100": "repeat(auto-fit,1fr)",
      },
      height: {
        128: "60vh",
      },
    },
  },
  plugins: [],
};
export default config;

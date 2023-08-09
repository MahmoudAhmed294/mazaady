import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        md: "3px 5px 37px #00000017",
      },
      colors: {
        white: "#fff",
        "gray-100": "#00000017",
        "gray-200": "#00000029",
        "gray-300": "#FEFEFE",
        "gray-400": "#F3F3F3",
        "gray-500": "#E3E3E3",
        "gray-600": "#CCCCCC",
        "gray-700": "#808080",
        "gray-800": "#707070",
        "black-100": "#414141",
        "black-200": "#323232",
        "black-300": "#1D1D1D",
        "black-400": "#000000",
        "pink-100": "#D20653",
        "pink-200": "#9B0257",
        "pink-300": "#FFF4E8",
        "purple-100": "#44215D",
        "orange-100": "#FFC200",
        "orange-200": "#FDBC01",
        "orange-300": "#FDBA03",
        "orange-400": "#FFBC06",
        "orange-500": "#FFAE18",
        "orange-600": "#FF9736",
        "orange-700": "#FF953A",
        "orange-800": "#FF951D",
      },
    },
  },
  plugins: [],
};
export default config;

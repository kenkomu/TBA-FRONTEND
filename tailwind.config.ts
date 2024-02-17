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
        "gradient-linear-starknet-gradient":
          "linear-gradient(90deg, #EC796B 0%, #D672EF 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "off-white": "#F6F6F6",
        "deep-blue": "#0C0C4F",
        "bg-white": "#FAFAFA",
      },
    },
    transform: {
      growth: "scale(1, 1)",
    },
  },
  plugins: [],
};
export default config;

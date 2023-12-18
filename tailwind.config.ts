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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "lemon-landing-dark": "url('/lemon landing.png')",
      },
      colors: {
        bg: "#100F0F",
        tx: "#CECDC3",
        lmn: "#AD8301",
      },
      lineHeight: {
        tight: "0.75",
      },
    },
  },
  plugins: [],
};
export default config;

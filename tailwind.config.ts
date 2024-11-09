import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.24), #1972f5) ',
        'custom-gradient-dark': 'linear-gradient(180deg, rgba(255, 255, 255, 0.24), #030d26) ',

      },
    },
  },
  plugins: [],
};
export default config;

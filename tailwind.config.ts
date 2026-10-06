import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: { ink: "#0E1B2C", mist: "#F3F5F7", line: "#DAE0E6", brand: "#0B6B5D", deep: "#084C42", sun: "#F2B544", slate: "#4A5868" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-body)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "comic-bg": "url('./ui/img/comic-bg.jpeg')",
      },
      colors: {
        marvelRed: "#ED1D24",
        offWhite: "#FAF9F6",
      },
    },
  },
  plugins: [],
};
export default config;

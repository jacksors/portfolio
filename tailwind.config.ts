import type {Config} from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",

        foreground: {
          DEFAULT: "var(--foreground)",
          offset: "var(--foreground-offset)",
        },

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          offset: "var(--primary-offset)",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

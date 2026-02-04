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
        projectHolder: {
          DEFAULT: "#1e40af", // Bleu Royal (Porteurs)
          hover: "#1e3a8a",
        },
        professional: {
          DEFAULT: "#0d9488", // Vert Émeraude (Pros)
          hover: "#0f766e",
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
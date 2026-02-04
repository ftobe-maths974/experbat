// tailwind.config.ts
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
          DEFAULT: "#1e40af", // Bleu Royal
          hover: "#1d3a99",   // Version assombrie pour le :hover
        },
        professional: {
          DEFAULT: "#0d9488", // Vert Émeraude/Turquoise
          hover: "#0b7f73",   // Version assombrie pour le :hover
        },
      },
      borderRadius: {
        'xl': '1rem', // Arrondi généreux
      },
      fontFamily: {
        // Assurez-vous d'importer la police Geist dans votre projet
        // via le fichier `src/lib/fonts.ts` et de l'appliquer dans le layout racine.
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

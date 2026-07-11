import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#15102A",
        bgAlt: "#1E1638",
        card: "#FFF8EC",
        pink: "#FF3E7F",
        gold: "#FFC933",
        cyan: "#33E4FF",
        ink: "#120C24",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        chunk:
          "inset 0 3px 0 0 rgba(255,255,255,0.35), inset 0 -4px 0 0 rgba(0,0,0,0.2), 6px 6px 0 0 #120C24",
        chunkPressed:
          "inset 0 2px 0 0 rgba(255,255,255,0.18), inset 0 -2px 0 0 rgba(0,0,0,0.28), 2px 2px 0 0 #120C24",
        chunkLg:
          "inset 0 4px 0 0 rgba(255,255,255,0.35), inset 0 -6px 0 0 rgba(0,0,0,0.2), 10px 10px 0 0 #120C24",
      },
      borderRadius: {
        chunk: "10px",
      },
    },
  },
  plugins: [],
};

export default config;

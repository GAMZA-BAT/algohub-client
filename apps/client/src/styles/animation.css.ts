import { keyframes } from "@vanilla-extract/css";

export const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const moveUp = keyframes({
  "0%": { transform: "translateY(200%)" },
  "100%": { transform: "translateY(0)" },
});

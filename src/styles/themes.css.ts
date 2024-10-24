import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  zIndex: {
    bottom: "1",
    middle: "2",
    high: "3",
    top: "4",
  },
  // spacing: {
  //   none: '0',
  //   xxs: '1rem',
  //   xs: '1.2rem',
  //   s: '1.4rem',
  //   m: '1.6rem',
  //   xxl: '2rem',
  //   xl: '2.2rem',
  //   l: '2.4rem',
  //   ll: '2.6rem',
  // },
  color: {
    background: "background",
    foreground: "foreground",
    purple: "#6659ff",
    purple2: "#a39cff",
    purple3: "#e0deff",
    mint: "#35bcb3",
    yellow: "#d2f35c",
    red: "#ff005c",
    blue: "#3b73fa",
    orange: "#ff5722",
    white: "#ffffff",
    wg: "#f9fafb",
    wg2: "#d7d7d7",
    lg1: "#f3f4f6",
    lg2: "#e7eaf2",
    mg1: "#bcc0cd",
    mg2: "#9ba1b4",
    mg3: "#79829a",
    mg4: "#464f67",
    mg5: "#222734",
    mg6: "#161c24",
    dg: "#2a2a2a",
    bg: "#101217",
    black: "#000000",
    transparent_mg4: "rgba(70, 79, 103, 0.2)",
    transparent_purple2_50: "rgba(163, 156, 255, 0.50)",
    transparent_black_50: "rgba(0, 0, 0, 0.50)",
    gradi_card:
      "linear-gradient(271deg, rgba(14, 16, 20, 0.90) -12.2%, rgba(33, 37, 46, 0.00) 99.36%)",
    gradi_BG:
      "radial-gradient(96.85% 96.85% at 50% 3.15%, rgba(163, 156, 255, 0.80) 0%, rgba(16, 18, 23, 0.00) 100%)",
    error: "#ff3c53",
  },
  font: {
    Head1_B_20: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "28px",
      letterSpacing: "-0.2px",
    },
    Head1_SB_20: {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "28px",
      letterSpacing: "-0.3px",
    },
    Head1_M_20: {
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "28px",
      letterSpacing: "-0.2px",
    },
    Head2_B_18: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "28px",
      letterSpacing: "-0.18px",
    },
    Head2_SB_18: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "28px",
      letterSpacing: "-0.18px",
    },
    Title1_SB_16: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "23.2px",
      letterSpacing: "-0.16px",
    },
    Title2_M_16: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24.8px",
      letterSpacing: "-0.4px",
    },
    Title2_R_16: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24.8px",
      letterSpacing: "-0.4px",
    },
    Body1_M_14: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "21.7px",
      letterSpacing: "-0.21px",
    },
    Body2_R_14: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20.3px",
      letterSpacing: "-0.35px",
    },
    Body3_SB_14: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20.3px",
      letterSpacing: "-0.35px",
    },
    Caption1_R_12: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "16.8px",
      letterSpacing: "-0.3px",
    },
    Caption2_SB_12: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "16.8px",
      letterSpacing: "-0.3px",
    },
    Caption3_M_12: {
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "-0.3px",
    },
  },
});

/**
 * @example
 * selectors: {
    "&::-webkit-scrollbar-button": {
      height: "1rem",
    },
    ...scrollTheme.scrollbar
  },
 */
export const scrollTheme = createGlobalTheme(":root", {
  scrollbar: {
    "&::-webkit-scrollbar": {
      width: "0.35rem",
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.color.mg1,
      borderRadius: "0.4rem",
    },
    "&::-webkit-scrollbar-thumb:active": {
      background: theme.color.mg4,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
      boxShadow: "none",
    },
  },
});

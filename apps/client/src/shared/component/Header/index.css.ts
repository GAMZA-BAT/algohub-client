// styles/header.css.ts
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
  height: "7.2rem",
  margin: 0,
  padding: "0 6.4rem",

  backgroundColor: theme.color.bg,
});

export const logoContainer = style({
  display: "flex",
  justifyContent: "flex-start",

  margin: 0,

  cursor: "pointer",
});

export const logoStyle = style({
  width: "7.4rem",
  height: "2rem",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.6rem",

  margin: 0,
  padding: 0,
});

export const iconStyle = style({
  width: "inherit",
  height: "inherit",
});

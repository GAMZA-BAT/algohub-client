import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const resetWrapper = style({
  width: "33.5rem",
  paddingTop: "7.3rem",

  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const titleTextStyle = style({
  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});

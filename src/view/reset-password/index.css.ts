import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const resetWrapper = style({
  width: "33.5rem",
});

export const titleTextStyle = style({
  paddingBottom: "2rem",

  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});

export const descTextStyle = style({
  padding: "0.4rem 0 3rem",

  color: theme.color.mg3,
  ...theme.font.Caption3_M_12,
});

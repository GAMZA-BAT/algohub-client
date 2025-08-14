import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const heartStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const heartCountStyle = style({
  ...theme.font.Caption1_R_12,
  color: theme.color.mg2,
});

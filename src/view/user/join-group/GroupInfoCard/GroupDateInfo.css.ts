import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const groupDateInfoWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",

  marginBottom: "0.8rem",
  color: theme.color.mg1,
});

export const groupDateStyle = style({
  color: theme.color.mg1,
  ...theme.font.Caption1_R_12,
});

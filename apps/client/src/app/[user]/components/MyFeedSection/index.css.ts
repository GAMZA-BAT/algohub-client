import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const titleStyle = style({
  ...theme.font.Head2_B_18,
  color: theme.color.white,

  marginTop: "2.6rem",
  marginBottom: "2rem",
});

export const listStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
});

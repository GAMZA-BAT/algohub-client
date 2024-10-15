import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sectionStyle = style({
  width: "100%",

  padding: "4.8rem 4.2rem",
});

export const titleStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});

export const listStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

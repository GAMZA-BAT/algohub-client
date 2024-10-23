import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sectionStyle = style({
  width: "80%",

  padding: "4.8rem 2.4rem",
});

export const titleStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,

  padding: "2rem",
});

export const listStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

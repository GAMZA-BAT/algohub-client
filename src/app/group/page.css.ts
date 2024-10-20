import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const listSectionStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "80%",
  padding: "2.4rem 4.2rem",
});

export const titleStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});

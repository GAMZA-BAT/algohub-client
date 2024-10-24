import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "28.8rem",
  height: "30rem",

  padding: "4.5rem 2.4rem",

  backgroundColor: theme.color.bg,
  borderRadius: "16px",
});

export const alertTextStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});

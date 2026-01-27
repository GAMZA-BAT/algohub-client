import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  width: "28.8rem",
  height: "30rem",

  padding: "4.2rem 2.4rem",

  borderRadius: "16px",
  backgroundColor: theme.color.mg6,
});

export const headingStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});

export const contentStyle = style({
  flex: 1,

  ...theme.font.Caption3_M_12,
  color: theme.color.wg,

  paddingBottom: "2.5rem",
});

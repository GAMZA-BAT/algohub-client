import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const modalWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "28.8rem",
  height: "30rem",
  padding: "4.2rem 2.4rem",

  background: theme.color.mg6,

  borderRadius: "16px",
  opacity: "0.9",
});

export const metaTextStyle = style({
  paddingTop: "0.7rem",
  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});

export const descTextStyle = style({
  whiteSpace: "pre-wrap",
  color: theme.color.white,
  ...theme.font.Caption3_M_12,
});

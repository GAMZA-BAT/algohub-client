import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const withdrawWrapper = style({
  display: "flex",
  flexDirection: "column",

  width: "28.8rem",
  height: "30rem",
  padding: "4.2rem 2.4rem",

  color: theme.color.white,
  background: theme.color.mg6,

  borderRadius: "16px",
  opacity: "0.9",
});

export const metaTextStyle = style({
  paddingTop: "0.7rem",
  ...theme.font.Title1_SB_16,
});

export const descWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexGrow: "1",
  gap: "1rem",
});

export const descTextStyle = style({
  ...theme.font.Caption3_M_12,
});

export const successStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flexGrow: "1",
});

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const iconWrapperStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",

  width: "100%",
  height: "7.2rem",

  padding: "0rem 6rem",
});

export const listStyle = style({
  position: "absolute",
  right: 0,

  zIndex: theme.zIndex.high,

  width: "16rem",

  padding: "1.6rem",

  backgroundColor: theme.color.mg6,
  borderRadius: "16px",
});

export const itemStyle = style({
  display: "flex",
  alignItems: "center",

  height: "3.6rem",

  borderRadius: "16px",

  ":hover": {
    backgroundColor: theme.color.transparent_mg4,
  },
});

export const linkStyle = style({
  height: "100%",

  padding: "1rem",

  ...theme.font.Caption1_R_12,
  color: theme.color.white,
});

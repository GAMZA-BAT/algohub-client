import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const listStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const itemStyle = style({
  position: "relative",

  display: "grid",
  gridTemplateColumns: "0.5fr 2fr 2fr 6fr",
  alignItems: "center",
  gap: "1.6rem",

  width: "100%",

  padding: "0.8rem 1.6rem",
});

export const activeStyle = style({
  backgroundColor: "rgba(34, 39, 52, 1)",
});

export const textStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.white,

  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const titleStyle = style({
  whiteSpace: "nowrap",
});

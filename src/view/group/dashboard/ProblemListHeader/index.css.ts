import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "grid",
  gridTemplateColumns: "0.6fr 2.7fr 2fr 2fr 2fr 2fr",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2.4rem",

  width: "100%",

  padding: "1rem 1.6rem",
});

export const leftAlignStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.mg2,

  textAlign: "left",
});

export const dateTextStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.4rem",
});

export const textStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.mg2,

  textAlign: "center",
});

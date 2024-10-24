import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "grid",
  gridTemplateColumns: "0.5fr 4fr 6fr",
  alignItems: "center",
  gap: "1.6rem",

  padding: "1rem 1.6rem",

  width: "100%",
});

export const textStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.mg2,
});

export const dateStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

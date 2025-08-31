import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const countWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "2rem",
  height: "2rem",
  borderRadius: "5rem",
  backgroundColor: theme.color.mg5,
});

export const countTextStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.mg2,
});

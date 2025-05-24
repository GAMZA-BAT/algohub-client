import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const timeWrapper = style({
  position: "relative",
  width: "100%",
});

export const timeTextStyle = style({
  position: "absolute",
  top: "0",
  right: "1.6rem",
  display: "flex",
  alignItems: "center",
  textAlign: "center",

  height: "100%",
  ...theme.font.Title2_M_16,
  color: theme.color.mg3,
});

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const dropdownStyle = style({
  position: "absolute",
  top: "6.5rem",
  right: "6rem",
});

export const dropdownTextStyle = style({
  color: theme.color.white,
  ...theme.font.Caption3_M_12,
});

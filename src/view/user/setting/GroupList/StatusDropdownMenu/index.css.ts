import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const triggerButtonStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.4rem",

  width: "100%",
  borderRadius: "0.4rem",
});

export const arrowDownStyle = style({
  width: "1.2rem",
  height: "1.2rem",
});

export const dropdownStyle = style({
  transform: "translate(0, 8px)",

  paddingTop: "1.6rem",
  paddingBottom: "1.6rem",
  ":hover": {
    opacity: 0.9,
  },
});

export const textStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.mg2,
});

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  width: "34rem",

  color: "white",
});

export const itemStyle = style({
  height: "8rem",
  justifyContent: "flex-end",
});

export const resetPwStyle = style({
  color: theme.color.purple,
  ...theme.font.Body1_M_14,
  padding: "0 .4rem",

  ":hover": {
    backgroundColor: theme.color.mg5,
    borderRadius: ".4rem",
  },
});

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const defaultButtonStyle = style({
  position: "relative",

  width: "2.5rem",
  height: "2.5rem",

  borderRadius: "5rem",

  cursor: "pointer",

  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const storyButtonStyle = style({
  width: "5rem",
  height: "5rem",
});

export const storyDivStyle = style({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",

  width: "11rem",
  height: "3.6rem",
  backgroundColor: theme.color.mg3,
});

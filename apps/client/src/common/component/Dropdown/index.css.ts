import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const dropdownContainer = style({
  position: "absolute",
  zIndex: theme.zIndex.top,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",

  width: "13.2rem",
  height: "fit-content",
  padding: "0.8rem 1rem",

  borderRadius: "0.8rem",
  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
});

export const dropdownDefaultStyle = style({
  position: "absolute",
});

export const dropdownItemStyle = style({
  display: "flex",
  alignItems: "center",

  width: "11.2rem",
  height: "3.4rem",
  padding: "0.5rem 0.8rem",

  borderRadius: "0.8rem",
  color: theme.color.white,
  textAlign: "left",
  ...theme.font.Caption3_M_12,

  cursor: "pointer",

  selectors: {
    "&:hover": {
      backgroundColor: theme.color.mg5,
    },
  },
});

export const storyContainer = style({
  position: "static",
  width: "7rem",
});

export const storyItemStyle = style({
  width: "5rem",
});

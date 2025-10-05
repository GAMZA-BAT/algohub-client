import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const notificationTabListStyle = style({
  display: "flex",
  alignItems: "center",

  height: "4.5rem",

  marginTop: "1.6rem",
});

export const notificationTabStyle = recipe({
  base: {
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",

    width: "9.25rem",
    padding: "1rem",

    color: theme.color.mg3,

    userSelect: "none",
    cursor: "pointer",
  },
  variants: {
    isSelected: {
      true: {
        color: theme.color.white,
      },
    },
  },
});

export const textStyle = style({
  ...theme.font.Title2_M_16,
});

export const indicatorStyle = style({
  position: "absolute",
  bottom: "-1px",
  left: 0,
  right: 0,

  height: "2px",
  width: "7.25rem",
  margin: "0 auto",

  backgroundColor: theme.color.white,
});

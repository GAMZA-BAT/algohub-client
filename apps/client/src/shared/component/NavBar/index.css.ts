import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const navStyle = style({
  width: "100%",
  height: "7.2rem",

  padding: "0rem 6rem",
});

export const navListStyle = style({
  display: "flex",
  alignItems: "center",
});

export const itemStyle = recipe({
  base: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    padding: "2.6rem 1.4rem",

    ...theme.font.Body3_SB_14,

    cursor: "pointer",
  },
  variants: {
    isSelected: {
      true: {
        color: theme.color.white,
      },
      false: {
        color: theme.color.mg3,
      },
    },
  },
});

export const indicatorStyle = style({
  position: "absolute",
  bottom: 2,
  left: 0,
  right: 0,

  margin: "0 auto",

  width: "100%",
  height: "2px",

  backgroundColor: theme.color.purple2,
});

export const iconStyle = recipe({
  base: {
    width: "2rem",
    height: "2rem",
  },
  variants: {
    variant: {
      fill: {
        ["& path" as string]: {
          fill: theme.color.white,
        },
      },
      stroke: {
        ["& path" as string]: {
          stroke: theme.color.white,
        },
      },
      nonefill: {
        ["& path" as string]: {
          fill: theme.color.mg3,
        },
      },
      nonestroke: {
        ["& path" as string]: {
          stroke: theme.color.mg3,
        },
      },
    },
  },
});

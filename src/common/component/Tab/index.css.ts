import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const tabListStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",

    height: "7.2rem",

    padding: "0 6.7rem",
  },
  variants: {
    variant: {
      primary: {},
      secondary: {
        gap: "0.75rem",
      },
    },
  },
});

export const tabStyle = recipe({
  base: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    color: theme.color.mg3,

    userSelect: "none",
  },
  variants: {
    variant: {
      primary: {
        padding: "2.5rem 1.8rem",
      },
      secondary: {
        padding: "1rem 0rem",
      },
    },
    isSelected: {
      true: {
        color: theme.color.white,
      },
    },
  },
});

export const textStyle = recipe({
  variants: {
    variant: {
      primary: {
        ...theme.font.Body3_SB_14,
      },
      secondary: {
        ...theme.font.Title1_SB_16,
      },
    },
  },
});

export const indicatorStyle = recipe({
  base: {
    position: "absolute",
    bottom: 2,
    left: 0,
    right: 0,

    margin: "0 auto",

    width: "100%",
    height: "2px",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.color.purple2,
      },
      secondary: {
        backgroundColor: theme.color.white,
      },
    },
  },
});

export const iconStyle = recipe({
  base: {},
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

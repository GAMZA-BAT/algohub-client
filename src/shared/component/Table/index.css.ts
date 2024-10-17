import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const headWrapper = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.4rem",

    height: "2rem",

    ...theme.font.Caption3_M_12,
    color: theme.color.mg2,
  },
  variants: {
    align: {
      left: {
        justifyContent: "left",
      },
      right: {
        justifyContent: "right",
        paddingRight: "1rem",
      },
    },
  },
});

export const pinStyle = recipe({
  base: {
    cursor: "pointer",
  },
  variants: {
    active: {
      true: {
        ["path" as string]: {
          fill: theme.color.purple,
        },
      },
      false: {
        ["path" as string]: {
          fill: theme.color.mg2,
        },
      },
    },
  },
});

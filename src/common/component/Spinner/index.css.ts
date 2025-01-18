import { recipe } from "@vanilla-extract/recipes";

export const spinnerStyle = recipe({
  base: {},
  variants: {
    size: {
      large: {
        width: "12rem",
        height: "12rem",
      },
      medium: {
        width: "8rem",
        height: "8rem",
      },
      small: {
        width: "6rem",
        height: "6rem",
      },
    },
  },
});

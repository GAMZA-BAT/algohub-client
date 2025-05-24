import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const errorWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const errorIconStyle = style({
  width: "2.4rem",
  height: "2.4rem",
});

export const msgStyle = recipe({
  base: {
    ...theme.font.Caption3_M_12,
    color: theme.color.mg3,
  },
  variants: {
    isError: {
      true: {
        color: theme.color.error,
      },
    },
  },
});

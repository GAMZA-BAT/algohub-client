import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const textStyle = recipe({
  base: {
    ...theme.font.Caption3_M_12,
  },
  variants: {
    isSelected: {
      true: {
        color: theme.color.white,
      },
      false: {
        color: theme.color.mg2,
      },
    },
  },
});

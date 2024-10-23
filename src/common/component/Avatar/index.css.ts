import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapperStyle = style({
  position: "relative",
  width: "fit-content",
});

export const avatarStyle = recipe({
  base: {
    borderRadius: "50%",
    overflow: "hidden",
    objectFit: "cover",
  },
  variants: {
    size: {
      mini: {
        width: "2.5rem",
        height: "2.5rem",
      },
      small: {
        width: "3.9rem",
        height: "3.9rem",
      },
      medium: {
        width: "8.2rem",
        height: "8.2rem",
      },
      large: {
        width: "12rem",
        height: "12rem",
      },
    },
    hasShadow: {
      true: {
        border: `0.5px solid ${theme.color.purple}`,
        boxShadow: `0px 0px 4px 0px ${theme.color.purple}`,
      },
    },
  },
});

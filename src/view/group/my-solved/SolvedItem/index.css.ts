import { theme } from "@/styles/themes.css";
import { MYSOLVED_GRID_FRACTION } from "@/view/group/my-solved/constant";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const itemStyle = recipe({
  base: {
    display: "grid",
    gridTemplateColumns: MYSOLVED_GRID_FRACTION,
    alignItems: "center",
    gap: "0.4rem",

    width: "100%",

    padding: "0.5rem 2rem",

    cursor: "pointer",
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: "rgba(34, 39, 52, 1)",
      },
    },
  },
});

export const textStyle = style({
  ...theme.font.Caption3_M_12,
  fontWeight: 500,
  color: theme.color.white,
  textAlign: "center",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const commentWrapperStyle = style({
  display: "flex",
  alignItems: "center",

  placeSelf: "center",
});

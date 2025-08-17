import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const textStyle = recipe({
  base: {
    ...theme.font.Caption3_M_12,
  },
  variants: {
    isSelected: {
      true: {
        color: theme.color.white,
        cursor: "pointer",
      },
      false: {
        color: theme.color.mg2,
      },
    },
  },
});

export const tableStyle = style({
  borderCollapse: "collapse",

  width: "92.5%",
});

export const theadStyle = style({
  height: "4.1rem",

  backgroundColor: theme.color.mg5,
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
});

export const tdStyle = style({
  height: "4.8rem",
  borderBottom: `1px solid ${theme.color.mg5}`,

  color: theme.color.mg2,
});

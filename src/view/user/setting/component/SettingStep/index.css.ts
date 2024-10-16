import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "2rem 0.8rem",
});

export const itemStyle = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
  gap: "1.6rem",

  padding: "1.4rem 3.2rem",
  cursor: "pointer",
});

export const texStyle = recipe({
  base: {
    ...theme.font.Body3_SB_14,
  },
  variants: {
    isActive: {
      true: {
        color: theme.color.white,
      },
      false: {
        color: theme.color.mg2,
      },
    },
  },
});

export const barStyle = style({
  position: "absolute",
  left: 0,
  width: "0.4rem",
  height: "2.4rem",
  backgroundColor: theme.color.white,
});

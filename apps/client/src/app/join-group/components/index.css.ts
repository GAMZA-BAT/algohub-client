import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: "0",

  position: "relative",

  width: "54rem",
  height: "65.6rem",
  padding: "7.4rem 2.2rem 2.6rem",

  borderRadius: "16px",
  backgroundColor: theme.color.bg,
});

export const btnWrapper = style({
  display: "flex",
  gap: "1.6rem",

  width: "100%",
  paddingTop: "2.4rem",
});

export const errorWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexShrink: "0",

  width: "28.8rem",
  height: "30rem",
  padding: "4.8rem 2.4rem 4.2rem",

  borderRadius: "20px",
  backgroundColor: theme.color.bg,
});

export const errorText = recipe({
  base: {
    ...theme.font.Title1_SB_16,
  },
  variants: {
    isHighlight: {
      true: {
        color: theme.color.purple2,
      },
      false: {
        color: theme.color.white,
      },
    },
  },
});

export const descErrorText = style({
  color: theme.color.mg1,
  ...theme.font.Body2_R_14,
});

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const solutionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",

  padding: "2rem",
});

export const solutionHeader = style({
  display: "flex",
  justifyContent: "space-between",
});

export const titleWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
});

export const titleStyle = style({
  ...theme.font.Head2_B_18,
  color: theme.color.white,
});

export const heartStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const heartCountStyle = style({
  ...theme.font.Caption1_R_12,
  color: theme.color.mg2,
});

export const inputTextStyle = style({
  ...theme.font.Caption1_R_12,
  color: theme.color.white,
});

export const codeCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100%",
  padding: "0.8rem 2rem",

  backgroundColor: theme.color.black,
  borderRadius: "10px",
  border: `1px solid ${theme.color.mg5}`,
});

export const codeStyle = recipe({
  base: {
    width: "100%",

    color: theme.color.yellow,

    ...theme.font.Caption1_R_12,
  },
  variants: {
    isExpanded: {
      false: { maxHeight: "10.2rem", overflow: "hidden" },
    },
  },
});

export const arrowStyle = recipe({
  variants: {
    direction: {
      up: { transform: "rotate(180deg)" },
      down: { transform: "rotate(0deg)" },
    },
  },
});

export const expandButtonStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",

  margin: "1.2rem",
  padding: "0.2rem 0.6rem",

  borderRadius: "4px",
  backgroundColor: theme.color.mg5,

  ...theme.font.Caption1_R_12,
  color: theme.color.mg2,

  cursor: "pointer",
});

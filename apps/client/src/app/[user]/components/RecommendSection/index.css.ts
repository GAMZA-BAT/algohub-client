import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const recommendSectionWrapper = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
  },
  variants: {
    noBorderBottom: {
      false: {
        borderBottom: `2px solid ${theme.color.mg5}`,
      },
    },
  },
});

export const recommendHeaderWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const recommendHeaderContentWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const recommendStudyTitle = style({
  color: theme.color.lg2,
  ...theme.font.Head2_B_18,
});

export const searchedStudyCountStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "2rem",
  height: "2rem",
  padding: "0.6rem",

  borderRadius: "50px",
  backgroundColor: theme.color.mg5,

  color: theme.color.lg2,
  ...theme.font.Caption3_M_12,
});

export const loadingWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

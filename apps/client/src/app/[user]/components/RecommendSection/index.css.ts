import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const recommendSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  borderBottom: `2px solid ${theme.color.mg5}`,
});

export const recommendHeaderWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const recommendStudyTitle = style({
  color: theme.color.lg2,
  ...theme.font.Head2_B_18,
});

export const studyListWrapper = style({
  display: "flex",
  flexDirection: "column",
});

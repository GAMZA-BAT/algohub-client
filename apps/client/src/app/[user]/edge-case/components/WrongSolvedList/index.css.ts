import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrongSolvedListTitleWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",

  paddingBottom: "0.8rem",
  marginBottom: "1.6rem",

  borderBottom: `1px solid ${theme.color.mg5}`,
});

export const wrongSolvedListTitleStyle = style({
  color: theme.color.lg2,
  ...theme.font.Caption2_SB_12,
});

export const wrongSolvedListContainer = style({
  padding: "4rem 2.4rem",
});

export const wrongSolvedListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const wrongSolvedListCountStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "2rem",
  height: "2rem",

  borderRadius: "50%",

  backgroundColor: theme.color.mg5,
  color: theme.color.mg2,
  ...theme.font.Caption3_M_12,
});

export const wrongSolvedItemWrapper = style({
  display: "flex",
  justifyContent: "space-between",

  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const wrongSolvedMetaStyle = style({
  display: "flex",
  gap: "0.8rem",
});

export const wrongSolvedTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const wrongSolvedTitleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const wrongSolvedTitleStyle = style({
  color: theme.color.wg2,
  ...theme.font.Body3_SB_14,
});

export const solvedResultTagStyle = style({
  padding: "2px 5px",
  width: "fit-content",

  borderRadius: "4px",
  backgroundColor: "rgba(255, 0, 92, 0.102)",
});

export const solvedResultTagTextStyle = style({
  color: theme.color.red,
  ...theme.font.Caption3_M_12,
});

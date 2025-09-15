import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const edgeCaseMetaWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
})

export const edgeCaseTitleWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
})

export const edgeCaseTitleStyle = style({
  color: theme.color.white,
  ...theme.font.Head2_B_18
})

export const edgeCaseFavoriteWrapper = style({
  display: "flex",
  alignItems: "center",
})


export const edgeCaseFavoriteCountStyle = style({
  color: theme.color.mg2,
  ...theme.font.Caption1_R_12
})

export const edgeCaseListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",

  padding: "2rem 2rem 4.6rem",
});

export const edgeCaseContentWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
})

export const edgeCaseContentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
})

export const edgeCaseContentTitleStyle = style({
  color: theme.color.wg,
  ...theme.font.Caption1_R_12
})

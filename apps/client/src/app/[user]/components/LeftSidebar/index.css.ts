import { scrollTheme, theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const sidebarWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  height: "72.5vh",
  paddingRight: "2.4rem",
  overflowY: "auto",

  ...scrollTheme.innerScrollbar,
});

export const titleWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.8rem",

  paddingBottom: "0.8rem",
  borderBottom: `1px solid ${theme.color.mg5}`,
});

export const titleStyle = style({
  ...theme.font.Caption2_SB_12,
  color: theme.color.lg2,
});

export const countWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "2rem",
  height: "2rem",
  borderRadius: "5rem",
  backgroundColor: theme.color.mg5,
});

export const countTextStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.mg2,
});

export const chipContainerStyle = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "0.6rem",
});

const chipBaseStyle = style({
  display: "flex",
  alignItems: "center",
  padding: "0.4rem 1.2rem",
  borderRadius: "1.7rem",
  transition: "background-color 0.2s ease-in-out",
});

export const chipWrapperVariants = styleVariants({
  default: [
    chipBaseStyle,
    {
      backgroundColor: theme.color.mg5,
    },
  ],
  selected: [
    chipBaseStyle,
    {
      backgroundColor: theme.color.mg4,
    },
  ],
});

const chipTextBaseStyle = style({
  ...theme.font.Body1_M_14,
  transition: "color 0.2s ease-in-out",
});

export const chipTextStyleVariants = styleVariants({
  default: [
    chipTextBaseStyle,
    {
      color: theme.color.mg3,
    },
  ],
  selected: [
    chipTextBaseStyle,
    {
      color: theme.color.mg2,
    },
  ],
});

export const studyListContainerStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const studyTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8rem",
});

export const studyListItemStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  padding: "1.2rem 0",
});

export const profileStyle = style({
  width: "2rem",
  height: "2rem",
});

export const studyTitleStyle = style({
  ...theme.font.Caption2_SB_12,
  color: theme.color.wg2,
});

export const btnArrowStyle = style({
  width: "1.2rem",
  height: "1.2rem",
});

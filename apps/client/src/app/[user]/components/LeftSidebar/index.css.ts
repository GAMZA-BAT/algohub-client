import { scrollTheme, theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const sidebarWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  height: "72.5vh",
  overflowY: "auto",

  ...scrollTheme.innerScrollbarY,
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

export const chipContainerStyle = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "0.6rem",

  marginLeft: "2px",
});

const chipBaseStyle = style({
  display: "flex",
  alignItems: "center",
  padding: "0.4rem 1.2rem",
  borderRadius: "1.7rem",
  transition:
    "background-color 0.2s ease-in-out, box-shadow 0.2s, border-color 0.2s",
  border: "1px solid transparent",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
      borderColor: theme.color.mg3,
    },
  },
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

  marginLeft: "2px",
});

export const studyTitleWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.8rem",
});

export const studyListItemStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  padding: "1.2rem",
  border: "1px solid transparent",
  borderRadius: "0.8rem",
  transition: "box-shadow 0.2s, border-color 0.2s",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
      borderColor: theme.color.mg3,
    },
  },
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

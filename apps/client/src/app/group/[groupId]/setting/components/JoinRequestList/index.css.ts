import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const joinRequestSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const joinRequestHeaderWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const joinRequestHeadStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const joinRequestStyle = style({
  color: theme.color.lg2,
  ...theme.font.Title1_SB_16,
});

export const countStyle = style({
  color: theme.color.purple,
  ...theme.font.Title1_SB_16,
});

export const buttonStyle = style({
  width: "3.2rem",
  height: "3.2rem",
  borderRadius: "50%",
  backgroundColor: "transparent",
  transition: "background-color 0.2s ease-in-out",

  selectors: {
    "&:hover": {
      backgroundColor: theme.color.mg5,
    },
    "&:disabled": {
      backgroundColor: "unset!important",
      cursor: "unset",
      opacity: 0.5,
    },
  },
});

export const cardListWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

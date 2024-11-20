import { scrollTheme, theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const notificationContainer = style({
  position: "absolute",
  top: "7.2rem",
  right: "8rem",

  borderRadius: "2rem",

  opacity: "0.9",
  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
});

export const ulStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  padding: "3rem 2rem",

  // scroll bar
  overflowY: "scroll",
  overscrollBehavior: "contain",

  height: "26.6rem",

  selectors: {
    "&::-webkit-scrollbar-button": {
      height: "1rem",
    },
    ...scrollTheme.scrollbar,
  },
});

export const countStyle = style({
  position: "absolute",
  right: 0,

  width: "1.2rem",
  height: "1.2rem",
  borderRadius: "1rem",

  backgroundColor: theme.color.purple2,

  color: theme.color.white,
  fontSize: "0.8rem",
  fontWeight: 500,
  lineHeight: "5.6px",
  letterSpacing: "-0.025em",
  textAlign: "center",
  alignContent: "center",
});

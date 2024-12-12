import { scrollTheme, theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const notificationContainer = style({
  position: "absolute",
  top: "7.2rem",
  right: "8rem",

  display: "flex",
  flexDirection: "column",

  zIndex: theme.zIndex.top,

  borderRadius: "2rem",

  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
});

export const ulStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  padding: "0 2rem 3rem 2rem",

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

  width: "0.6rem",
  height: "0.6rem",
  borderRadius: "50%",

  backgroundColor: theme.color.red,

  color: theme.color.white,
  fontSize: "0.8rem",
  fontWeight: 500,
  lineHeight: "5.6px",
  letterSpacing: "-0.025em",
  textAlign: "center",
  alignContent: "center",
});

export const dateContainerStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const dotStyle = recipe({
  base: {
    width: "0.6rem",
    height: "0.6rem",

    borderRadius: "50%",
  },
  variants: {
    isRead: {
      true: {
        backgroundColor: theme.color.mg4,
      },
      false: {
        backgroundColor: theme.color.red,
      },
    },
  },
});

export const allReadButtonStyle = style({
  placeSelf: "flex-end",

  padding: "1.4rem 2.3rem",

  fontSize: "1rem",
  lineHeight: "11.px",

  color: theme.color.mg4,
});

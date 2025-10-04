import { scrollTheme, theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const notificationContainer = style({
  position: "absolute",
  top: "6.5rem",
  right: "4rem",

  display: "flex",
  flexDirection: "column",

  zIndex: theme.zIndex.top,
  width: "40rem",
  height: "68.1rem",
  padding: "2rem 2.4rem",

  borderRadius: "1.6rem",

  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
});

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const titleStyle = style({
  color: theme.color.white,
  ...theme.font.Head2_B_18,
});

export const countChipStyle = style({
  display: "flex",
  alignItems: "center",

  height: "2.1rem",
  padding: "0.2rem 0.6rem",

  borderRadius: "99px",
  backgroundColor: theme.color.mg5,

  color: theme.color.purple,
  ...theme.font.Caption3_M_12,
});

export const ulStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  marginTop: "1.6rem",

  // scroll bar
  overflowY: "scroll",
  overflowX: "hidden",
  overscrollBehavior: "contain",

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

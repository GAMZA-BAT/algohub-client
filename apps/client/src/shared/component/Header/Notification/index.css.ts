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
  maxHeight: "70.5rem",
  padding: "2.4rem 0.4rem 2.4rem 2rem",

  borderRadius: "1.6rem",

  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
});

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginRight: "1.6rem",
});

export const titleWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const titleStyle = style({
  color: theme.color.white,
  ...theme.font.Head2_B_18,
});

export const readAllButtonStyle = recipe({
  base: {
    padding: "0.4rem 0.8rem",

    borderRadius: "17px",
    backgroundColor: theme.color.mg5,

    ...theme.font.Body1_M_14,
  },
  variants: {
    isAllRead: {
      true: {
        color: theme.color.mg3,
      },
      false: {
        color: theme.color.lg1,
      },
    },
  },
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
  gap: "1.6rem",

  marginTop: "0.8rem",
  paddingTop: "0.8rem", // 첫 번째 아이템의 deleteIcon이 잘리지 않도록 상단 패딩 추가

  // scroll bar
  overflowY: "scroll",
  overflowX: "hidden",
  overscrollBehavior: "contain",

  selectors: {
    "&::-webkit-scrollbar-button": {
      height: "1rem",
    },
    ...scrollTheme.innerScrollbarY,
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

export const moreButtonStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",

  padding: "0.2rem 0.6rem",
  margin: "1.6rem auto 0",

  backgroundColor: theme.color.mg5,
  borderRadius: "4px",

  color: theme.color.mg2,
  ...theme.font.Caption1_R_12,

  cursor: "pointer",
});

export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export const emptyWrapper = style({
  marginTop: "4.8rem",
  marginBottom: "3.6rem",
});

export const notificationTabListStyle = style({
  display: "flex",
  alignItems: "center",

  height: "4.5rem",

  marginTop: "1.6rem",
});

export const notificationTabStyle = recipe({
  base: {
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",

    width: "9.25rem",
    padding: "1rem",

    color: theme.color.mg3,

    userSelect: "none",
    cursor: "pointer",
  },
  variants: {
    isSelected: {
      true: {
        color: theme.color.white,
      },
    },
  },
});

export const textStyle = style({
  ...theme.font.Title2_M_16,
});

export const indicatorStyle = style({
  position: "absolute",
  bottom: "-1px",
  left: 0,
  right: 0,

  height: "2px",
  width: "7.25rem",
  margin: "0 auto",

  backgroundColor: theme.color.white,
});

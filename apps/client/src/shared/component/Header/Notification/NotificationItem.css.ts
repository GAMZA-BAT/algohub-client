import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const containerStyle = style({
  maxWidth: "36rem",
  padding: "0.8rem 1.1rem",
  borderRadius: "0.8rem",

  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,

  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.color.transparent_mg4,
  },
});

export const notificationContentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const deleteIconStyle = recipe({
  base: {
    display: "none",
    position: "absolute",
    top: -8,
    right: -5,
    zIndex: theme.zIndex.top,

    borderRadius: "20px",

    opacity: 1,

    selectors: {
      "&:hover": {
        ["rect:nth-of-type(2)" as string]: {
          stroke: theme.color.mg4,
        },
      },
    },
  },
  variants: {
    active: {
      true: {
        display: "block",
      },
    },
  },
});

export const profileImageStyle = style({
  width: "2.5rem",
  height: "2.5rem",
  border: `1px solid ${theme.color.mg1}`,
  borderRadius: "5rem",

  flexShrink: 0,
});

export const profileStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",

  textAlign: "justify",
});

export const nameStyle = style({
  ...theme.font.Caption1_R_12,
  color: theme.color.purple,
});

export const messageStyle = recipe({
  base: {
    ...theme.font.Caption1_R_12,
  },
  variants: {
    isRead: {
      true: {
        color: theme.color.mg3,
      },
      false: {
        color: theme.color.white,
      },
    },
  },
});

export const dateStyle = style({
  fontSize: "1rem",
  lineHeight: "1.2rem",
  color: theme.color.mg3,
});

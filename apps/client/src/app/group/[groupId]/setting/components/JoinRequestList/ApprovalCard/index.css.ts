import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const cardStyle = style({
  position: "relative",

  padding: "1.2rem 2rem",
  width: "100%",
  height: "6.4rem",

  border: `1px solid ${theme.color.mg5}`,
  borderRadius: "1rem",

  backgroundColor: theme.color.mg6,

  selectors: {
    "&:hover": {
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
      borderColor: theme.color.mg3,
    },
  },
});

export const modalTriggerButtonStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  cursor: "pointer",

  border: "none",
  background: "none",
  padding: "inherit",
  color: "inherit",
  textAlign: "left",

  display: "flex",
  alignItems: "center",
  gap: "0.8rem",

  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${theme.color.blue}`,
      outlineOffset: "-2px",
    },
  },
});

export const descriptionWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const iconStyle = style({
  width: "3.2rem",
  height: "3.2rem",
});

export const nameStyle = style({
  ...theme.font.Body3_SB_14,
  color: theme.color.white,
});

export const textStyle = style({
  ...theme.font.Body3_SB_14,
  color: theme.color.mg3,
});

export const actionWrapperStyle = style({
  position: "absolute",

  right: "2rem",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,

  display: "flex",
  flexDirection: "row",
  gap: "0.8rem",
});

export const actionButtonStyle = style({
  width: "9.6rem",
  height: "4rem",
});

export const modalStyle = style({
  height: "fit-content",
});

import { colorToRgba } from "@/common/util/string";
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const iconWrapper = style({
  zIndex: theme.zIndex.high,
  position: "absolute",
  right: "0",
  bottom: 0,

  width: "2.5rem",
  height: "2.5rem",
});

export const iconStyle = style({
  position: "absolute",
  bottom: 0,
  right: 0,

  width: "2.5rem",
  height: "2.5rem",

  borderRadius: "50%",
  opacity: 0.9,

  cursor: "pointer",
});

export const buttonWrapper = style({
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.6rem",

  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  opacity: 0,
  transition: "opacity 0.2s ease-in-out",

  selectors: {
    "&:hover, &:focus-within": {
      opacity: 1,
    },
  },
});

export const actionButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "3.3rem",
  height: "2.1rem",

  borderRadius: "1rem",
  border: `1px solid ${colorToRgba("#ffffff", 0.5)}`,

  backgroundColor: colorToRgba("#bcc0cd", 0.5),
  color: theme.color.white,
  cursor: "pointer",
});

export const inputStyle = style({
  display: "none",
});

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const memberAvatarStyle = style({
  cursor: "pointer",
});

export const iconStyle = style({
  zIndex: theme.zIndex.bottom,
  position: "absolute",
  right: "0.2rem",
  bottom: 0,

  opacity: 0.7,
});

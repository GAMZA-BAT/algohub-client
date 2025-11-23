import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sidebarStyle = style({
  minWidth: "27rem",
  width: "27rem",

  zIndex: theme.zIndex.high,

  backgroundColor: theme.color.mg6,
});

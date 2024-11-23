import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sidebarStyle = style({
  position: "sticky",
  left: 0,

  minWidth: "27rem",
  width: "20%",

  backgroundColor: theme.color.mg6,
});

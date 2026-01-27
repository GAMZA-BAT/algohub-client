import { scrollTheme, theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const contextMenu = style({
  position: "fixed",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  height: "30rem",
  overflowY: "scroll",

  backgroundColor: "white",
  border: "1px solid #ccc",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  listStyle: "none",
  padding: "5px 0",
  margin: 0,

  ...scrollTheme.scrollbar,
  "::-webkit-scrollbar-thumb": {
    background: theme.color.mg3,
  },
  "::-webkit-scrollbar": {
    width: "0.5rem",
  },
});

export const contextMenuItem = style({
  width: "100%",
  padding: "8px 12px",
  cursor: "pointer",
  textAlign: "left",
  ...theme.font.Body1_M_14,
  ":hover": {
    backgroundColor: "#f0f0f0",
  },
});

export const selectedStyle = style({
  backgroundColor: `${theme.color.blue} !important`,
});

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const tableStyle = style({
  borderCollapse: "separate",
  borderSpacing: "0 1.6rem",
});

export const tableCaptionStyle = style({
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.bottom,
  padding: "1.5rem 0",
  background: theme.color.bg,
});

export const theadStyle = style({
  position: "sticky",
  top: "6.6rem",
  zIndex: theme.zIndex.bottom,

  height: "3.6rem",

  verticalAlign: "top",

  ":after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 0,

    width: "100%",
    height: "1px",

    backgroundColor: "#2D3239",
  },
});

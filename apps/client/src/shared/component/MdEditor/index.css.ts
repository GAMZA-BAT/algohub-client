// styles/editor.css.ts
import { theme } from "@/styles/themes.css";
import { globalStyle, style } from "@vanilla-extract/css";

const BASE_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
const BASE_LETTER_SPACING = "-0.02rem";

export const editorWrapperStyle = style({
  fontSize: "1.6rem",
  fontFamily: BASE_FONT_FAMILY,
  color: theme.color.lg2,
  backgroundColor: "transparent",
});

globalStyle(`${editorWrapperStyle} textarea`, {
  fontSize: "1.6rem",
  lineHeight: 1.7,
  letterSpacing: BASE_LETTER_SPACING,
  fontFamily: "inherit",
  backgroundColor: "transparent",
});

globalStyle(`${editorWrapperStyle} *`, {
  fontSize: "1.6rem",
  lineHeight: 1.7,
  letterSpacing: BASE_LETTER_SPACING,
  fontFamily: "inherit",
});

globalStyle(`${editorWrapperStyle} p`, {
  marginTop: 0,
  marginBottom: "1.2rem",
});

globalStyle(`${editorWrapperStyle} h2`, {
  fontSize: "2.4rem",
  marginTop: "2rem",
  marginBottom: "1rem",
});

import { theme } from "@/styles/themes.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  fontFamily: `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
  fontSize: process.env.STORYBOOK === "true" ? "inherit" : "62.5%",
  margin: 0,
  padding: 0,
});

globalStyle("input, textarea", {
  outline: "none",
});

globalStyle("ul, ol, li", {
  listStyle: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
});

globalStyle("button", {
  border: "none",
  background: "none",
  font: "inherit",
  cursor: "pointer",
});

globalStyle("textarea", {
  resize: "none",
});

globalStyle("body", {
  background: theme.color.bg,
});

globalStyle("input:-webkit-autofill", {
  WebkitTextFillColor: "#fff",
  WebkitBoxShadow: `0 0 0px 1000px ${theme.color.mg5} inset`,
  boxShadow: `0 0 0px 1000px ${theme.color.mg5} inset`,
  transition: "background-color 5000s ease-in-out 0s",
});

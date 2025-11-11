import { theme } from "@/styles/themes.css";
import { globalStyle } from "@vanilla-extract/css";

export const EXCLUDE_GLOBAL_STYLE = "exclude-global-style";

const excludeSelector = `.${EXCLUDE_GLOBAL_STYLE}, .${EXCLUDE_GLOBAL_STYLE} *`;

globalStyle(
  `*:where(:not(${excludeSelector})), *:where(:not(${excludeSelector}))::before, *:where(:not(${excludeSelector}))::after`,
  {
    boxSizing: "border-box",
    fontFamily: `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
    fontSize: process.env.STORYBOOK === "true" ? "inherit" : "62.5%",
    margin: 0,
    padding: 0,
  },
);

globalStyle(
  `input:where(:not(${excludeSelector})), textarea:where(:not(${excludeSelector}))`,
  {
    outline: "none",
  },
);

globalStyle(
  `ul:where(:not(${excludeSelector})), ol:where(:not(${excludeSelector})), li:where(:not(${excludeSelector}))`,
  {
    listStyle: "none",
  },
);

globalStyle(`a:where(:not(${excludeSelector}))`, {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
});

globalStyle(`button:where(:not(${excludeSelector}))`, {
  border: "none",
  background: "none",
  font: "inherit",
  cursor: "pointer",
});

globalStyle(`textarea:where(:not(${excludeSelector}))`, {
  resize: "none",
});

globalStyle("body", {
  background: theme.color.bg,
});

globalStyle(`input:-webkit-autofill:where(:not(${excludeSelector}))`, {
  WebkitTextFillColor: "#fff",
  WebkitBoxShadow: `0 0 0px 1000px ${theme.color.mg5} inset`,
  boxShadow: `0 0 0px 1000px ${theme.color.mg5} inset`,
  transition: "background-color 5000s ease-in-out 0s",
});

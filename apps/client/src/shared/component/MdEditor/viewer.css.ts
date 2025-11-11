import { theme } from "@/styles/themes.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const proseStyle = style({
  width: "100%",
  padding: "1.5rem",
  backgroundColor: "unset",
});

const selector = (selectors: string, base = proseStyle): string => {
  return selectors
    .split(",")
    .map((selector) => selector.trim())
    .map((selector) => `${base} ${selector}`)
    .join(", ");
};

globalStyle(selector(".wmde-markdown"), {
  backgroundColor: "transparent",
});

globalStyle(selector("*"), {
  ...theme.font.Caption3_M_12,
});

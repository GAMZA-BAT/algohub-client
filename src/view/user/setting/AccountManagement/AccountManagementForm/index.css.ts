import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const width = style({
  width: "33.5rem",
});

export const formStyle = style([
  width,
  {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
]);

export const passwordWrapper = style([
  width,
  {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
]);

export const labelStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.wg,
});

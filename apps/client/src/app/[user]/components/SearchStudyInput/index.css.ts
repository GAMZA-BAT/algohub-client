import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  display: "flex",
  gap: "0.8rem",

  minWidth: "24rem",
  padding: "0.8rem 1.6rem",

  borderRadius: "4px",
  backgroundColor: theme.color.mg5,

  color: theme.color.mg2,
});

export const inputStyle = style({
  width: "100%",

  border: "none",
  outline: "none",
  backgroundColor: theme.color.mg5,

  color: theme.color.white,

  appearance: "none",

  "::placeholder": {
    color: theme.color.mg2,
  },
});

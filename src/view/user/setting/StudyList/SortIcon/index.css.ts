import { style } from "@vanilla-extract/css";

export const sortIconStyle = style({
  cursor: "pointer",
});

export const ascIconStyle = style([
  sortIconStyle,
  {
    transform: "rotate(180deg)",
  },
]);

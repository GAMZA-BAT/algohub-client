import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const solvedFilterWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",

  width: "100%",
});

export const inputStyle = style({
  padding: "0.8rem 1.6rem",
  width: "15% !important",
  height: "3.3rem !important",
  color: theme.color.white,
  ...theme.font.Caption3_M_12,

  "::placeholder": {
    color: theme.color.mg2,
  },
});

export const dropdownWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",

  width: "11rem",
  padding: "0.8rem 1.6rem",

  background: theme.color.mg2,
  borderRadius: "4px",
});

export const dividerStyle = style({
  width: "1px",
  height: "27px",
  background: theme.color.mg4,
});

export const resetIconStyle = style({
  padding: "1rem",
  cursor: "pointer",
});

export const selectboxStyle = style({
  width: "11%",
  minWidth: "11.2rem",
  height: "3.3rem",
});

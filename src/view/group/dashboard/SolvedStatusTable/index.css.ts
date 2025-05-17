import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const tableWrapper = style({
  width: '100%',
  overflowX: 'scroll',
})

export const headerWrapper = style({
  display: "flex",
  gap: "2.4rem",

  padding: '0 1.6rem',
  height: '3rem',
});

export const headerFontStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '6rem',

    color: theme.color.mg2,
    ...theme.font.Caption3_M_12
})
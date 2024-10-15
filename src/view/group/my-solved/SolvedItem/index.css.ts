import { theme } from "@/styles/themes.css";
import { MYSOLVED_GRID_FRACTION } from "@/view/group/my-solved/constant";
import { style } from "@vanilla-extract/css";

export const itemStyle = style({
  display: "grid",
  gridTemplateColumns: MYSOLVED_GRID_FRACTION,
  alignItems: "center",
  gap: "0.4rem",

  width: "100%",
});

export const textCommonStyle = style({
  ...theme.font.Caption3_M_12,
  fontWeight: 500,
  color: theme.color.white,
});

export const titleStyle = style({
  display: "flex",
  justifyContent: "center",

  textDecoration: "underline",
  textDecorationColor: theme.color.white,
  textUnderlineOffset: 2,
});

export const textStyle = style({
  textAlign: "center",
});

export const commentWrapperStyle = style({
  display: "flex",
  alignItems: "center",

  placeSelf: "center",
});

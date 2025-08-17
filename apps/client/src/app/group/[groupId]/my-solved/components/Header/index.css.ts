import { MYSOLVED_GRID_FRACTION } from "@/app/group/[groupId]/my-solved/components/constant";
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "grid",
  gridTemplateColumns: MYSOLVED_GRID_FRACTION,
  gap: "0.4rem",
  alignItems: "center",

  padding: "0 2rem",

  width: "100%",
  height: "3.7rem",

  color: theme.color.mg2,
});

export const columnStyle = style({
  ...theme.font.Caption3_M_12,

  textAlign: "center",
});

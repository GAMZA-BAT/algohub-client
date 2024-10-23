import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sidebarWrapper = style({
  padding: "4.4rem 2.4rem",
});

export const labelWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",

  padding: "2.4rem 0 0.8rem",
  width: "100%",

  borderBottom: `1px solid ${theme.color.mg5}`,
});

export const labelStyle = style({
  color: theme.color.lg2,
  ...theme.font.Caption2_SB_12,
});

export const memberWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",

  paddingTop: "1.6rem",
  width: "100%",
});

export const iconStyle = style({
  position: "absolute",
  right: "0.2rem",
  bottom: "0",
});

export const circleNumberStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "2rem",
  height: "2rem",

  borderRadius: "50%",
  backgroundColor: theme.color.mg5,
  color: theme.color.mg4,
  ...theme.font.Caption3_M_12,
});

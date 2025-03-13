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

export const idRegisterStyle = style({
  color: theme.color.purple,
  ...theme.font.Body1_M_14,

  cursor: "pointer",
});

export const idTextStyle = style({
  ...theme.font.Title2_M_16,
  color: theme.color.wg
});

export const registerModalContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  width: "40rem",
  height: "30rem",

  padding: '5.2rem 2.4rem',
  borderRadius: "16px",
  backgroundColor: theme.color.mg6,
});

export const registerModalHeadingStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});

export const registerModalDescriptionStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.wg,
});





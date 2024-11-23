import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  paddingTop: "3.4rem",
  height: "100%",
});

export const noticeCreateWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
});

export const titleWrapper = style({
  display: "flex",
  gap: "2.4rem",
});

export const sectionStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const metaStyle = style({
  color: theme.color.white,
  ...theme.font.Head2_SB_18,

  paddingBottom: "1.6rem",
});

export const inputStyle = style({
  width: "22.2rem",
  height: "4.4rem",
  padding: "1.1rem 0.8rem",

  ...theme.font.Body1_M_14,
});

export const textareaStyle = style({
  height: "21.8rem",
  padding: "1.6rem",
  ...theme.font.Body1_M_14,
});

export const btnWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.6rem",

  width: "100%",
  paddingRight: "2rem",
});

export const btnStyle = style({
  width: "8.4rem",
});

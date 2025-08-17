import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const solvedListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",

  width: "100%",
});

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const headerTextStyle = style({
  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});

export const dividerStyle = style({
  width: "100%",
  height: "1px",
  background: theme.color.mg4,
});

export const tableWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
});

export const tableStyle = style({
  width: "100%",
  color: "white",
  tableLayout: "fixed",
});

export const theadStyle = style({
  height: "4rem",
  verticalAlign: "top",
});

export const tbodyStyle = style({
  gap: "0.8rem",
});

export const thTextStyle = recipe({
  base: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: theme.color.mg2,
    ...theme.font.Caption3_M_12,
  },
  variants: {
    variants: {
      "": {
        width: "6%",
      },
      아이디: {
        width: "14%",
        textAlign: "start",
      },
      "제출 일시": {
        width: "25%",
      },
      메모리: {
        width: "10%",
      },
      시간: {
        width: "10%",
      },
      언어: {
        width: "10%",
      },
      "코드 길이": {
        width: "10%",
      },
      결과: {
        width: "15%",
      },
    },
  },
});

export const nicknameStyle = style({
  display: "flex",
  alignItems: "center",

  paddingLeft: "6.3rem",
  textAlign: "start",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const tdTextStyle = style({
  ...theme.font.Caption3_M_12,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
});

export const alignLeftStyle = style({
  textAlign: "left",
});

export const trStyle = style({
  alignItems: "center",
  height: "4.7rem",
  textAlign: "center",

  cursor: "pointer",
});

export const resultIncorrect = style({
  color: "red",
});

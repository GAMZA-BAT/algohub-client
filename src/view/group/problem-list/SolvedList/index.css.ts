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

export const thTextStyle = recipe({
  base: {
    color: theme.color.mg2,
    ...theme.font.Caption3_M_12,
  },
  variants: {
    variants: {
      아이디: {
        width: "30%",
      },
      "제출 일시": {
        width: "25%",
      },
      메모리: {
        width: "10%",
      },
      시간: {
        width: "7%",
      },
      언어: {
        width: "7%",
      },
      "코드 길이": {
        width: "8.5%",
      },
      결과: {
        width: "12.5%",
      },
    },
  },
});

export const nicknameStyle = style({
  display: "flex",
  alignItems: "center",
  position: "relative",

  paddingLeft: "6.3rem",
  textAlign: "start",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const avatarStyle = style({
  position: "absolute",
  left: 0,
  top: 0,
});

export const tdTextStyle = style({
  ...theme.font.Caption3_M_12,
});

export const trStyle = style({
  alignItems: "center",
  height: "4.7rem",
  textAlign: "center",
});

export const resultIncorrect = style({
  color: "red",
});

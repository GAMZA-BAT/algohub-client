import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapperStyle = style({
  width: "1000px", // jsx에 직접 style이나 recipe 함수 사용해서 동적으로 크기 조정하기
  borderCollapse: "collapse",
});

export const tableWrapper = style({
  width: "100%",
  borderCollapse: "collapse",

  overflowX: "scroll",
});

export const headerWrapper = style({
  display: "flex",
  gap: "2.4rem",

  padding: "0 1.6rem",
  height: "3rem",
});

export const headerFontStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "6rem",

  color: theme.color.mg2,
  ...theme.font.Caption3_M_12,
});

export const bodyWrapper = style({
  display: "flex",
  gap: "2.4rem",

  padding: "1rem 1.6rem",
  height: "4.8rem",
});

export const tdStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "6rem",
    height: "100%",

    color: theme.color.mg2,
    ...theme.font.Caption3_M_12,
  },
  variants: {
    column: {
      rank: {
        width: "3rem",
      },
      nickname: {},
      totalScore: {
        marginRight: "6.6rem",

        color: theme.color.yellow,
      },
      solvedProblem: {
        color: theme.color.white,

        background: theme.color.mg6,
        borderRadius: "5px",
      },
      unsolvedProblem: {
        ...theme.font.Caption3_M_12,
      },
    },
  },
});

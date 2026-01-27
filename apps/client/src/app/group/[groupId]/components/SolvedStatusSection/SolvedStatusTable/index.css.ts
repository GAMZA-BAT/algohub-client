import { scrollTheme, theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tableWrapper = style({
  display: "flex",
  width: "100%",
});

export const wrapper1Style = style({
  width: "320px",
  paddingBottom: "15px",
});

export const wrapper2Style = style({
  width: "calc(100% - 320px)",
});

export const table1Style = style({
  width: "100%",
  height: "100%",
  borderCollapse: "collapse",
});

export const table2Style = style({
  width: "100%",
  height: "100%",
  borderCollapse: "collapse",
  display: "block",
  overflowX: "scroll",

  ...scrollTheme.innerScrollbarX,
});

export const theadStyle = style({
  height: "4.1rem",
});

export const problemTdWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const tdStyle = recipe({
  base: {
    color: theme.color.mg2,
    ...theme.font.Caption3_M_12,
  },
  variants: {
    column: {
      rank: {},
      nickname: {
        color: theme.color.mg2,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "12.5rem",
      },
      totalScore: {
        color: theme.color.yellow,
      },
      solvedProblem: {
        width: "6rem",
        height: "3rem",

        color: theme.color.white,

        background: theme.color.mg6,
        borderRadius: "5px",
        padding: "0.65rem 0.95rem",
      },
      unsolvedProblem: {
        width: "6rem",
        height: "3rem",
        alignContent: "center",

        ...theme.font.Caption3_M_12,
      },
    },
  },
});

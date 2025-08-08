import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tableWrapper = style({
  display: "flex",
  width: "100%",
});

export const wrapperStyle = style({
  overflowX: "scroll",
  display: "block",
  width: "fit-content",
});

export const tableStyle = style({
  width: "100%",
  height: "100%",
  borderCollapse: "collapse",
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
      },
      totalScore: {
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

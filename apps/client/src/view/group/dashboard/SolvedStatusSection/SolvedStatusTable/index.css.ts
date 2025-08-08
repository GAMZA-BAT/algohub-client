import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapperStyle = style({
  width: "100%",
  overflowX: "scroll",
  display: 'block'
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
      nickname: {},
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

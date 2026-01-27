import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const headingStyle = style({
  position: "absolute",
  top: "4.8rem",
  left: "3vw",

  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});

export const wrapperStyle = recipe({
  base: {
    position: "relative",
    display: "flex",

    width: "80%",
    height: "62.4rem",
  },
  variants: {
    type: {
      스터디리스트: {
        paddingTop: "9rem",
      },
      알림설정: {
        paddingTop: "11rem",
      },
    },
  },
});

export const backPanelStyle = style({
  position: "absolute",
  zIndex: 1,
  top: "rem",
  left: "4vw",
  display: "block",

  width: "90%",
  height: "11rem",

  background: theme.color.bg,
});

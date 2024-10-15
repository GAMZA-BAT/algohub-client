import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const navStyle = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const paginationContentStyle = recipe({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  variants: {
    type: {
      wrapper: {
        gap: "1.6rem",
      },
      content: {
        gap: "0.4rem",
      },
    },
  },
});

export const paginationItemStyle = style({
  display: "flex",
  justifyContent: "center",

  width: "2.4rem",
  height: "2.4rem",
});

export const paginationButtonStyle = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "0.5rem",
    border: "none",

    cursor: "pointer",

    ...theme.font.Caption3_M_12,
    color: theme.color.mg2,
    backgroundColor: "transparent",
    borderRadius: "0.375rem",
    ":disabled": {
      cursor: "default",
    },
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: "#f3f4f6",
      },
    },
  },
});

export const iconSizeStyle = style({
  height: "2.4rem",
  width: "2.4rem",
});

export const ellipsisStyle = style({
  display: "flex",
  height: "2.25rem",
  width: "2.25rem",
  alignItems: "center",
  justifyContent: "center",
});

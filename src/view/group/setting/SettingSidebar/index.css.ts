import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const sidebarWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",

  width: "100%",
  padding: "4.2rem 2.4rem",
});

export const avatarWrapperStyle = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const submitWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  paddingTop: "2.4rem",
});

export const editTextStyle = recipe({
  base: {
    ...theme.font.Caption3_M_12,
  },
  variants: {
    isActive: {
      true: {
        color: theme.color.purple,
      },
      false: {
        color: theme.color.mg2,
      },
    },
  },
});

export const deleteTextStyle = style({
  borderBottom: `1px solid ${theme.color.mg3}`,
  color: theme.color.mg3,
  ...theme.font.Caption3_M_12,
});

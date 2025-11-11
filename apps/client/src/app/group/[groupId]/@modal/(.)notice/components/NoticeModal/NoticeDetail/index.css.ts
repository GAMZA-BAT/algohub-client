import { scrollTheme, theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const articleStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "2.2rem",

  width: "100%",
  height: "calc(100% - 3.6rem)",
  marginTop: "1.5rem",
});

export const contentWrapperStyle = style({
  display: "flex",
  gap: "1rem",

  height: "44rem",
});

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  height: "4rem",
  borderRadius: "0.4rem",
});

export const contentWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  maxWidth: "70%",
});

export const notifyWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const contentStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "2rem",

  maxWidth: "100%",
});

export const noticeInfoStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "3rem",
});

export const textareaWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "50%",
});

export const sectionWrapper = style([textareaWrapper]);

export const textareaStyle = style({
  display: "flex",
  gap: "1rem",
  alignItems: "flex-start",

  width: "100%",
  height: "100%",
  padding: "0.175rem",
  border: "1px solid transparent",
  borderRadius: "5px",
  outline: "none",

  backgroundColor: theme.color.mg5,

  ":focus": {
    border: `1px solid ${theme.color.purple}`,
  },

  ...theme.font.Caption3_M_12,
  color: theme.color.white,
  "::placeholder": {
    color: theme.color.mg4,
  },

  ...scrollTheme.scrollbar,
});

export const textareaEditStyle = style({
  border: `1px solid ${theme.color.purple}`,
});

export const inputStyle = style({
  backgroundColor: theme.color.bg,

  width: "100%",
});

export const iconContainerStyle = style({
  position: "absolute",

  display: "flex",

  top: 5,
  right: 5,
});

export const iconStyle = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "3.2rem",
    height: "3.2rem",

    backgroundColor: theme.color.mg4,

    borderRadius: "4px",

    cursor: "pointer",

    opacity: 0,

    transition: "all 0.3s ease",

    ":hover": {
      backgroundColor: theme.color.mg3,
    },
  },
  variants: {
    isEdit: {
      true: {
        backgroundColor: theme.color.mg3,
      },
    },
    isActive: {
      true: {
        opacity: 1,
      },
    },
  },
});

export const listStyle = style({
  width: "100%",

  padding: "1.2rem 2.4rem 0 2.4rem",
  overflowY: "scroll",

  ...scrollTheme.scrollbar,
});

export const itemStyle = style({
  borderBottom: `1px solid ${theme.color.mg5}`,
});

export const textStyle = styleVariants({
  category: {
    ...theme.font.Title1_SB_16,
    color: theme.color.purple2,
    whiteSpace: "nowrap",
  },
  title: {
    ...theme.font.Body2_R_14,
    color: theme.color.lg2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  author: {
    ...theme.font.Caption1_R_12,
    color: theme.color.mg1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  time: {
    ...theme.font.Caption1_R_12,
    color: theme.color.mg4,
    whiteSpace: "nowrap",
  },
});

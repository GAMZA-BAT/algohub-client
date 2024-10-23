import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const formStyle = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  variants: {
    variant: {
      "create-group": {
        gap: "1.6rem",
      },
      "group-setting": {
        gap: "2rem",
      },
    },
  },
});

export const formLabelStyle = recipe({
  base: {
    marginBottom: "0.3rem",
    color: theme.color.white,
  },

  variants: {
    variant: {
      "create-group": {
        ...theme.font.Head2_SB_18,
      },
      "group-setting": {
        ...theme.font.Caption2_SB_12,
      },
    },
  },
});

export const imageWrapper = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const nameInputStyle = recipe({
  base: {
    color: theme.color.white,
    "::placeholder": {
      color: theme.color.mg4,
    },
  },
  variants: {
    variant: {
      "create-group": {
        padding: "1rem 1.6rem",
        ...theme.font.Title2_M_16,
      },
      "group-setting": {
        padding: "1rem 8rem",
        ...theme.font.Body1_M_14,
      },
    },
  },
});

export const dateWrapper = style({
  display: "flex",
  gap: "2.6rem",
  paddingBottom: "0.4rem",
});

export const dateLabelStyle = recipe({
  base: {
    marginBottom: "0.3rem",
    color: theme.color.mg3,
  },

  variants: {
    variant: {
      "create-group": {
        ...theme.font.Title2_M_16,
      },
      "group-setting": {
        ...theme.font.Caption1_R_12,
      },
    },
  },
});

export const dateInputStyle = style({
  ...theme.font.Caption1_R_12,
  "::placeholder": {
    color: theme.color.mg4,
  },
});

export const descInputStyle = style({
  padding: "0.8rem",

  color: theme.color.white,
  ...theme.font.Caption3_M_12,
  "::placeholder": {
    color: theme.color.mg4,
  },
});

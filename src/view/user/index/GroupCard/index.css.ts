import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const groupCardWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "2rem 1.6rem",

  width: "100%",

  borderRadius: "8px",
  background: theme.color.mg5,

  cursor: "pointer",

  ":hover": {
    background: theme.color.mg4,
  },
});

export const flexCenterStyle = style({
  display: "flex",
  alignSelf: "flex-start",

  alignItems: "center",
  gap: "0.4rem",
});

export const imgStyle = style({
  width: "100%",
  height: "15.6rem",

  borderRadius: "4px",
  objectFit: "cover",
});

export const nameWrapper = style([
  flexCenterStyle,
  {
    gap: "0.8rem",
    paddingTop: "2rem",
  },
]);

export const nameStyle = recipe({
  base: {
    width: "20.4rem",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    ...theme.font.Title1_SB_16,
  },
  variants: {
    isDone: {
      true: {
        color: theme.color.mg4,
      },
      false: {
        color: theme.color.white,
      },
    },
  },
});

export const descStyle = recipe({
  base: {
    ...theme.font.Caption3_M_12,
  },
  variants: {
    isDone: {
      true: {
        color: theme.color.mg4,
      },
      false: {
        color: theme.color.mg2,
      },
    },
  },
});

export const dateStyle = recipe({
  base: [
    flexCenterStyle,
    {
      paddingTop: "1rem",
    },
  ],
  variants: {
    isDone: {
      true: {
        color: theme.color.mg4,
      },
      false: {
        color: theme.color.mg2,
      },
    },
  },
});

export const ownerStyle = style([
  flexCenterStyle,
  {
    gap: "0.9rem",
    padding: "0.7rem 0 0 0.5rem",
  },
]);

export const statusDotStyle = recipe({
  base: {
    width: "0.6rem",
    height: "0.6rem",

    borderRadius: "50%",
  },
  variants: {
    status: {
      bookmarked: {
        background: theme.color.yellow,
      },
      inProgress: {
        background: theme.color.purple,
      },
      queued: {
        background: theme.color.mint,
      },
      done: {
        background: theme.color.mg4,
      },
    },
  },
});

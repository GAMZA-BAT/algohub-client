import { theme } from "@/styles/themes.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapperStyle = recipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "0.8rem",
    borderRadius: "0.5rem",

    backgroundColor: theme.color.mg5,
    height: "3.6rem",
  },
  variants: {
    isOpen: {
      true: {
        boxShadow: `0 0 0 0.1rem ${theme.color.purple}`,
      },
    },
  },
});

export const calendarIcnStyle = recipe({
  base: {
    width: "2rem",
    height: "2rem",
    color: theme.color.mg4,

    flexShrink: 0,
  },

  variants: {
    selected: {
      true: {
        color: theme.color.lg2,
      },
    },
  },
});

export const dateStyle = recipe({
  base: {
    border: "none",

    backgroundColor: "transparent",

    ...theme.font.Caption1_R_12,
    color: theme.color.mg2,

    ":disabled": {
      color: theme.color.mg4,
    },
  },

  variants: {
    selected: {
      true: {
        color: theme.color.lg2,
      },
    },
  },
});

export const customHeaderWrapperStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
});

export const arrowWrapperStyle = style({
  display: "flex",
  alignItems: "center",
  height: "2rem",
});

export const leftArrowStyle = recipe({
  base: {
    width: "2.5rem",
    height: "2.1rem",
    ["[stroke='#BCC0CD']" as string]: {
      stroke: theme.color.mg4,
    },
  },

  variants: {
    rotate: {
      true: {
        transform: "rotate(180deg)",
      },
    },
  },
});

export const dateDetailStyle = style({
  ...theme.font.Head2_SB_18,
  color: theme.color.wg,
  textAlign: "center",
});

globalStyle(".react-datepicker", {
  overflow: "hidden",

  border: "none",
  borderRadius: "0.8rem",
});

globalStyle(".react-datepicker-wrapper input", {
  width: "100%",
});

globalStyle(".react-datepicker__header", {
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",

  padding: "1.5rem",

  backgroundColor: theme.color.mg5,
  borderBottom: `2px solid ${theme.color.mg4}`,
});

globalStyle(".react-datepicker__day-names", {
  display: "flex",
  gap: "0.4rem",
});

globalStyle(".react-datepicker__week", {
  display: "flex",
  gap: "0.4rem",
});

globalStyle(".react-datepicker__day-name", {
  margin: 0,

  ...theme.font.Title2_M_16,
  color: theme.color.wg,
});

globalStyle(
  ".react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name",
  {
    width: "3rem",
    height: "3rem",
    lineHeight: "3rem !important",
  },
);

globalStyle(
  ".react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name",
  {
    margin: 0,
  },
);

globalStyle(".react-datepicker__month", {
  display: "flex",
  flexDirection: "column",
  gap: "0.8em",

  margin: 0,
  padding: "0.8rem 1.5rem 2rem 1.5rem",

  backgroundColor: theme.color.mg5,
});

globalStyle(".react-datepicker__triangle", {
  display: "none",
});

globalStyle(".react-datepicker__day", {
  color: theme.color.mg3,
  ...theme.font.Title2_M_16,
});

globalStyle(".react-datepicker__day--selected", {
  backgroundColor: theme.color.purple,
  color: theme.color.white,
  borderRadius: "50%",
});

globalStyle(".react-datepicker__day--keyboard-selected", {
  backgroundColor: theme.color.mg4,
  color: theme.color.white,
  borderRadius: "50%",
});

globalStyle(".react-datepicker__day:hover", {
  backgroundColor: theme.color.mg4,
  color: theme.color.white,
  borderRadius: "50%",
});

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapperStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",

  overflow: "auto",

  width: "100%",
  // scroll bar 막대 감추기
  "::-webkit-scrollbar": {
    width: 0,
  },
});

export const tableHeadStyle = recipe({
  base: {
    height: "2.5rem",

    ...theme.font.Caption3_M_12,
    color: theme.color.mg2,
  },
  variants: {
    align: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
  },
});

export const withdrawTextStyle = style({
  ...theme.font.Body1_M_14,
  color: theme.color.mg2,
  borderRadius: ".4rem",
  padding: "0 .4rem",
  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const tableStyle = style({
  width: "90%",

  captionSide: "top",
});

export const tableCaptionStyle = style({
  color: theme.color.white,
  textAlign: "left",
  fontSize: "1.6rem",
  fontWeight: 600,
  lineHeight: "19.09px",
});

export const tableHeaderStyle = style({
  position: "relative",
});

export const tableRowStyle = style({
  borderRadius: ".4rem",
  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const tableCellStyle = recipe({
  base: {
    height: "4.6rem",

    verticalAlign: "middle",
    textAlign: "center",
  },
  variants: {
    align: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
        paddingRight: "1.2rem",
      },
    },
  },
});

export const tableCellTextStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.white,
});

import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapperStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",

  overflow: "auto",

  width: "100%",
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
    padding: {
      dense: {
        padding: "0 2rem",
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

export const tableStyle = recipe({
  base: {
    width: "90%",

    captionSide: "top",
  },
  variants: {
    type: {
      스터디리스트: {
        borderCollapse: "separate",
        borderSpacing: "0 1.6rem",
      },
      알림설정: {
        borderCollapse: "collapse",
      },
    },
  },
});

export const tableCaptionStyle = recipe({
  base: {
    color: theme.color.white,
    textAlign: "left",
    fontSize: "1.6rem",
    fontWeight: 600,
    lineHeight: "19.09px",
  },
  variants: {
    type: {
      스터디리스트: {
        position: "sticky",
        top: 0,
        zIndex: theme.zIndex.bottom,

        padding: "1.5rem 0",
        background: theme.color.bg,
      },
      알림설정: {
        padding: "1.5rem 2rem",
      },
    },
  },
});

export const tableHeaderStyle = recipe({
  base: {
    position: "relative",
  },
  variants: {
    type: {
      스터디리스트: {
        position: "sticky",
        top: "6.6rem",
        zIndex: theme.zIndex.bottom,

        height: "3.6rem",
        verticalAlign: "top",
        ":after": {
          content: "",

          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 0,

          width: "100%",
          height: "1px",
          backgroundColor: "#2D3239",
        },
      },
      알림설정: {
        height: "4.1rem",

        backgroundColor: theme.color.mg5,
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      },
    },
  },
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
    type: {
      스터디리스트: {
        height: "4.6rem",
      },
      알림설정: {
        height: "4.8rem",
        borderBottom: `1px solid ${theme.color.mg5}`,
      },
    },
  },
});

export const tableCellTextStyle = styleVariants({
  스터디리스트: {
    ...theme.font.Caption3_M_12,
    color: theme.color.white,
  },
  알림설정: {
    ...theme.font.Caption3_M_12,
    color: theme.color.mg2,
  },
});

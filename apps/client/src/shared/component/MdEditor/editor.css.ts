import { globalStyle, style } from "@vanilla-extract/css";

export const editorWrapperStyle = style({
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
});

globalStyle(`${editorWrapperStyle} .wmde-markdown`, {
  backgroundColor: "transparent",
});

globalStyle(`${editorWrapperStyle} .w-md-editor-toolbar`, {
  justifyContent: "flex-start",
});

globalStyle(`${editorWrapperStyle} textarea`, {
  backgroundColor: "transparent",
});

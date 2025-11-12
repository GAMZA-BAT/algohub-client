"use client";
import { EXCLUDE_GLOBAL_STYLE } from "@/styles/globalStyles.css";
import MDEditor, {
  commands,
  type ICommand,
  type MDEditorProps,
} from "@uiw/react-md-editor";
import clsx from "clsx";
import { useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import { editorWrapperStyle } from "./editor.css";
import { proseStyle } from "./viewer.css";

type MarkdownEditorProps = MDEditorProps & {
  initialValue?: string;
  onChange?: (value: string | undefined) => void;
  disabled?: boolean;
};

const CUSTOM_COMMANDS: ICommand[] = [
  // 그룹 1: 제목 및 기본 서식
  commands.heading,
  commands.bold,
  commands.italic,
  commands.strikethrough,
  commands.divider,

  // 그룹 2: 링크, 인용, 코드, 이미지
  commands.link,
  commands.quote,
  commands.code,
  commands.codeBlock,
  commands.image,
  commands.divider,

  // 그룹 3: 목록
  commands.unorderedListCommand,
  commands.orderedListCommand,
  commands.checkedListCommand,
  commands.divider,
];

const MarkdownEditor = ({
  initialValue = "",
  onChange,
  disabled,
  className,
  ...props
}: MarkdownEditorProps) => {
  const [value, setValue] = useState<string | undefined>(initialValue);

  const handleEditorChange = (newValue: string | undefined) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  if (disabled) {
    return (
      <div
        className={clsx(EXCLUDE_GLOBAL_STYLE, className)}
        data-color-mode="dark"
      >
        <MDEditor.Markdown
          source={value}
          rehypePlugins={[[rehypeSanitize]]}
          remarkPlugins={[[remarkBreaks]]}
          className={proseStyle}
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(EXCLUDE_GLOBAL_STYLE, className)}
      data-color-mode="dark"
    >
      <MDEditor
        preview="edit"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkBreaks]],
        }}
        commands={CUSTOM_COMMANDS}
        extraCommands={[
          commands.codeEdit,
          commands.codePreview,
          commands.codeLive,
        ]}
        height={"100%"}
        {...props}
        className={editorWrapperStyle}
        onChange={handleEditorChange}
        value={value}
      />
    </div>
  );
};

export default MarkdownEditor;

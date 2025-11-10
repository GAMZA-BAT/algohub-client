"use client";
import MDEditor, {
  commands,
  type ICommand,
  type MDEditorProps,
} from "@uiw/react-md-editor";
import { useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import { editorWrapperStyle } from "./index.css";

type MarkdownEditorProps = MDEditorProps & {
  initialValue?: string;
  onChange?: (value: string | undefined) => void;
  disabled?: boolean;
};

const CUSTOM_COMMANDS: ICommand[] = [
  commands.bold,
  commands.italic,
  commands.strikethrough,
  commands.hr,
  commands.divider, // commands.divider를 사용하면 더 간단하게 구분선을 추가할 수 있습니다.
  commands.link,
  commands.quote,
  commands.code,
  commands.codeBlock,
  commands.image,
  commands.divider,
  commands.unorderedListCommand,
  commands.orderedListCommand,
  commands.checkedListCommand,
  commands.divider,
];

function MarkdownEditor({
  initialValue = "",
  onChange,
  disabled,
  className,
  ...props
}: MarkdownEditorProps) {
  const [value, setValue] = useState<string | undefined>(initialValue);

  const handleEditorChange = (newValue: string | undefined) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  if (disabled) {
    return (
      <div className={className} style={{ height: "100%" }}>
        <MDEditor.Markdown
          source={value}
          rehypePlugins={[[rehypeSanitize]]}
          className={editorWrapperStyle}
          remarkPlugins={[[remarkBreaks]]}
        />
      </div>
    );
  }

  return (
    <div className={className} style={{ height: "100%", width: "100%" }}>
      <MDEditor
        {...props}
        className={editorWrapperStyle}
        value={value}
        onChange={handleEditorChange}
        preview="edit"
        previewOptions={{
          // rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkBreaks]],
        }}
        commands={CUSTOM_COMMANDS}
        extraCommands={[]}
        height={420}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default MarkdownEditor;

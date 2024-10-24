"use client";
import type { LanguageOption } from "@/shared/type";
// import "prism-themes/themes/prism-one-dark.css";
import Prism from "prismjs";

// 언어
import "prismjs/components/prism-c";
// import "prismjs/components/prism-cpp";
// import "prismjs/components/prism-csharp";
// import "prismjs/components/prism-go";
// import "prismjs/components/prism-java";
// import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-kotlin";
// import "prismjs/components/prism-python";
// line numbers
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import { loadTheme } from "@/common/util/dom";
import { useEffect } from "react";
import "./code.css";
import { codeStyle } from "./index.css";

type CodeHightlighterProps = {
  code: string;
  language: LanguageOption;
};

export const languageMapper: { [key in LanguageOption]: string } = {
  "C++": "cpp",
  C99: "c",
  "C#": "csharp",
  C: "c",
  Python: "python",
  "node.js": "javascript",
  Go: "go",
  Java: "java",
  Kotlin: "kotlin",
};

const CodeHighlighter = ({ code, language }: CodeHightlighterProps) => {
  // const [theme, setTheme] = useState("vsc-dark-plus");
  const theme = "vsc-dark-plus";
  // const [contextMenu, setContextMenu] = useState<{
  //   x: number;
  //   y: number;
  // } | null>(null);
  const mappedLanguage = languageMapper[language];

  useEffect(() => {
    loadTheme(theme);
    Prism.highlightAll();
  }, [theme]);

  useEffect(() => {
    const highlight = async () => {
      await import(`prismjs/components/prism-${mappedLanguage}`);
      Prism.highlightAll();
    };
    highlight();
  }, [code]);

  // const handleContextMenu = useCallback((e: React.MouseEvent) => {
  //   e.preventDefault();
  //   setContextMenu({ x: e.pageX, y: e.pageY });
  // }, []);

  // const handleThemeChange = useCallback((selectedTheme: string) => {
  //   setTheme(selectedTheme);
  //   setContextMenu(null);
  // }, []);

  // const handleCloseContextMenu = useCallback(() => {
  //   setContextMenu(null);
  // }, []);

  return (
    <>
      {/* {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          selectedTheme={theme}
          onThemeChange={handleThemeChange}
          onClose={handleCloseContextMenu}
        />
      )} */}
      <pre
        className={`line-numbers ${codeStyle}`}
        // onContextMenu={handleContextMenu}
      >
        <code className={`language-${mappedLanguage}`}>{code}</code>
      </pre>
    </>
  );
};

export default CodeHighlighter;

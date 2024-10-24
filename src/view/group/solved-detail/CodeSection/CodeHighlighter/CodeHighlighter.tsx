"use client";
import Prism from "prismjs";

// 언어
import "prismjs/components/prism-c";
import "prismjs/components/prism-clike";

// line numbers
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import type { SolutionLanguage } from "@/api/solution/type";
import { useEffect } from "react";
import { codeStyle } from "../index.css";
import "./code.css";
import "./prism-vsc-dark-plus.min.css";
import { addCustomPatternsToAllLanguages, languageMapper } from "./rule";

type CodeHightlighterProps = {
  code: string;
  language: Exclude<SolutionLanguage, "모든 언어" | "Text">;
};

const CodeHighlighter = ({ code, language }: CodeHightlighterProps) => {
  // const [theme, setTheme] = useState("vsc-dark-plus");
  // const [contextMenu, setContextMenu] = useState<{
  //   x: number;
  //   y: number;
  // } | null>(null);
  const mappedLanguage = languageMapper[language];

  useEffect(() => {
    const highlight = async () => {
      await import(`prismjs/components/prism-${mappedLanguage}` as string);
      addCustomPatternsToAllLanguages();
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

"use client";

import type { SolutionLanguage } from "@/api/solution/type";
import CodeHighlighter from "./CodeHighlighter/CodeHighlighter";
import { sectionWrapper } from "./index.css";

type CodeSectionProps = {
  code: string;
  language: string;
};

const CodeSection = ({ code, language }: CodeSectionProps) => {
  return (
    <section className={sectionWrapper}>
      <CodeHighlighter
        code={code}
        language={language as Exclude<SolutionLanguage, "모든 언어" | "Text">}
      />
    </section>
  );
};

export default CodeSection;

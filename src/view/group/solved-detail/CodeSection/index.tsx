"use client";

import type { SolutionLanguage } from "@/app/api/solutions/type";
import CodeHighlighter from "./CodeHighlighter/CodeHighlighter";
import { sectionWrapper } from "./index.css";

type CodeSectionProps = {
  code: string;
  language: Exclude<SolutionLanguage, "모든 언어">;
};

const CodeSection = ({ code, language }: CodeSectionProps) => {
  return (
    <section className={sectionWrapper}>
      <CodeHighlighter code={code} language={language} />
    </section>
  );
};

export default CodeSection;

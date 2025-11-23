"use client";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-clike";

import "@/app/@modal/(...)group/[groupId]/solved-detail/components/CodeSection/CodeHighlighter/code.css";
import "@/app/@modal/(...)group/[groupId]/solved-detail/components/CodeSection/CodeHighlighter/prism-vsc-dark-plus.min.css";
import {
  addCustomPatternsToAllLanguages,
  languageMapper,
} from "@/app/@modal/(...)group/[groupId]/solved-detail/components/CodeSection/CodeHighlighter/rule";
import type { SolutionLanguage } from "@/app/api/solutions/type";
import { IcnBtnArrowDown } from "@/asset/svg";
import {
  arrowStyle,
  codeCard,
  codeStyle,
  codeWrapper,
  expandButtonStyle,
  solutionHeader,
  solutionWrapper,
  titleStyle,
  titleWrapper,
} from "@/shared/component/CodeCard/index.css";
import { getTierImage } from "@/shared/util/img";
import clsx from "clsx";
import { useEffect, useId, useMemo, useState } from "react";

const getCodeLineCount = (content: string) => {
  if (content === "") return 0;

  const lines = content.split("\n");

  return content.endsWith("\n") ? lines.length - 1 : lines.length;
};

interface CodeCardProps {
  problemTitle: string;
  problemLevel: number;
  content: string;
  language: SolutionLanguage;
}

const DEFAULT_LINE_COUNT = 5;

const CodeCard = ({
  problemTitle,
  problemLevel,
  content,
  language,
}: CodeCardProps) => {
  const codeId = useId();
  const Icon = getTierImage(problemLevel);
  const mappedLanguage = languageMapper[language];

  const [isExpanded, setIsExpanded] = useState(false);

  const lineCount = useMemo(() => getCodeLineCount(content), [content]);

  const isExpandable = lineCount > DEFAULT_LINE_COUNT;

  useEffect(() => {
    const highlight = async () => {
      await import(
        `prismjs/components/prism-${mappedLanguage}` as string
      ).catch(() => null);
      addCustomPatternsToAllLanguages();
      Prism.highlightAll();
    };

    highlight();
  }, [content, mappedLanguage]);

  return (
    <section className={solutionWrapper}>
      <div className={solutionHeader}>
        <div className={titleWrapper}>
          <Icon height={24} width={18.75} />
          <h3 className={titleStyle}>{problemTitle}</h3>
        </div>
      </div>

      <div className={codeCard}>
        <pre
          className={clsx(
            codeWrapper({
              isExpanded: isExpandable ? isExpanded : true,
            }),
          )}
        >
          <code
            id={codeId}
            className={clsx(codeStyle, `language-${mappedLanguage}`)}
          >
            {content}
          </code>
        </pre>
        {isExpandable && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className={expandButtonStyle}
            aria-expanded={isExpanded}
            aria-controls={codeId}
          >
            <IcnBtnArrowDown
              width={12}
              className={arrowStyle({ direction: isExpanded ? "up" : "down" })}
            />
            {isExpanded ? "다시 접기" : "펼쳐보기"} ({lineCount}줄)
          </button>
        )}
      </div>
    </section>
  );
};

export default CodeCard;

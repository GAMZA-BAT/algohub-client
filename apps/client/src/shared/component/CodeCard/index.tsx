"use client";
import { IcnBtnArrowDown } from "@/asset/svg";
import {
  arrowStyle,
  codeCard,
  codeStyle,
  codeWrapper,
  expandButtonStyle,
  inputTextStyle,
  solutionHeader,
  solutionWrapper,
  titleStyle,
  titleWrapper,
} from "@/shared/component/CodeCard/index.css";
import Like from "@/shared/component/Like";
import { getTierImage } from "@/shared/util/img";
import { m_pluse_rounded_1c } from "@/styles/fonts";
import clsx from "clsx";
import { useId, useMemo, useRef, useState } from "react";

const getCodeLineCount = (content: string) => {
  if (content === "") return 0;

  const lines = content.split("\n");

  return content.endsWith("\n") ? lines.length - 1 : lines.length;
};

interface CodeCardProps {
  problemTitle: string;
  problemLevel: number;
  content: string;
}

const DEFAULT_LINE_COUNT = 5;

const CodeCard = ({ problemTitle, problemLevel, content }: CodeCardProps) => {
  const codeId = useId();
  const codeRef = useRef<HTMLPreElement>(null);
  const Icon = getTierImage(problemLevel);

  const [isExpanded, setIsExpanded] = useState(false);

  const lineCount = useMemo(() => getCodeLineCount(content), [content]);

  const isExpandable = lineCount > DEFAULT_LINE_COUNT;

  return (
    <section className={solutionWrapper}>
      <div className={solutionHeader}>
        <div className={titleWrapper}>
          <Icon height={24} width={18.75} />
          <h3 className={titleStyle}>{problemTitle}</h3>
        </div>
        <Like />
      </div>

      <p className={inputTextStyle}>입력</p>

      <div className={codeCard}>
        <pre
          ref={codeRef}
          className={codeWrapper({
            isExpanded: isExpandable ? isExpanded : true,
          })}
        >
          <code
            id={codeId}
            className={clsx(codeStyle, m_pluse_rounded_1c.className)}
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

"use client";

import {
  foldButtonStyle,
  foldableTextBoxWrapper,
  foldableTextStyle,
  textCopyButtonStyle,
} from "@/app/[user]/edge-case/components/EdgeCaseList/FoldableTextBox/index.css";
import { IcnBtnArrowDown, IcnBtnArrowUp, IcnFileCopy } from "@/asset/svg";
import { useClipboard } from "@/shared/hook/useClipboard";
import { m_pluse_rounded_1c } from "@/styles/fonts";
import clsx from "clsx";
import { useMemo, useState } from "react";

const DEFAULT_LINE_COUNT = 3;

const FoldableTextBox = ({ text }: { text: string }) => {
  const [isFolded, setIsFolded] = useState(true);
  const { copy } = useClipboard();

  const handleToggleFold = () => {
    setIsFolded((prev) => !prev);
  };

  const lineCount = (text.match(/\r\n|\n|\r/g) ?? []).length + 1;
  const isFoldable = lineCount > DEFAULT_LINE_COUNT;
  const foldedText = useMemo(() => {
    const parts = text.split("\n");
    return parts.slice(0, DEFAULT_LINE_COUNT).join("\n");
  }, [text]);

  return (
    <div className={foldableTextBoxWrapper}>
      <button
        className={textCopyButtonStyle}
        onClick={() => copy(text)}
        aria-label="내용 복사"
      >
        <IcnFileCopy width={16} height={16} aria-hidden="true" />
      </button>
      <p
        id="foldable-content"
        className={clsx(foldableTextStyle, m_pluse_rounded_1c.className)}
      >
        {isFolded ? foldedText : text}
      </p>
      {isFoldable && (
        <button
          className={foldButtonStyle}
          onClick={handleToggleFold}
          aria-expanded={!isFolded}
          aria-controls="foldable-content"
        >
          {isFolded ? (
            <>
              <IcnBtnArrowDown width={12} height={12} aria-hidden="true" />
              {`펼쳐보기 (${lineCount}줄)`}
            </>
          ) : (
            <>
              <IcnBtnArrowUp width={12} height={12} aria-hidden="true" />
              접기
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default FoldableTextBox;

"use client";

import {
  foldableTextBoxWrapper,
  textCopyButtonStyle,
  foldableTextStyle,
  foldButtonStyle,
} from "@/app/[user]/edge-case/components/EdgeCaseList/FoldableTextBox/index.css";
import { useMemo, useState } from "react";
import { IcnBtnArrowDown, IcnBtnArrowUp, IcnFileCopy } from "@/asset/svg";
import { useClipboard } from "@/shared/hook/useClipboard";
import clsx from "clsx";
import { m_pluse_rounded_1c } from "@/styles/fonts";

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
  }, []);

  return (
    <div className={foldableTextBoxWrapper}>
      <button className={textCopyButtonStyle} onClick={() => copy(text)}>
        <IcnFileCopy width={24} height={24} />
      </button>
      <p className={clsx(foldableTextStyle, m_pluse_rounded_1c.className)}>
        {isFolded ? foldedText : text}
      </p>
      {isFoldable && (
        <button className={foldButtonStyle} onClick={handleToggleFold}>
          {isFolded ? (
            <>
              <IcnBtnArrowDown width={12} height={12} />
              {`펼쳐보기 (${lineCount}줄)`}
            </>
          ) : (
            <>
              <IcnBtnArrowUp width={12} height={12} />
              접기
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default FoldableTextBox;

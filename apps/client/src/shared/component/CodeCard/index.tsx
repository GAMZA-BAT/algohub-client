"use client";

import { IcnBtnArrowDown } from "@/asset/svg";
import {
  arrowStyle,
  codeCard,
  codeStyle,
  expandButtonStyle,
  inputTextStyle,
  solutionHeader,
  solutionWrapper,
  titleStyle,
  titleWrapper,
} from "@/shared/component/CodeCard/index.css";
import Like from "@/shared/component/Like";
import { getTierImage } from "@/shared/util/img";
import clsx from "clsx";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { useId, useState } from "react";

const m_pluse_rounded_1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mplus",
});

const CodeCard = () => {
  const codeId = useId();

  const Icon = getTierImage(5);
  const example =
    "1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.";

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={solutionWrapper}>
      <div className={solutionHeader}>
        <div className={titleWrapper}>
          <Icon height={24} width={18.75} />
          <h3 className={titleStyle}>1166번: 선물</h3>
        </div>
        <Like />
      </div>

      <p className={inputTextStyle}>입력</p>

      <div className={codeCard}>
        <p
          id={codeId}
          className={clsx(
            codeStyle({ isExpanded }),
            m_pluse_rounded_1c.className,
          )}
        >
          {example}
        </p>
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
          {isExpanded ? "다시 접기" : "펼쳐보기"} (20줄)
        </button>
      </div>
    </section>
  );
};

export default CodeCard;

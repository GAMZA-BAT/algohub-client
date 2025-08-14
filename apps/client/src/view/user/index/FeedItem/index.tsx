"use client";
import { IcnBtnArrowDown, IcnEnter } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Input from "@/common/component/Input";
import { getTierImage } from "@/shared/util/img";
import Like from "@/view/user/index/FeedItem/Like";
import {
  agoMinuteStyle,
  arrowStyle,
  codeCard,
  codeStyle,
  commentItemStyle,
  commentListStyle,
  commentNameStyle,
  commentStyle,
  commentWrapper,
  descriptionStyle,
  expandButtonStyle,
  feedItemContainer,
  infoTextWrapper,
  infoWrapper,
  inputTextStyle,
  leaveCommentWrapper,
  nameStyle,
  solutionHeader,
  solutionWrapper,
  studyNameStyle,
  titleStyle,
  titleWrapper,
} from "@/view/user/index/FeedItem/index.css";
import clsx from "clsx";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { useState } from "react";

const m_pluse_rounded_1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mplus",
});

const FeedItem = () => {
  const Icon = getTierImage(5);
  const example =
    "1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.1 2 3 4 5\n이 예시는 줄바꿈이 포함된 긴 문장입니다.\nCSS white-space 속성이나 텍스트 래핑이 어떻게 적용되는지 테스트할 수 있습니다.\n각 줄마다 다른 내용을 넣어서 줄바꿈 동작을 명확하게 확인할 수 있습니다.\n마지막 줄입니다.";

  const [isExpand, setIsExpand] = useState(false);

  return (
    <article className={feedItemContainer}>
      <section className={infoWrapper}>
        <Avatar alt="유저" size="small" />
        <div className={infoTextWrapper}>
          <p className={descriptionStyle}>
            <span className={nameStyle}>이진</span>님이{" "}
            <span className={nameStyle}>최주용</span>님의 풀이에 댓글을
            남겼습니다.
          </p>
          <p>
            <span className={studyNameStyle}>알고대학 알고리즘 스터디</span>
            <span className={agoMinuteStyle}>20분 전</span>
          </p>
        </div>
      </section>

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
            className={clsx(
              codeStyle({ isExpand }),
              m_pluse_rounded_1c.className,
            )}
          >
            {example}
          </p>
          <button
            onClick={() => setIsExpand((prev) => !prev)}
            className={expandButtonStyle}
          >
            <IcnBtnArrowDown
              width={12}
              className={arrowStyle({ direction: isExpand ? "up" : "down" })}
            />
            {isExpand ? "펼쳐보기" : "다시 접기"} (20줄)
          </button>
        </div>
      </section>

      <ul className={commentListStyle}>
        <li className={commentItemStyle}>
          <Avatar size="small" alt="댓글을 단 유저" />
          <div className={commentWrapper}>
            <p className={commentNameStyle}>이진</p>
            <p className={commentStyle}>
              이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인
              최적화 방법이 있을까요? 이 접근 방식이 문제를 해결하는 데 충분히
              효율적일까요? 추가적인 최적화 방법이 있을까요?
            </p>
            <Like />
          </div>
        </li>
        <li className={commentItemStyle}>
          <Avatar size="small" alt="댓글을 단 유저" />
          <div className={commentWrapper}>
            <p className={commentNameStyle}>이진</p>
            <p className={commentStyle}>
              이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인
              최적화 방법이 있을까요? 이 접근 방식이 문제를 해결하는 데 충분히
              효율적일까요? 추가적인 최적화 방법이 있을까요?
            </p>
            <Like />
          </div>
        </li>
      </ul>

      <section className={leaveCommentWrapper}>
        <IcnEnter width={24} height={24} />
        <Avatar size="small" alt="유저" />
        <Input placeholder="의견을 남겨주세요." />
      </section>
    </article>
  );
};

export default FeedItem;

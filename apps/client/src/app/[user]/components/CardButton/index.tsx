"use client";

import type { Study } from "@/app/api/groups/type";
import Avatar from "@/common/component/Avatar";
import {
  type ButtonHTMLAttributes,
  type ComponentProps,
  useEffect,
  useId,
  useState,
} from "react";
import RecommendTag from "./RecommendTag";
import {
  cardStyle,
  contentWrapperStyle,
  descriptionWrapper,
  iconStyle,
  introductionStyle,
  overlayButtonStyle,
  slideInAnimation,
  slideOutAnimation,
  studyNameStyle,
} from "./index.css";

interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  groupInfo: Study;
  tagVariant?: ComponentProps<typeof RecommendTag>["variant"];
}

const ANIMATION_DURATION_MS = 300;

const CardButton = ({ groupInfo, tagVariant, ...props }: CardButtonProps) => {
  const nameId = useId();
  const introductionId = useId();
  const tagId = useId();
  const [[displayedGroup, displayedTag], setDisplayedData] = useState([
    groupInfo,
    tagVariant,
  ]);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if (groupInfo.id !== displayedGroup.id) {
      // 1. 현재 콘텐츠를 사라지게 하는 애니메이션 시작
      setAnimation(slideOutAnimation);
      const timer = setTimeout(() => {
        // 2. 애니메이션이 끝난 후 콘텐츠 교체
        setDisplayedData([groupInfo, tagVariant]);
        // 3. 새 콘텐츠가 나타나는 애니메이션 시작
        setAnimation(slideInAnimation);
      }, ANIMATION_DURATION_MS);

      return () => clearTimeout(timer);
    }
  }, [groupInfo, tagVariant, displayedGroup.id]);

  return (
    <div className={cardStyle}>
      <div className={`${contentWrapperStyle} ${animation}`} aria-hidden="true">
        <div className={descriptionWrapper}>
          <Avatar
            className={iconStyle}
            alt={`${displayedGroup.name} 스터디의 프로필 사진`}
          />
          <h3 id={nameId} className={studyNameStyle}>
            {displayedGroup.name}
          </h3>
          <p id={introductionId} className={introductionStyle}>
            {displayedGroup.introduction}
          </p>
        </div>
        {displayedTag && <RecommendTag id={tagId} variant={displayedTag} />}
      </div>

      <button
        type="button"
        className={overlayButtonStyle}
        aria-labelledby={`${nameId} ${introductionId} ${tagId}`}
        title={displayedGroup.introduction}
        {...props}
      />
    </div>
  );
};

export default CardButton;

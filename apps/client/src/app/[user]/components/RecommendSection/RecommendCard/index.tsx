"use client";

import Avatar from "@/common/component/Avatar";
import { useId } from "react";
import RecommendTag from "./RecommendTag";
import {
  cardStyle,
  descriptionWrapper,
  iconStyle,
  studyDescriptionStyle,
  studyNameStyle,
} from "./index.css";

const RecommendCard = () => {
  const nameId = useId();
  const descriptionId = useId();
  const tagId = useId();

  const handleClick = () => {
    /* 모달 열기 */
  };

  return (
    <button
      type="button"
      className={cardStyle}
      onClick={handleClick}
      aria-labelledby={nameId}
      aria-describedby={`${descriptionId} ${tagId}`}
    >
      <div className={descriptionWrapper}>
        <Avatar className={iconStyle} alt="알코칠 스터디의 프로필 사진" />
        <h3 id={nameId} className={studyNameStyle}>
          알코칠
        </h3>
        <p id={descriptionId} className={studyDescriptionStyle}>
          BE Developer로 성장하고 싶은 숭실대학교 학생들이 푸는 알고리즘
          스터디입니다.
        </p>
      </div>

      <RecommendTag id={tagId} variant="recentSignups" />
    </button>
  );
};

export default RecommendCard;

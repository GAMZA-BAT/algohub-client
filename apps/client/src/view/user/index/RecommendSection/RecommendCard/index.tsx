"use client";

import Avatar from "@/common/component/Avatar";
import { useId } from "react";
import Tag from "./Tag";
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
  const badgeId = useId();

  const handleClick = () => {
    /* 모달 열기 */
  };

  return (
    <button
      type="button"
      className={cardStyle}
      onClick={handleClick}
      aria-labelledby={nameId}
      aria-describedby={`${descriptionId} ${badgeId}`}
    >
      <div className={descriptionWrapper}>
        <Avatar className={iconStyle} alt="" role="presentation" />
        <h3 id={nameId} className={studyNameStyle}>
          알코칠
        </h3>
        <p id={descriptionId} className={studyDescriptionStyle}>
          BE Developer로 성장하고 싶은 숭실대학교 학생들이 푸는 알고리즘
          스터디입니다.
        </p>
      </div>

      <Tag id={badgeId} color="blue">
        최근 가입률이 높은 스터디
      </Tag>
    </button>
  );
};

export default RecommendCard;

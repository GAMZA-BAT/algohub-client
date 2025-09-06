"use client";

import Avatar from "@/common/component/Avatar";
import Button from "@/common/component/Button";
import { useId } from "react";
import {
  actionButtonStyle,
  actionWrapperStyle,
  cardStyle,
  descriptionWrapper,
  iconStyle,
  modalTriggerButtonStyle,
  nameStyle,
  textStyle,
} from "./index.css";

type ApprovalCardProps = {
  name: string;
  avatarUrl: string;
};

export const ApprovalCard = ({ name, avatarUrl }: ApprovalCardProps) => {
  const nameId = useId();

  const handleApprove = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Approving ${name}`);
    // TODO: Implement approve logic
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Rejecting ${name}`);
    // TODO: Implement reject logic
  };

  const handleOpenModal = () => {
    console.log(`${name}님의 가입 요청 상세 모달 열기`);
    // TODO: 모달을 여는 로직 구현
  };

  return (
    <article className={cardStyle} aria-labelledby={nameId}>
      <button
        type="button"
        className={modalTriggerButtonStyle}
        onClick={handleOpenModal}
        aria-label={`${name}님의 스터디 가입 요청 상세 보기`}
      >
        <div className={descriptionWrapper}>
          <Avatar
            className={iconStyle}
            src={avatarUrl}
            alt={`${name}의 프로필 사진`}
          />
          <p className={textStyle}>
            <span id={nameId} className={nameStyle}>
              {name}
            </span>
            님의 스터디 가입 요청
          </p>
        </div>
      </button>

      <div className={actionWrapperStyle}>
        <Button
          size="small"
          color="purple"
          isActive
          className={actionButtonStyle}
          onClick={handleApprove}
        >
          승인하기
        </Button>
        <Button
          size="small"
          color="lg"
          isActive
          className={actionButtonStyle}
          onClick={handleReject}
        >
          거절하기
        </Button>
      </div>
    </article>
  );
};

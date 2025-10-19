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
  nameStyle,
  textStyle,
} from "./index.css";

type ApprovalCardProps = {
  name: string;
  groupName: string;
  avatarUrl: string;
};

export const ApprovalCard = ({ name, avatarUrl }: ApprovalCardProps) => {
  const nameId = useId();

  const handleApprove = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Approving ${name}`);
    close();
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Rejecting ${name}`);
    close();
  };

  return (
    <article className={cardStyle} aria-labelledby={nameId}>
      <div className={descriptionWrapper}>
        <Avatar
          className={iconStyle}
          src={avatarUrl}
          alt={`${name}의 프로필 사진`}
        />
        <p id={nameId} className={textStyle}>
          <span className={nameStyle}>{name}</span>
          님의 스터디 가입 요청
        </p>
      </div>

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

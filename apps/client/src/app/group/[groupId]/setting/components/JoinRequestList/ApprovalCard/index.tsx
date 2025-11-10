"use client";

import {
  useApprovalRequestMutation,
  useRejectRequestMutation,
} from "@/app/api/groups/mutation";
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
  avatarUrl: string;
  requesterId: number;
};

export const ApprovalCard = ({
  name,
  avatarUrl,
  requesterId,
}: ApprovalCardProps) => {
  const { mutate: approvalRequestMutate } =
    useApprovalRequestMutation(requesterId);
  const { mutate: rejectRequestMutate } = useRejectRequestMutation(requesterId);
  const nameId = useId();

  const handleApprove = (e: React.MouseEvent) => {
    e.stopPropagation();
    approvalRequestMutate();
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    rejectRequestMutate();
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

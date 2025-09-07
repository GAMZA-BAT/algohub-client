"use client";

import {
  useApprovalRequestMutation,
  useRejectRequestMutation,
} from "@/app/api/groups/mutation";
import Avatar from "@/common/component/Avatar";
import Button from "@/common/component/Button";
import { useBooleanState } from "@/common/hook/useBooleanState";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useId } from "react";
import {
  actionButtonStyle,
  actionWrapperStyle,
  cardStyle,
  descriptionWrapper,
  iconStyle,
  modalStyle,
  modalTriggerButtonStyle,
  nameStyle,
  textStyle,
} from "./index.css";

type ApprovalCardProps = {
  name: string;
  groupName: string;
  avatarUrl: string;
  groupId: number;
};

export const ApprovalCard = ({
  name,
  groupName,
  avatarUrl,
  groupId,
}: ApprovalCardProps) => {
  const { isOpen, open, close } = useBooleanState();
  const { mutate: approvalRequestMutate } = useApprovalRequestMutation(groupId);
  const { mutate: rejectRequestMutate } = useRejectRequestMutation(groupId);
  const nameId = useId();

  const handleApprove = (e: React.MouseEvent) => {
    e.stopPropagation();
    approvalRequestMutate();
    close();
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    rejectRequestMutate();
    close();
  };

  return (
    <article className={cardStyle} aria-labelledby={nameId}>
      <button
        type="button"
        className={modalTriggerButtonStyle}
        onClick={open}
        aria-label={`${name}님의 스터디 가입 요청 상세 보기`}
      >
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
      <GroupActionModal className={modalStyle} isOpen={isOpen} onClose={close}>
        <GroupActionModal.Applicant nickname={name} profileImage={avatarUrl} />
        <GroupActionModal.Prompt
          variant="applicant"
          applicantName={name}
          groupName={groupName}
        />
        <GroupActionModal.Actions
          onConfirm={handleApprove}
          onReject={handleReject}
          confirmText="승인하기"
          rejectText="거절하기"
        />
      </GroupActionModal>
    </article>
  );
};

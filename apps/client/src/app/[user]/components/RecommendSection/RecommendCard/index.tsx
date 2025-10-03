"use client";

import type { GroupResponse } from "@/app/api/groups/type";
import Avatar from "@/common/component/Avatar";
import { useBooleanState } from "@/common/hook/useBooleanState";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useId } from "react";
import RecommendTag from "./RecommendTag";
import {
  cardStyle,
  descriptionWrapper,
  iconStyle,
  studyDescriptionStyle,
  studyNameStyle,
} from "./index.css";

const MOCK_RECOMMEND_STUDY: GroupResponse = {
  id: 1,
  name: "알코칠",
  introduction:
    "BE Developer로 성장하고 싶은 숭실대학교 학생들이 푸는 알고리즘 스터디입니다.",
  groupImage: "",
  endDate: "2023-12-31",
  ownerNickname: "홍길동",
  startDate: "2023-01-01",
  role: "PARTICIPANT",
  isVisible: true,
  isBookmarked: true,
};

interface RecommendCardProps {
  name: string;
  introduction: string;
  groupImage: string | null;
}

const RecommendCard = ({
  name,
  introduction,
  groupImage,
}: RecommendCardProps) => {
  const nameId = useId();
  const descriptionId = useId();
  const tagId = useId();

  const { isOpen, open, close } = useBooleanState();

  const handleClick = () => {
    open();
  };

  const handleConfirm = () => {
    console.log("가입 신청 로직 실행");
    close();
  };

  return (
    <>
      <button
        type="button"
        className={cardStyle}
        onClick={handleClick}
        aria-labelledby={nameId}
        aria-describedby={`${descriptionId} ${tagId}`}
      >
        <div className={descriptionWrapper}>
          <Avatar
            src={groupImage}
            className={iconStyle}
            alt="알코칠 스터디의 프로필 사진"
          />
          <h3 id={nameId} className={studyNameStyle}>
            {name}
          </h3>
          <p id={descriptionId} className={studyDescriptionStyle}>
            {introduction}
          </p>
        </div>

        <RecommendTag id={tagId} variant="recentSignups" />
      </button>
      <GroupActionModal isOpen={isOpen} onClose={close}>
        <GroupActionModal.Info groupInfo={MOCK_RECOMMEND_STUDY} />
        <GroupActionModal.Prompt
          variant="recommend"
          groupName={MOCK_RECOMMEND_STUDY.name}
        />
        <GroupActionModal.Actions
          onConfirm={handleConfirm}
          onReject={close}
          confirmText="신청하기"
          rejectText="취소하기"
        />
      </GroupActionModal>
    </>
  );
};

export default RecommendCard;

"use client";
import type { GroupResponse } from "@/app/api/groups/type";
import { useBooleanState } from "@/common/hook/useBooleanState";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useEffect, useState } from "react";
import CardButton from "../CardButton";
import {
  recommendHeaderWrapper,
  recommendSectionWrapper,
  recommendStudyTitle,
} from "./index.css";

const MOCK_RECOMMEND_STUDIES: GroupResponse[] = [
  {
    id: 1,
    name: "알코칠",
    introduction:
      "BE Developer로 성장하고 싶은 숭실대학교 학생들의 알고리즘 스터디",
    groupImage: "",
    endDate: "2023-12-31",
    ownerNickname: "홍길동",
    startDate: "2023-01-01",
    role: "PARTICIPANT",
    isVisible: true,
    isBookmarked: true,
  },
  {
    id: 2,
    name: "코칠마",
    introduction: "FE Developer로 성장하고 싶은 주니어들의 스터디입니다.",
    groupImage: "",
    endDate: "2023-12-12",
    ownerNickname: "홍서동",
    startDate: "2023-05-01",
    role: "PARTICIPANT",
    isVisible: true,
    isBookmarked: true,
  },
  {
    id: 3,
    name: "CS 마스터",
    introduction: "컴퓨터 과학 기초를 탄탄히 다지고 싶은 분들을 위한 스터디",
    groupImage: "",
    endDate: "2024-06-30",
    ownerNickname: "김철수",
    startDate: "2024-01-01",
    role: "OWNER",
    isVisible: true,
    isBookmarked: false,
  },
];

const ROTATION_INTERVAL_MS = 5000;

const RecommendStudySection = () => {
  const { isOpen, open, close } = useBooleanState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const groupInfo = MOCK_RECOMMEND_STUDIES[currentIndex];

  useEffect(() => {
    if (isOpen || MOCK_RECOMMEND_STUDIES.length <= 1) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % MOCK_RECOMMEND_STUDIES.length,
      );
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [isOpen, MOCK_RECOMMEND_STUDIES]);

  const handleClose = () => {
    close();
  };

  const handleConfirm = () => {
    close();
  };

  return (
    <section
      className={recommendSectionWrapper}
      aria-labelledby="recommend-title"
    >
      <div className={recommendHeaderWrapper}>
        <h2 id="recommend-title" className={recommendStudyTitle}>
          추천 스터디
        </h2>
        <input />
      </div>
      <CardButton
        groupInfo={groupInfo}
        tagVariant="recentSignups"
        onClick={open}
      />
      <GroupActionModal isOpen={isOpen} onClose={handleClose}>
        <GroupActionModal.Info groupInfo={groupInfo} />
        <GroupActionModal.Prompt
          variant="recommend"
          groupName={groupInfo.name}
        />
        <GroupActionModal.Actions
          onConfirm={handleConfirm}
          onReject={handleClose}
          confirmText="신청하기"
          rejectText="취소하기"
        />
      </GroupActionModal>
    </section>
  );
};

export default RecommendStudySection;

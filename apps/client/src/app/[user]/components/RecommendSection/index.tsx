"use client";
import { useJoinRecommendMutation } from "@/app/api/groups/mutation";
import { useRecommendStudyQueryObject } from "@/app/api/users/query";
import { useBooleanState } from "@/common/hook/useBooleanState";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import CardButton from "../CardButton";
import SearchStudyInput from "../SearchStudyInput";
import {
  recommendHeaderWrapper,
  recommendSectionWrapper,
  recommendStudyTitle,
} from "./index.css";

type RecommendStudySectionProps = {
  userId: string;
};

const ROTATION_INTERVAL_MS = 5000;
const RecommendStudySection = ({ userId }: RecommendStudySectionProps) => {
  const { mutate: joinRecommendMutate } = useJoinRecommendMutation();
  const { data: recommendationItems } = useSuspenseQuery({
    ...useRecommendStudyQueryObject(userId),
    select(data) {
      return Object.values(data);
    },
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, open, close } = useBooleanState();

  const recommendationItem = recommendationItems?.[currentIndex];
  const groupInfo = recommendationItem?.studyGroup;
  const handleConfirm = () => {
    joinRecommendMutate(groupInfo.id);
    close();
  };

  useEffect(() => {
    if (isOpen || recommendationItems.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % recommendationItems.length,
      );
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [isOpen, recommendationItems]);

  if (!recommendationItem) {
    return null;
  }

  return (
    <section
      className={recommendSectionWrapper}
      aria-labelledby="recommend-title"
    >
      <div className={recommendHeaderWrapper}>
        <h2 id="recommend-title" className={recommendStudyTitle}>
          추천 스터디
        </h2>
        <SearchStudyInput />
      </div>
      <CardButton
        groupInfo={groupInfo}
        tagVariant="HIGH_JOIN_RATE_RECENT"
        onClick={open}
      />
      <GroupActionModal isOpen={isOpen} onClose={close}>
        <GroupActionModal.Info groupInfo={groupInfo} />
        <GroupActionModal.Prompt
          variant="recommend"
          groupName={groupInfo.name}
        />
        <GroupActionModal.Actions
          onConfirm={handleConfirm}
          onReject={close}
          confirmText="신청하기"
          rejectText="취소하기"
        />
      </GroupActionModal>
    </section>
  );
};

export default RecommendStudySection;

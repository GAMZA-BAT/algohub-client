"use client";
import { useJoinRecommendMutation } from "@/app/api/groups/mutation";
import { useRecommendStudyQueryObject } from "@/app/api/users/query";
import { useBooleanState } from "@/common/hook/useBooleanState";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import CardButton from "../CardButton";
import {
  recommendHeaderWrapper,
  recommendSectionWrapper,
  recommendStudyTitle,
} from "./index.css";

const ROTATION_INTERVAL_MS = 5000;

const RecommendStudySection = () => {
  const { mutate: joinRecommendMutate } = useJoinRecommendMutation();
  const { data: groupInfos } = useSuspenseQuery(useRecommendStudyQueryObject());
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, open, close } = useBooleanState();

  const groupInfo = groupInfos?.[currentIndex];

  const handleConfirm = () => {
    joinRecommendMutate(groupInfo!.id);
    close();
  };

  useEffect(() => {
    if (isOpen || groupInfos.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % groupInfos.length);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [isOpen, groupInfos]);

  if (!groupInfo) {
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
        <input />
      </div>
      <CardButton
        groupInfo={groupInfo}
        tagVariant="recentSignups"
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

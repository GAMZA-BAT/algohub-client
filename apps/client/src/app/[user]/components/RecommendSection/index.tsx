"use client";

import RecommendList from "@/app/[user]/components/RecommendSection/RecommendList";
import { useJoinRecommendMutation } from "@/app/api/groups/mutation";
import { useSearchStudyQueryObject } from "@/app/api/groups/query";
import { useRecommendStudyQueryObject } from "@/app/api/users/query";
import Spinner from "@/common/component/Spinner";
import { useBooleanState } from "@/common/hook/useBooleanState";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CardButton from "../CardButton";
import SearchStudyInput from "../SearchStudyInput";
import {
  loadingWrapper,
  recommendHeaderContentWrapper,
  recommendHeaderWrapper,
  recommendSectionWrapper,
  recommendStudyTitle,
  searchedStudyCountStyle,
} from "./index.css";

const ROTATION_INTERVAL_MS = 5000;
const RecommendStudySection = () => {
  const searchParam = useSearchParams();
  const searchPattern = searchParam.get("search") || "";

  const { data: studyList, isFetching } = useQuery(
    useSearchStudyQueryObject({ searchPattern }),
  );
  const { data: recommendationItems } = useSuspenseQuery({
    ...useRecommendStudyQueryObject(),
    select(data) {
      return Object.values(data);
    },
  });

  const { mutate: joinRecommendMutate } = useJoinRecommendMutation();
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
      className={recommendSectionWrapper({
        noBorderBottom: !!searchPattern && studyList?.content.length === 0,
      })}
      aria-labelledby="recommend-title"
    >
      <div className={recommendHeaderWrapper}>
        <div className={recommendHeaderContentWrapper}>
          <h2 id="recommend-title" className={recommendStudyTitle}>
            {searchPattern ? "검색 결과" : "추천 스터디"}
          </h2>
          {searchPattern && (
            <div className={searchedStudyCountStyle}>
              {studyList?.content.length || 0}
            </div>
          )}
        </div>

        <SearchStudyInput />
      </div>

      {searchPattern ? (
        isFetching ? (
          <div className={loadingWrapper}>
            <Spinner />
          </div>
        ) : (
          <RecommendList studyList={studyList?.content || []} />
        )
      ) : (
        <>
          <CardButton
            groupInfo={groupInfo}
            tagVariant={groupInfo.tags?.[0]}
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
        </>
      )}
    </section>
  );
};

export default RecommendStudySection;

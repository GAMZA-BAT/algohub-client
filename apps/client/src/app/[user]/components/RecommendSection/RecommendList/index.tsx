import { studyListWrapper } from "@/app/[user]/components/RecommendSection/RecommendList/index.css";
import SearchEmpty from "@/app/[user]/components/RecommendSection/SearchEmpty";
import { useJoinRecommendMutation } from "@/app/api/groups/mutation";
import type { Study } from "@/app/api/groups/type";
import { useRecommendStudyQueryObject } from "@/app/api/users/query";
import { useBooleanState } from "@/common/hook/useBooleanState";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CardButton from "../../CardButton";

type RecommendListProps = {
  studyList: Study[];
};

const RecommendList = ({ studyList }: RecommendListProps) => {
  const { isOpen, open, close } = useBooleanState();
  const [groupInfo, setGroupInfo] = useState<Study>(studyList[0]);
  const { data: recommendationItems } = useQuery({
    ...useRecommendStudyQueryObject(),
    select(data) {
      return Object.values(data).map((item) => item.studyGroup);
    },
  });
  const { mutate: joinRecommendMutate } = useJoinRecommendMutation();

  const handleOpen = (study: Study) => {
    setGroupInfo(study);
    open();
  };

  const handleConfirm = () => {
    if (!groupInfo) return;
    joinRecommendMutate(groupInfo.id);
    close();
  };

  if (studyList.length === 0) {
    return <SearchEmpty />;
  }

  return (
    <>
      <ul className={studyListWrapper} aria-label="검색된 스터디 목록">
        {studyList.map((study) => {
          const tagVariant = recommendationItems?.find(
            ({ id }) => id === study.id,
          )?.tags?.[0];
          return (
            <li key={study.id}>
              <CardButton
                groupInfo={study}
                tagVariant={tagVariant}
                onClick={() => handleOpen(study)}
              />
            </li>
          );
        })}
      </ul>
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
  );
};

export default RecommendList;

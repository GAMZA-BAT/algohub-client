"use client";

import { useMyNicknameQuery } from "@/app/[user]/query";
import {
  useGroupByCodeQuery,
  useJoinGroupMutation,
} from "@/app/join-group/[code]/query";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { sidebarWrapper } from "@/styles/shared.css";
import DecisionPrompt from "@/view/user/join-group/DecisionPrompt";
import GroupInfoCard from "@/view/user/join-group/GroupInfoCard";
import {
  btnWrapper,
  descErrorText,
  errorText,
  errorWrapper,
  wrapper,
} from "@/view/user/join-group/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const JoinGroupPage = ({ params: { code } }: { params: { code: string } }) => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(true);
  const { data: groupData } = useGroupByCodeQuery(code);
  const userNickname = useMyNicknameQuery();
  const { mutate: joinGroupMutate } = useJoinGroupMutation(groupData?.id || 0);
  const router = useRouter();

  const handleAccept = () => {
    joinGroupMutate(code, {
      onError: (error: Error) => {
        if (error.message.includes(`${HTTP_ERROR_STATUS.BAD_REQUEST}`))
          setIsJoinModalOpen(false);
      },
    });
  };

  const handleReject = () => {
    if (isJoinModalOpen) router.push(`/${userNickname}`);
  };
  const handleReject2 = () => {
    if (!isJoinModalOpen) router.push(`/${userNickname}`);
  };
  const handleMoveGroup = () => router.push(`/group/${groupData?.id}`);

  if (!groupData) return;
  return (
    <main className={sidebarWrapper}>
      <Modal isOpen={isJoinModalOpen} onClose={handleReject} hasCloseBtn>
        <div className={wrapper}>
          <GroupInfoCard groupInfo={groupData} />
          <DecisionPrompt owner={groupData.ownerNickname} />
          <div className={btnWrapper}>
            <Button size="medium" color="lg">
              거절하기
            </Button>
            <Button size="medium" color="purple" onClick={handleAccept}>
              수락하기
            </Button>
          </div>
        </div>
      </Modal>
      <Modal isOpen={!isJoinModalOpen} onClose={handleReject2} hasCloseBtn>
        <div className={errorWrapper}>
          <p className={errorText({ isHighlight: false })}>
            초대 받은 그룹 스터디
            <br />
            <span className={errorText({ isHighlight: true })}>
              {groupData.name}
            </span>
            는<br />
            이미 가입된 그룹이에요.
          </p>
          <p className={descErrorText}>
            이미 스터디원으로 참여하고 있어요. 해당 스터디홈으로 이동할게요.
          </p>
          <Button size="medium" color="purple" onClick={handleMoveGroup}>
            스터디홈으로 돌아가기
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default JoinGroupPage;

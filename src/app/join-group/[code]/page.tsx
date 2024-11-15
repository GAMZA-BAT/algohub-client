"use client";

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
import { btnWrapper, wrapper } from "@/view/user/join-group/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const JoinGroupPage = ({ params: { code } }: { params: { code: string } }) => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(true);
  const { data: groupData } = useGroupByCodeQuery(code);
  const { mutate: joinGroupMutate } = useJoinGroupMutation(groupData?.id || 0);
  const router = useRouter();

  const handleAccept = () =>
    joinGroupMutate(code, {
      onError: (error: Error) => {
        if (error.message.includes(`${HTTP_ERROR_STATUS.BAD_REQUEST}`))
          setIsJoinModalOpen(false);
      },
    });
  const handleReject = () => router.push("/");

  if (!groupData) return;
  return (
    <main className={sidebarWrapper}>
      <Modal isOpen={true} onClose={handleReject} hasCloseBtn>
        {isJoinModalOpen ? (
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
        ) : (
          <div className={wrapper}>
            <p>이미 가입한 그룹입니다.</p>
          </div>
        )}
      </Modal>
    </main>
  );
};

export default JoinGroupPage;

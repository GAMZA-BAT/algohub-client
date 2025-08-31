"use client";
import { useGroupByCodeQueryObject } from "@/app/api/groups/query";
import { joinGroupAction } from "@/app/join-group/[code]/action";
import {
  descErrorText,
  errorText,
  errorWrapper,
} from "@/app/join-group/components/index.css";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { sidebarWrapper } from "@/styles/shared.css";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const JoinGroupPage = ({ params: { code } }: { params: { code: string } }) => {
  usePvEvent("join_group_page_view", {
    code: code,
  });
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(true);
  const { data: groupData } = useQuery(useGroupByCodeQueryObject(code));
  const userNickname = useSession().data?.user?.nickname;
  const router = useRouter();

  const handleJoin = async () => {
    const result = await joinGroupAction(code);

    if (result.status === 200) {
      router.push(`/group/${groupData?.id}`);
    } else if (result.status === HTTP_ERROR_STATUS.BAD_REQUEST) {
      setIsJoinModalOpen(false);
    } else {
      console.error(result);
    }
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
      <GroupActionModal isOpen={isJoinModalOpen} onClose={handleReject}>
        <GroupActionModal.Info groupInfo={groupData} />
        <GroupActionModal.Prompt
          variant="join"
          ownerName={groupData.ownerNickname}
        />
        <GroupActionModal.Actions
          onConfirm={handleJoin}
          onReject={handleReject}
        />
      </GroupActionModal>
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
          <Button
            type="button"
            size="medium"
            color="purple"
            onClick={handleMoveGroup}
          >
            스터디홈으로 돌아가기
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default JoinGroupPage;

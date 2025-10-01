"use client";
import { useGroupByCodeQueryObject } from "@/app/api/groups/query";
import { joinGroupAction } from "@/app/join-group/[code]/action";
import {} from "@/app/join-group/components/index.css";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { sidebarWrapper } from "@/styles/shared.css";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SignedupStudyModal from "../components/SignedupStudyModal";

const JoinGroupPage = ({ params: { code } }: { params: { code: string } }) => {
  usePvEvent("join_group_page_view", {
    code: code,
  });
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(true);
  const { data: groupData } = useQuery(useGroupByCodeQueryObject(code));
  const userNickname = useSession().data?.user?.nickname!;
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
      <SignedupStudyModal
        isOpen={!isJoinModalOpen}
        userNickname={userNickname}
        groupId={groupData.id}
        groupName={groupData.name}
      />
    </main>
  );
};

export default JoinGroupPage;

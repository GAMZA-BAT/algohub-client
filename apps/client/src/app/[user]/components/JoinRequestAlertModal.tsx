"use client";

import { MOCK_JOIN_REQUESTS } from "@/app/group/[groupId]/setting/components/JoinRequestList";
import { modalStyle } from "@/app/group/[groupId]/setting/components/JoinRequestList/ApprovalCard/index.css";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type JoinRequestAlertModalControllerProps = {
  groupName: string;
  groupId: string;
};

export const JoinRequestAlertModalController = ({
  groupName,
  groupId,
}: JoinRequestAlertModalControllerProps) => {
  const router = useRouter();
  // 요청자 배열
  const { name, avatarUrl } = MOCK_JOIN_REQUESTS[0];

  // TODO: useSuspenseQuery로 isOpen 대체하기
  // + stale time 설정해서 refetch하고, 갱신됐으면 세션 스토리지 초기화해서 재표시
  const [isOpen, setIsOpen] = useState(false);

  const sessionStorageKey = `joinRequestAlertShown-${groupId}`;

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem(sessionStorageKey);
    if (!hasBeenShown) {
      setIsOpen(true);
    }
  }, [groupId, sessionStorageKey]);

  const handleApprove = () => {
    router.push(`/group/${groupId}/setting`);
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(sessionStorageKey, "true");
  };

  return (
    <GroupActionModal
      className={modalStyle}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <GroupActionModal.Applicant nickname={name} profileImage={avatarUrl} />
      <GroupActionModal.Prompt
        variant="applicant"
        applicantName={name}
        groupName={groupName}
        count={MOCK_JOIN_REQUESTS.length}
      />
      <GroupActionModal.Actions
        onConfirm={handleApprove}
        onReject={handleClose}
        confirmText="승인하러가기"
        rejectText="닫기"
      />
    </GroupActionModal>
  );
};

"use client";

import { useJoinRequestsQueryObject } from "@/app/api/groups/query";
import { modalStyle } from "@/app/group/[groupId]/setting/components/JoinRequestList/ApprovalCard/index.css";
import GroupActionModal from "@/shared/component/GroupActionModal";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type JoinRequestAlertModalControllerProps = {
  groupName: string;
  groupId: number;
};

export const JoinRequestAlertModalController = ({
  groupName,
  groupId,
}: JoinRequestAlertModalControllerProps) => {
  const router = useRouter();
  const { data: joinRequests } = useSuspenseQuery(
    useJoinRequestsQueryObject(groupId),
  );
  const sessionStorageKey = `joinRequestAlertShown-${groupId}`;

  const [hasBeenShown, setHasBeenShown] = useState(() => {
    if (typeof window === "undefined") return true;
    return !!sessionStorage.getItem(sessionStorageKey);
  });
  const isOpen = joinRequests.length > 0 && !hasBeenShown;

  // refetching시 데이터가 변경되었을 때만 모달을 다시 보여줄 수 있도록 함
  const prevJoinRequestIdsRef = useRef<string>();
  useEffect(() => {
    const currentRequestIds = joinRequests.map((req) => req.id).sort();
    const currentRequestIdsString = JSON.stringify(currentRequestIds);

    if (
      prevJoinRequestIdsRef.current !== undefined &&
      prevJoinRequestIdsRef.current !== currentRequestIdsString
    ) {
      sessionStorage.removeItem(sessionStorageKey);
      setHasBeenShown(false);
    }

    prevJoinRequestIdsRef.current = currentRequestIdsString;
  }, [joinRequests, sessionStorageKey]);

  if (!isOpen) return null;

  const handleApprove = () => {
    router.push(`/group/${groupId}/setting`);
    handleClose();
  };

  const handleClose = () => {
    setHasBeenShown(true);
    sessionStorage.setItem(sessionStorageKey, "true");
  };

  const { name, avatarUrl } = joinRequests[0];

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
        count={joinRequests.length}
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

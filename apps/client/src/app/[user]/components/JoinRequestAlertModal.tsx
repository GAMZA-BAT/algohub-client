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
  const { data: joinRequests, isFetching } = useSuspenseQuery(
    useJoinRequestsQueryObject(groupId),
  );
  const sessionStorageKey = `joinRequestAlertShown-${groupId}`;
  const [hasBeenShown, setHasBeenShown] = useState(true);
  const prevJoinRequestIdsRef = useRef<number[]>([]);

  useEffect(() => {
    setHasBeenShown(!!sessionStorage.getItem(sessionStorageKey));
  }, [sessionStorageKey]);

  const shouldShowModal = joinRequests.length > 0 && !hasBeenShown;

  // 데이터가 refetch되고 값이 변경되었을 때만 세션 스토리지를 초기화
  useEffect(() => {
    if (!isFetching) {
      const currentRequestIds = joinRequests.map((req) => req.id);
      const prevRequestIds = prevJoinRequestIdsRef.current;

      if (
        JSON.stringify(currentRequestIds) !== JSON.stringify(prevRequestIds)
      ) {
        sessionStorage.removeItem(sessionStorageKey);
        setHasBeenShown(false);
      }
      prevJoinRequestIdsRef.current = currentRequestIds;
    }
  }, [isFetching, joinRequests, sessionStorageKey]);

  if (!shouldShowModal) return null;

  const { name, avatarUrl } = joinRequests[0];

  const handleApprove = () => {
    router.push(`/group/${groupId}/setting`);
    handleClose();
  };

  const handleClose = () => {
    setHasBeenShown(true);
    sessionStorage.setItem(sessionStorageKey, "true");
  };

  return (
    <GroupActionModal
      className={modalStyle}
      isOpen={shouldShowModal}
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

"use client";

import {
  deleteGroup,
  deleteGroupMember,
  getGroupMemberList,
} from "@/api/groups";
import { useMyNicknameQuery } from "@/app/[user]/query";
import { useToast } from "@/common/hook/useToast";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useMemberListQuery = (groupId: number) => {
  return useSuspenseQuery({
    queryKey: ["memberList", groupId],
    queryFn: () => getGroupMemberList(groupId),
  });
};

export const useDeleteMemberMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ memberId }: { memberId: number }) =>
      deleteGroupMember(memberId, groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memberList", groupId],
      });

      showToast("멤버가 정상적으로 삭제되었어요.", "success");
    },
    onError: () => {
      showToast("멤버가 정상적으로 삭제되지 않았어요.", "error");
    },
  });
};

export const useDeleteGroupMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { showToast } = useToast();
  const userNickname = useMyNicknameQuery();

  return useMutation({
    mutationFn: (groupId: number) => deleteGroup(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deleteGroup", groupId],
      });
      showToast("그룹이 정상적으로 삭제되었어요.", "success");
      setTimeout(() => {
        router.push(`/${userNickname}`);
      }, 1000);
    },
    onError: () => {
      showToast("그룹이 정상적으로 삭제되지 않았어요.", "error");
    },
  });
};

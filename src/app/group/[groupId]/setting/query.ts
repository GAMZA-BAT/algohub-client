"use client";

import {
  deleteGroup,
  deleteGroupMember,
  getGroupMemberList,
} from "@/app/api/groups";
import { editGroup } from "@/app/group/[groupId]/setting/action";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { HTTPError } from "ky";
import { useSession } from "next-auth/react";
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
  const userNickname = useSession().data?.user?.nickname;

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

export const usePatchGroupMutation = (groupId: number) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (formData: FormData) => editGroup(groupId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deleteGroup", groupId],
      });
      showToast("정상적으로 수정되었어요.", "success");
    },
    onError: (error: HTTPError) => {
      const { response } = error;

      if (response.status === HTTP_ERROR_STATUS.BAD_REQUEST) {
        showToast("참여하지 않은 그룹입니다.", "error");
      } else if (response.status === HTTP_ERROR_STATUS.FORBIDDEN) {
        showToast("그룹 정보 수정에 대한 권한이 없습니다.", "error");
      } else if (response.status === HTTP_ERROR_STATUS.NOT_FOUND) {
        showToast("존재하지 않는 그룹입니다.", "error");
      } else {
        showToast("그룹 수정에 실패하였습니다.", "error");
      }
    },
  });
};

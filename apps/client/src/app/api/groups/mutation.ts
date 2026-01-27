import {
  deleteGroup,
  deleteGroupMember,
  patchGroupInfo,
  patchGroupVisibility,
  patchMemberRole,
  postApproveJoinRequest,
  postGroupBookmark,
  postGroupNotice,
  postJoinRequest,
  postProblem,
  postRejectJoinRequest,
} from "@/app/api/groups/index";
import type {
  GroupListResponse,
  GroupSettingsContent,
  MemberRoleRequest,
} from "@/app/api/groups/type";
import type { NoticeRequest } from "@/app/api/notices/type";
import type { ProblemRequest } from "@/app/api/problems/type";
import { userQueryKey } from "@/app/api/users/query";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isBefore, startOfTomorrow } from "date-fns";
import type { HTTPError } from "ky";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import type { APIResponse } from "../type";
import { groupQueryKey } from "./query";

export const useDeleteMemberMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ memberId }: { memberId: number }) =>
      deleteGroupMember(memberId, groupId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: groupQueryKey.members(groupId),
      });
      showToast("멤버가 정상적으로 삭제되었어요.", "success");
    },
    onError: () => {
      showToast("멤버가 정상적으로 삭제되지 않았어요.", "error");
    },
  });
};

export const useDeleteGroupMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { showToast } = useToast();
  const userNickname = useSession().data?.user?.nickname;

  return useMutation({
    mutationFn: (groupId: number) => deleteGroup(groupId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.settings(),
        }),
        queryClient.invalidateQueries({
          queryKey: userQueryKey.myGroups(),
        }),
      ]);
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
    mutationFn: (formData: FormData) => patchGroupInfo(groupId, formData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: groupQueryKey.settings(),
      });
      showToast("정상적으로 수정되었어요.", "success");
    },
    onError: (error: HTTPError) => {
      const { response } = error;
      switch (response.status) {
        case HTTP_ERROR_STATUS.BAD_REQUEST:
          showToast("참여하지 않은 그룹입니다.", "error");
          break;
        case HTTP_ERROR_STATUS.FORBIDDEN:
          showToast("그룹 정보 수정에 대한 권한이 없습니다.", "error");
          break;
        case HTTP_ERROR_STATUS.NOT_FOUND:
          showToast("존재하지 않는 그룹입니다.", "error");
          break;
        default:
          showToast("그룹 수정에 실패하였습니다.", "error");
          break;
      }
    },
  });
};

export const usePatchMemberRoleMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (request: MemberRoleRequest) =>
      patchMemberRole(groupId, request),
    onSuccess: async (_data, variables) => {
      await queryClient.invalidateQueries({
        queryKey: groupQueryKey.members(groupId),
      });
      showToast("정상적으로 수정되었어요.", "success");
      if (variables.role === "OWNER") router.push(`/group/${groupId}`);
    },
    onError: (error: HTTPError) => {
      const { response } = error;
      switch (response.status) {
        case HTTP_ERROR_STATUS.BAD_REQUEST:
          showToast("존재하지 않는 회원입니다.", "error");
          break;
        case HTTP_ERROR_STATUS.FORBIDDEN:
          showToast("그룹 정보 수정에 대한 권한이 없습니다.", "error");
          break;
        case HTTP_ERROR_STATUS.NOT_FOUND:
          showToast("존재하지 않는 그룹입니다.", "error");
          break;
        default:
          showToast("그룹 수정에 실패하였습니다.", "error");
          break;
      }
    },
  });
};

export const useBookmarkGroupMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (groupId: number) => postGroupBookmark(groupId),
    onMutate: async (groupId: number) => {
      await queryClient.cancelQueries({ queryKey: groupQueryKey.settings() });
      const prevData = queryClient.getQueryData<GroupSettingsContent[]>(
        groupQueryKey.settings(),
      );

      queryClient.setQueryData(
        groupQueryKey.settings(),
        (oldData: GroupSettingsContent[] | undefined) => {
          if (!oldData) return [];
          return oldData.map((group) =>
            group.id === groupId
              ? { ...group, isBookmarked: !group.isBookmarked }
              : group,
          );
        },
      );

      return { prevData };
    },
    onError: (error: HTTPError, _newData, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(groupQueryKey.settings(), context.prevData);
      }

      if (!error.response) return;

      const { status } = error.response;

      switch (status) {
        case HTTP_ERROR_STATUS.NOT_FOUND: {
          showToast("존재하지 않은 그룹입니다.", "error");
          break;
        }
        case HTTP_ERROR_STATUS.BAD_REQUEST: {
          showToast("참여하지 않은 그룹입니다.", "error");
          break;
        }
        default: {
          showToast("정상적으로 수정되지 않았습니다.", "error");
        }
      }
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: groupQueryKey.settings() }),
        queryClient.invalidateQueries({ queryKey: userQueryKey.myGroups() }),
      ]);
      showToast("정상적으로 수정되었습니다.", "success");
    },
  });
};

export const useVisibilityMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ groupId, flag }: { groupId: number; flag: boolean }) =>
      patchGroupVisibility(groupId, flag),
    onMutate: async ({ groupId, flag }: { groupId: number; flag: boolean }) => {
      await queryClient.cancelQueries({ queryKey: groupQueryKey.settings() });

      const prevData = queryClient.getQueryData<GroupListResponse>(
        groupQueryKey.settings(),
      );

      queryClient.setQueryData(
        groupQueryKey.settings(),
        (oldData: GroupSettingsContent[] | undefined) => {
          if (!oldData) return [];
          return oldData.map((group) =>
            group.id === groupId ? { ...group, isVisible: flag } : group,
          );
        },
      );

      return { prevData };
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: groupQueryKey.settings(),
      });
    },
    onError: (error: HTTPError, _newData, context) => {
      queryClient.setQueryData(groupQueryKey.settings(), context?.prevData);
      if (!error.response) return;

      const { status } = error.response;

      switch (status) {
        case HTTP_ERROR_STATUS.FORBIDDEN: {
          showToast("참여하지 않은 그룹입니다.", "error");
          break;
        }
        case HTTP_ERROR_STATUS.NOT_FOUND: {
          showToast("참여하지 않은 그룹입니다.", "error");
          break;
        }
        default: {
          showToast("정상적으로 수정되지 않았습니다.", "error");
        }
      }
    },
  });
};

export const useGroupNoticeMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (requestData: NoticeRequest) =>
      postGroupNotice(groupId, requestData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: groupQueryKey.notices(groupId),
      });
      router.push(`/group/${groupId}/notice`);
    },
  });
};

export const usePostProblemMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: (body: ProblemRequest) => postProblem(groupId, body),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.inProgressProblems(groupId),
        }),
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.queuedProblems(groupId),
        }),
      ]);
      (
        document.querySelector(
          isBefore(variables.startDate, startOfTomorrow())
            ? "#tab-1"
            : "#tab-2",
        ) as HTMLLIElement
      )?.click();

      showToast("문제가 정상적으로 등록되었어요.", "success");
    },
    onError: (error: Error) => {
      showToast(error.message, "error");
    },
  });
};

export const useJoinRecommendMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (id: number) => postJoinRequest(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: userQueryKey.recommendGroups(),
      });
      showToast("해당 스터디에 가입을 요청했어요.", "success");
    },
    onError: async (e: HTTPError) => {
      const errorResponse = await e.response.json<APIResponse>();
      if ("error" in errorResponse) {
        showToast(errorResponse.error, "error");
      } else {
        showToast("스터디 가입 요청에 실패했어요.", "error");
      }
    },
  });
};

export const useApprovalRequestMutation = (requesterId: number) => {
  const queryClient = useQueryClient();
  const params = useParams();
  const { groupId } = params;
  const { showToast } = useToast();
  return useMutation({
    mutationFn: () => postApproveJoinRequest(requesterId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.joinRequests(+groupId),
        }),
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.members(+groupId),
        }),
      ]);
      showToast("가입을 승인했어요.", "success");
    },
    onError: () => {
      showToast("가입 승인에 실패했어요.", "error");
    },
  });
};

export const useRejectRequestMutation = (requesterId: number) => {
  const queryClient = useQueryClient();
  const params = useParams();
  const { groupId } = params;
  const { showToast } = useToast();
  return useMutation({
    mutationFn: () => postRejectJoinRequest(requesterId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: groupQueryKey.joinRequests(+groupId),
      });
      showToast("가입을 거절했어요.", "success");
    },
    onError: () => {
      showToast("가입 거절에 실패했어요.", "error");
    },
  });
};

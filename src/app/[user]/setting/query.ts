import { patchPasswordAction } from "@/app/[user]/setting/action";
import {
  getMyGroupSettings,
  patchGroupVisibility,
  postGroupBookmark,
} from "@/app/api/groups";
import type {
  GroupListResponse,
  GroupSettingsContent,
} from "@/app/api/groups/type";
import {
  getNotificationsSettings,
  patchNotificationsSettings,
} from "@/app/api/notifications";
import type { NotificationSettingContent } from "@/app/api/notifications/type";
import { deleteMe } from "@/app/api/users";
import type { PasswordRequest } from "@/app/api/users/type";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { HTTPError } from "ky";
import { signOut } from "next-auth/react";

export const useMyGroupSettingsQuery = () => {
  return useSuspenseQuery({
    queryKey: ["groupsSetting"],
    queryFn: getMyGroupSettings,
  });
};

export const useBookmarkGroupMutation = () => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (groupId: number) => postGroupBookmark(groupId),
    onMutate: async (groupId: number) => {
      await queryClient.cancelQueries({ queryKey: ["groupsSetting"] });
      const prevData = queryClient.getQueryData<GroupSettingsContent[]>([
        "groupsSetting",
      ]);

      queryClient.setQueryData(
        ["groupsSetting"],
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
        queryClient.setQueryData(["groupsSetting"], context.prevData);
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groupsSetting"] });
      queryClient.invalidateQueries({ queryKey: ["myGroups"] });
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
      await queryClient.cancelQueries({ queryKey: ["groupsSetting"] });

      const prevData = queryClient.getQueryData<GroupListResponse>([
        "groupsSetting",
      ]);

      queryClient.setQueryData(
        ["groupsSetting"],
        (oldData: GroupSettingsContent[] | undefined) => {
          if (!oldData) return [];

          return oldData.map((group) =>
            group.id === groupId ? { ...group, isVisible: flag } : group,
          );
        },
      );

      return { prevData };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["groupsSetting"] });
    },
    onError: (error: HTTPError, _newData, context) => {
      queryClient.setQueryData(["groupsSetting"], context?.prevData);

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

export const useNotificationSettingListQuery = () => {
  return useSuspenseQuery({
    queryKey: ["notificationsSetting"],
    queryFn: getNotificationsSettings,
  });
};

export const useNotificationSettingMutation = () => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: patchNotificationsSettings,
    onMutate: async (updatedSetting) => {
      await queryClient.cancelQueries({ queryKey: ["notificationsSetting"] });
      const prevData = queryClient.getQueryData<NotificationSettingContent[]>([
        "notificationsSetting",
      ]);
      queryClient.setQueryData(
        ["notificationsSetting"],
        (oldData: NotificationSettingContent[] | undefined) => {
          if (!oldData) return [];
          return oldData.map((item) =>
            item.groupId === updatedSetting.groupId
              ? { ...item, ...updatedSetting }
              : item,
          );
        },
      );

      return { prevData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notificationsSetting"],
      });
      showToast("정상적으로 수정되었습니다.", "success");
    },
    onError: (error: HTTPError, _newData, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(["groupsSetting"], context.prevData);
      }

      if (!error.response) return;

      const { status } = error.response;

      switch (status) {
        case HTTP_ERROR_STATUS.FORBIDDEN: {
          showToast("참여하지 않은 그룹입니다.", "error");
          break;
        }
        case HTTP_ERROR_STATUS.NOT_FOUND: {
          showToast("존재하지 않는 그룹입니다.", "error");
          break;
        }
        default: {
          showToast("정상적으로 수정되지 않았습니다.", "error");
        }
      }
    },
  });
};

export const useDeleteMeMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (password: string) => deleteMe(password),
    onSuccess: async () => {
      showToast("정상적으로 계정이 삭제되었습니다.", "success");
      await signOut({
        redirectTo: "/",
      });
    },
  });
};

export const usePatchPasswordMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ currentPassword, newPassword }: PasswordRequest) =>
      patchPasswordAction({ currentPassword, newPassword }),
    onSuccess: async () => {
      showToast("비밀번호가 변경되었습니다.", "success");
    },
    onError: (error: HTTPError) => {
      if (!error.response) return;

      const { status } = error.response;

      switch (status) {
        case HTTP_ERROR_STATUS.FORBIDDEN: {
          showToast("비밀번호가 일치하지 않습니다.", "error");
          break;
        }
        default: {
          showToast("비밀번호가 정상적으로 변경되지 않았습니다.", "error");
        }
      }
    },
  });
};

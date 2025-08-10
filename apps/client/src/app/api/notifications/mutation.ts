import { groupQueryKey } from "@/app/api/groups/query";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { HTTPError } from "ky";
import {
  deleteNotification,
  patchAllNotificationRead,
  patchNotificationRead,
  patchNotificationsSettings,
} from "./index";
import { notificationQueryKey } from "./query";
import type { NotificationItem, NotificationSettingContent } from "./type";

export const useNotificationSettingMutation = () => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (requestData: NotificationSettingContent) =>
      patchNotificationsSettings(requestData),
    onMutate: async (updatedSetting) => {
      await queryClient.cancelQueries({
        queryKey: notificationQueryKey.settings(),
      });
      const prevData = queryClient.getQueryData<NotificationSettingContent[]>(
        notificationQueryKey.settings(),
      );
      queryClient.setQueryData(
        notificationQueryKey.settings(),
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
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: notificationQueryKey.settings(),
      });
      showToast("정상적으로 수정되었습니다.", "success");
    },
    onError: (error: HTTPError, _newData, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(groupQueryKey.settings(), context.prevData);
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

export const useReadNotiItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => patchNotificationRead(id),
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({
        queryKey: notificationQueryKey.lists(),
      });
      const prev = queryClient.getQueryData<NotificationItem[]>(
        notificationQueryKey.lists(),
      );
      const newData = prev?.map((item) =>
        item.id === id ? { ...item, isRead: true } : item,
      );
      queryClient.setQueryData(notificationQueryKey.lists(), newData);
      return { prev };
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: notificationQueryKey.lists(),
      });
    },
    onError: (_err, _new, context) => {
      queryClient.setQueryData(notificationQueryKey.lists(), context?.prev);
    },
  });
};

export const useReadAllNotiMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchAllNotificationRead,
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: notificationQueryKey.lists(),
      });
      const prev = queryClient.getQueryData<NotificationItem[]>(
        notificationQueryKey.lists(),
      );
      const newData = prev?.map((item) => ({ ...item, isRead: true }));
      queryClient.setQueryData(notificationQueryKey.lists(), newData);
      return { prev };
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: notificationQueryKey.lists(),
      });
    },
    onError: (_err, _new, context) => {
      queryClient.setQueryData(notificationQueryKey.lists(), context?.prev);
    },
  });
};

export const useDeleteNotiMutation = () => {
  return useMutation({
    mutationFn: (id: number) => deleteNotification(id),
  });
};

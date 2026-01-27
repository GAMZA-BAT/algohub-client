import { groupQueryKey } from "@/app/api/groups/query";
import { useToast } from "@/common/hook/useToast";
import type { NotificationType } from "@/shared/component/Header/Notification";
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

export const useReadNotiItemMutation = (notificationType: NotificationType) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => patchNotificationRead(id),
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({
        queryKey: notificationQueryKey.typeList(notificationType),
      });
      const prev = queryClient.getQueryData<NotificationItem[]>(
        notificationQueryKey.typeList(notificationType),
      );
      const newData = prev?.map((item) =>
        item.id === id ? { ...item, isRead: true } : item,
      );
      queryClient.setQueryData(
        notificationQueryKey.typeList(notificationType),
        newData,
      );
      return { prev };
    },
    onSuccess: (_data, id) => {
      queryClient.setQueriesData<NotificationItem[]>(
        { queryKey: [...notificationQueryKey.all(), "list"] },
        (oldData) => {
          if (!oldData) return [];
          return oldData.map((item) =>
            item.id === id ? { ...item, isRead: true } : item,
          );
        },
      );
    },
    onError: (_err, _new, context) => {
      queryClient.setQueryData(
        notificationQueryKey.typeList(notificationType),
        context?.prev,
      );
    },
  });
};

export const useDeleteNotiMutation = (notificationType: NotificationType) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteNotification(id),
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({
        queryKey: notificationQueryKey.typeList(notificationType),
      });
      const prev = queryClient.getQueryData<NotificationItem[]>(
        notificationQueryKey.typeList(notificationType),
      );
      const newData = prev?.filter((item) => item.id !== id);
      queryClient.setQueryData(
        notificationQueryKey.typeList(notificationType),
        newData,
      );
      return { prev, id };
    },
    onSuccess: (_data, id) => {
      // 모든 알림 리스트 쿼리에서 해당 알림 제거
      queryClient.setQueriesData<NotificationItem[]>(
        { queryKey: [...notificationQueryKey.all(), "list"] },
        (oldData) => {
          if (!oldData) return [];
          return oldData.filter((item) => item.id !== id);
        },
      );
    },
    onError: (_err, _new, context) => {
      if (context?.prev) {
        queryClient.setQueryData(
          notificationQueryKey.typeList(notificationType),
          context.prev,
        );
      }
    },
  });
};

export const useReadAllNotiMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchAllNotificationRead,
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: notificationQueryKey.list(),
      });

      // 모든 매칭되는 쿼리의 이전 데이터 저장
      const previousQueries = queryClient.getQueriesData<NotificationItem[]>({
        queryKey: notificationQueryKey.list(),
      });

      // 모든 쿼리를 optimistic update
      queryClient.setQueriesData<NotificationItem[]>(
        { queryKey: notificationQueryKey.list() },
        (oldData) => {
          if (!oldData) return [];
          return oldData.map((item) => ({ ...item, isRead: true }));
        },
      );

      return { previousQueries };
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: notificationQueryKey.list(),
      });
    },
    onError: (_err, _new, context) => {
      // 실패 시 모든 쿼리를 이전 데이터로 롤백
      if (context?.previousQueries) {
        for (const [queryKey, data] of context.previousQueries) {
          queryClient.setQueryData(queryKey, data);
        }
      }
    },
  });
};

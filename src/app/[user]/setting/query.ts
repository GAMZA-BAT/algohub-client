import { getMyGroupSettings, patchGroupVisibility } from "@/app/api/groups";
import {
  getNotificationsSettings,
  patchNotificationsSettings,
} from "@/app/api/notifications";
import type { NotificationSettingContent } from "@/app/api/notifications/type";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { HTTPError } from "ky";

export const useMyGroupSettingsQuery = () => {
  return useSuspenseQuery({
    queryKey: ["groupsSetting"],
    queryFn: getMyGroupSettings,
  });
};

export const useVisibilityMutation = () => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ groupId, flag }: { groupId: number; flag: boolean }) =>
      patchGroupVisibility(groupId, flag),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groupsSetting"],
      });
    },
    onError: (error: HTTPError) => {
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
      const previousData = queryClient.getQueryData<
        NotificationSettingContent[]
      >(["notificationsSetting"]);
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

      return { previousData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notificationsSetting"],
      });
      showToast("정상적으로 수정되었습니다.", "success");
    },
    onError: (error: HTTPError) => {
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

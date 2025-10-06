import type { NotificationType } from "@/shared/component/Header/Notification";
import { queryOptions } from "@tanstack/react-query";
import { getNotificationList, getNotificationsSettings } from "./index";

export const notificationQueryKey = {
  all: () => ["notifications"] as const,
  settings: () => [...notificationQueryKey.all(), "settings"] as const,
  lists: (notificationType: NotificationType) => [...notificationQueryKey.all(), "list", notificationType] as const,
};

export const useNotificationSettingListQueryObject = () =>
  queryOptions({
    queryKey: notificationQueryKey.settings(),
    queryFn: () => getNotificationsSettings(),
  });

export const useNotificationsQueryObject = (notificationType: NotificationType) =>
  queryOptions({
    queryKey: notificationQueryKey.lists(notificationType),
    queryFn: () => getNotificationList({ notificationType }),
    staleTime: 0,
  });

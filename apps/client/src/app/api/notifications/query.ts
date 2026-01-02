import type { NotificationType } from "@/shared/component/Header/Notification";
import { queryOptions } from "@tanstack/react-query";
import { getNotificationList, getNotificationsSettings } from "./index";

export const notificationQueryKey = {
  all: () => ["notifications"] as const,
  settings: () => [...notificationQueryKey.all(), "settings"] as const,
  list: () => [...notificationQueryKey.all(), "list"] as const,
  typeList: (notificationType?: NotificationType) =>
    [...notificationQueryKey.list(), notificationType] as const,
};

export const useNotificationSettingListQueryObject = () =>
  queryOptions({
    queryKey: notificationQueryKey.settings(),
    queryFn: () => getNotificationsSettings(),
  });

export const useNotificationsQueryObject = (
  notificationType: NotificationType,
) =>
  queryOptions({
    queryKey: notificationQueryKey.typeList(notificationType),
    queryFn: () => getNotificationList({ notificationType }),
  });

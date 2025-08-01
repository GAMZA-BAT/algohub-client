import { queryOptions } from "@tanstack/react-query";
import { getNotificationList, getNotificationsSettings } from "./index";

export const notificationQueryKey = {
  all: () => ["notifications"] as const,
  settings: () => [...notificationQueryKey.all(), "settings"] as const,
  lists: () => [...notificationQueryKey.all(), "list"] as const,
};

export const useNotificationSettingListQueryObject = () =>
  queryOptions({
    queryKey: notificationQueryKey.settings(),
    queryFn: () => getNotificationsSettings(),
  });

export const useNotificationsQueryObject = () =>
  queryOptions({
    queryKey: notificationQueryKey.lists(),
    queryFn: () => getNotificationList(),
    staleTime: 0,
  });

import { kyInstance } from "@/app/api";
import type {
  NotificationItem,
  NotificationSettingContent,
} from "@/app/api/notifications/type";

export const getNotificationList = async () => {
  const response = await kyInstance
    .get<NotificationItem[]>("api/notifications")
    .json();

  return response;
};

export const patchNotificationRead = () => {
  kyInstance.patch("api/notifications");
};

export const getNotificationsSettings = async () => {
  const response = await kyInstance
    .get<NotificationSettingContent[]>("api/notifications/settings")
    .json();

  return response;
};

export const patchNotificationsSettings = async (
  requestData: NotificationSettingContent,
) => {
  const response = await kyInstance.patch<NotificationSettingContent>(
    "api/notifications/settings",
    {
      json: requestData,
    },
  );

  return response;
};

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

export const patchAllNotificationRead = () => {
  const response = kyInstance.patch("api/notifications").json();

  return response;
};

export const patchNotificationRead = (notificationId: number) => {
  const response = kyInstance
    .patch(`api/notifications/${notificationId}`)
    .json();

  return response;
};

export const deleteNotification = async (notificationId: number) => {
  const response = await kyInstance
    .delete(`api/notifications/${notificationId}`)
    .json();

  return response;
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

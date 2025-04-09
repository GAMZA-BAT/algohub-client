import { kyJsonWithTokenInstance } from "@/app/api";
import { logoutAction } from "@/app/api/auth/actions";
import type {
  NotificationItem,
  NotificationSettingContent,
} from "@/app/api/notifications/type";

export const getNotificationList = async () => {
  try {
    const response = await kyJsonWithTokenInstance
      .get<NotificationItem[]>("api/notifications")
      .json();

    return response;
  } catch (error) {
    await logoutAction();
    throw error;
  }
};

export const patchAllNotificationRead = () => {
  const response = kyJsonWithTokenInstance.patch("api/notifications").json();

  return response;
};

export const patchNotificationRead = (notificationId: number) => {
  const response = kyJsonWithTokenInstance
    .patch(`api/notifications/${notificationId}`)
    .json();

  return response;
};

export const deleteNotification = async (notificationId: number) => {
  const response = await kyJsonWithTokenInstance
    .delete(`api/notifications/${notificationId}`)
    .json();

  return response;
};

export const getNotificationsSettings = async () => {
  const response = await kyJsonWithTokenInstance
    .get<NotificationSettingContent[]>("api/notifications/settings")
    .json();

  return response;
};

export const patchNotificationsSettings = async (
  requestData: NotificationSettingContent,
) => {
  const response =
    await kyJsonWithTokenInstance.patch<NotificationSettingContent>(
      "api/notifications/settings",
      {
        json: requestData,
      },
    );

  return response;
};

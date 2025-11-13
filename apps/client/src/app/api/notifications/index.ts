import { kyJsonWithTokenInstance } from "@/app/api";
import type {
  NotificationItem,
  NotificationSettingContent,
} from "@/app/api/notifications/type";
import { NotificationType } from "@/shared/component/Header/Notification";

export const getNotificationList = async ({
  notificationType,
}: { notificationType: NotificationType }) => {
  const requestOptions =
    notificationType === NotificationType.ALL
      ? {}
      : { searchParams: { type: notificationType } };

  const response = await kyJsonWithTokenInstance
    .get<NotificationItem[]>("api/notifications", requestOptions)
    .json();

  return response;
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

import { kyJsonWithTokenInstance } from "@/app/api";
import type {
  NotificationItem,
  NotificationSettingContent,
} from "@/app/api/notifications/type";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";
import { signOut } from "next-auth/react";

export const getNotificationList = async () => {
  try {
    const response = await kyJsonWithTokenInstance
      .get<NotificationItem[]>("api/notifications")
      .json();

    return response;
  } catch (error) {
    if (
      error instanceof HTTPError &&
      error.response.status === HTTP_ERROR_STATUS.BAD_REQUEST
    ) {
      await signOut();
    } else {
      throw error;
    }
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

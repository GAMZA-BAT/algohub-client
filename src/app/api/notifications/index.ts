import { kyInstance } from "@/app/api";
import type { NotificationItem } from "@/app/api/notifications/type";

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

import { kyInstance } from "@/app/api";
import type { NotificationItem } from "@/app/api/notifications/type";

export const getNotificationList = async () => {
  const response = await kyInstance
    .get<NotificationItem[]>("api/notifications")
    .json();

  return response;
};

export const patchNotificationRead = () => {
  kyInstance.patch("api/notifications");
};

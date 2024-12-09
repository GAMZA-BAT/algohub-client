import { kyInstance } from "@/api";
import type {
  NotificationItem,
  NotificationSettingContent,
} from "@/api/notifications/type";

export const getNotificationList = async () => {
  const response = await kyInstance
    .get<NotificationItem[]>("api/notifications")
    .json();

  return response;
};

export const patchNotificationRead = () => {
  kyInstance.patch("api/notifications");
};

export const getNotificationSettingList = async () => {
  const response = await kyInstance
    .get<NotificationSettingContent[]>("api/notifications/settings")
    .json();

  return response;
};

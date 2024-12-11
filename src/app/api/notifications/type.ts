export interface NotificationItem {
  id: number;
  groupName: string;
  groupImage: string;
  message: string;
  subContent: string;
  createdAt: string;
  isRead: boolean;
}

export type NotificationResponse = NotificationItem[];

export interface NotificationSubscribeResponse {
  timeout: number;
}

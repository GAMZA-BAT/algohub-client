export interface NotificationItem {
  id: number;
  groupId: number;
  problemId: number | null;
  solutionId: number | null;
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

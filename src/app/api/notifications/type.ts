export interface NotificationItem {
  id: number;
  groupId: number | null;
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

export type NotificationSettingContent = {
  groupId: number;
  groupName: string;
  allNotifications: boolean;
  newProblem: boolean;
  newSolution: boolean;
  newComment: boolean;
  newMember: boolean;
  deadlineReached: boolean;
};

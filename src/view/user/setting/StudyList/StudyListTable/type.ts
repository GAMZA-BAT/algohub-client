import type { GroupListItem, GroupStatus } from "@/api/user/type";

export type StudyListType = {
  status: GroupStatus;
  startDate: Date;
  endDate: Date;
} & Omit<
  GroupListItem,
  | "introduction"
  | "groupImage"
  | "ownerNickname"
  | "id"
  | "startDate"
  | "endDate"
>;

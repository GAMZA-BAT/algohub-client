import type { GroupListItem, GroupStatus } from "@/api/group/type";

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

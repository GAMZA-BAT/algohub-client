import type { GroupListItem, GroupStatus } from "@/api/groups/type";

export type StudyListType = {
  status: GroupStatus;
  startDate: Date;
  endDate: Date;
} & Omit<
  GroupListItem,
  "introduction" | "groupImage" | "ownerNickname" | "startDate" | "endDate"
>;

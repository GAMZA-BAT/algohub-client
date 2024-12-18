import type { GroupResponse, GroupStatus } from "@/app/api/groups/type";

export type StudyListType = {
  status: GroupStatus;
  startDate: Date;
  endDate: Date;
} & Omit<
  GroupResponse,
  "introduction" | "groupImage" | "ownerNickname" | "startDate" | "endDate"
>;

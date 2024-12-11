import type { GroupResponse, GroupStatus } from "@/api/groups/type";

export type StudyListType = {
  status: GroupStatus;
  startDate: string;
  endDate: string;
} & Omit<GroupResponse, "ownerNickname" | "startDate" | "endDate">;

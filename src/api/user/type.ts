import type { GroupInfoResponse } from "@/api/group/type";

export type UserResponse = {
  email?: string;
  nickname?: string;
  profileImage?: string;
  bjNickname?: string;
  desc?: string;
};

export type GroupStatus = "bookmarked" | "done" | "inProgress" | "queued";
export type GroupStatusLabel = "Favorites" | "Queued" | "Progress" | "Done";

export type GroupListItem = GroupInfoResponse & { isBookmarked: boolean };
export type GroupListResponse = {
  [key in GroupStatus]: GroupListItem[];
};

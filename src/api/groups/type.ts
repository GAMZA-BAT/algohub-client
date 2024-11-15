export type GroupCodeResponse = {
  inviteCode: string;
};

export type GroupRoleRequest = {
  groupId: number;
  memberId: number;
  role: string;
};

export type GroupResponse = {
  id: number;
  name: string;
  groupImage: string;
  startDate: string;
  endDate: string;
  introduction: string;
  isOwner?: boolean;
  ownerNickname: string;
};

export type RankingResponse = {
  userNickname: string;
  profileImage: string;
  rank: number;
  solvedCount: number;
};

export type GroupStatus = "bookmarked" | "done" | "inProgress" | "queued";

export type GroupListItem = GroupResponse & { isBookmarked: boolean };
export type GroupListResponse = {
  [key in GroupStatus]: GroupListItem[];
};

export type DeleteGroupMemberRequest = {
  userId: number;
  groupId: number;
};

export type MemberResponse = {
  nickname: string;
  joinDate: string;
  achivement: string;
  role: string;
  profileImage: string;
  memberId: number;
};

export type MemberListResponse = MemberResponse[];

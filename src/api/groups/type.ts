export type GroupCodeResponse = {
  inviteCode: string;
};
export type GroupJoinResponse = {
  src: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  owner: string;
};

export type GroupRoleRequest = {
  groupId: number;
  memberId: number;
  role: string;
};

export type GroupByCodeResponse = {
  id: number;
  name: string;
  groupImage: string;
  startDate: string;
  endDate: string;
  introduction: string;
};
export interface GroupResponse extends GroupByCodeResponse {
  isOwner?: boolean;
  ownerNickname?: string;
}

export type RankingResponse = {
  userNickname: string;
  profileImage: string;
  rank: number;
  solvedCount: number;
  rankDiff: string;
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
  achievement: string;
  role: string;
  profileImage: string;
  memberId: number;
};

export type MemberListResponse = MemberResponse[];

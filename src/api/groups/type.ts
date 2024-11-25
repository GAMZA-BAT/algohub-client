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
  startDate: string;
  endDate: string;
  introduction: string;
  groupImage: string | null;
  isOwner?: boolean;
  ownerNickname: string;
  isBookmarked?: boolean;
  isVisible?: boolean;
};

export type GroupRequest = {
  profileImage: FormData;
  request: FormData;
};

export type RankingResponse = {
  userNickname: string;
  profileImage: string;
  rank: number;
  solvedCount: number;
  rankDiff: string;
};

export type GroupStatus = "bookmarked" | "done" | "inProgress" | "queued";

export type GroupListResponse = {
  [key in GroupStatus]: GroupResponse[];
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

export type Role = "OWNER" | "ADMIN" | "PARTICIPANT";

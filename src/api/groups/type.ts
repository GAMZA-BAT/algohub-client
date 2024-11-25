export type GroupCodeResponse = {
  inviteCode: string;
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
  ownerNickname: string;
};

export interface GroupResponse extends GroupByCodeResponse {
  isOwner?: boolean;
}

export type GroupRequest = {
  profileImage: FormData;
  request: FormData;
};

export type RankingItem = {
  userNickname: string;
  profileImage: string;
  rank: number;
  solvedCount: number;
  rankDiff: string;
};

export type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type RankingResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  size: number;
  content: RankingItem[];
  number: number;
  sort: Sort;
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  empty: boolean;
};

export type GroupStatus = "bookmarked" | "done" | "inProgress" | "queued";

export type GroupListItem = GroupResponse & {
  isBookmarked: boolean;
  isVisible: boolean;
};
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

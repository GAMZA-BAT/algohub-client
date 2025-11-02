import type { PaginationResponse } from "@/app/api/type";
import type { UserResponse } from "../users/type";

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
  role: Role;
  ownerNickname: string;
  isBookmarked?: boolean;
  isVisible?: boolean;
};

export type GroupRequest = {
  profileImage: FormData;
  request: FormData;
};

export type RankingResponse = PaginationResponse & {
  content: RankingContent[];
};

export type RankingContent = {
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

export type MemberRoleRequest = {
  memberId: number;
  role: Role;
};

export type GroupSettingsContent = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  role: Role;
  isBookmarked: boolean;
  isVisible: boolean;
  status: GroupStatus;
};

export type SearchRequest = {
  searchPattern: string;
  page?: number;
  size?: number;
};

export type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type Study = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  introduction: string;
  groupImage: string | null;
  role: Role;
  ownerNickname: string | null;
};

export type SearchStudyResponse = {
  totalElements: number;
  totalPages: number;
  size: number;
  content: Study[];
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: Pageable;
  empty: boolean;
};

export const JOIN_REQUEST_STATUS = {
  PENDING: "pending",
  APPROVE: "approve",
  CANCEL: "cancel",
  REJECT: "reject",
} as const;

export type JoinRequestStatus =
  (typeof JOIN_REQUEST_STATUS)[keyof typeof JOIN_REQUEST_STATUS];

export type JoinRequestItem = {
  id: number;
  group: JoinRequestGroup;
  requester: UserResponse & {
    id: number;
    deletedAt: string;
    role: "USER" | "ADMIN";
  };
  status: keyof typeof JOIN_REQUEST_STATUS;
};

export type UpdateJoinRequestPayload = {
  status:
    | typeof JOIN_REQUEST_STATUS.APPROVE
    | typeof JOIN_REQUEST_STATUS.REJECT;
};

export type JoinRequestGroup = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  introduction: string;
  groupImage: string;
  groupCode: string;
  deletedAt: string;
};

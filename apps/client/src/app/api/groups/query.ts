import type { SearchRequest } from "@/app/api/groups/type";
import type { MySolutionRequest } from "@/app/api/type";
import { queryOptions } from "@tanstack/react-query";
import type { NoticeListRequest } from "../notices/type";
import {
  getExpiredMyGroupSolutions,
  getGroupMemberList,
  getGroupNotices,
  getGroupsByCode,
  getInProgressMyGroupSolutions,
  getJoinRequestsByGroup,
  getMyGroupSettings,
  getRoleByGroupId,
  getSearchStudy,
} from "./index";

export const groupQueryKey = {
  all: () => ["groups"] as const,
  detail: (groupId: number) => [...groupQueryKey.all(), groupId] as const,
  role: (groupId: number) =>
    [...groupQueryKey.detail(groupId), "role"] as const,
  byCode: (code: string) => [...groupQueryKey.all(), "code", code] as const,
  members: (groupId: number) =>
    [...groupQueryKey.detail(groupId), "members"] as const,
  settings: () => [...groupQueryKey.all(), "settings"] as const,
  mySolutions: (groupId: number) =>
    [...groupQueryKey.detail(groupId), "my-solutions"] as const,
  inProgressSolutions: (params: MySolutionRequest) =>
    [
      ...groupQueryKey.mySolutions(params.groupId!),
      "in-progress",
      params,
    ] as const,
  expiredSolutions: (params: MySolutionRequest) =>
    [...groupQueryKey.mySolutions(params.groupId!), "expired", params] as const,
  notices: (groupId: number) =>
    [...groupQueryKey.detail(groupId), "notices"] as const,
  noticeList: ({ groupId, page = 0 }: NoticeListRequest) => [
    ...groupQueryKey.notices(groupId),
    { page },
  ],
  problems: (groupId: number) =>
    [...groupQueryKey.detail(groupId), "problems"] as const,
  inProgressProblems: (groupId: number) => [
    ...groupQueryKey.problems(groupId),
    "in-progress",
  ],
  queuedProblems: (groupId: number) => [
    ...groupQueryKey.problems(groupId),
    "queued",
  ],
  search: (params: SearchRequest) => [...groupQueryKey.all(), "search", params],
  joinRequests: (groupId: number) =>
    [...groupQueryKey.detail(groupId), "join-requests"] as const,
};

export const useGroupRoleQueryObject = (groupId: number) =>
  queryOptions({
    queryKey: groupQueryKey.role(groupId),
    queryFn: () => getRoleByGroupId(groupId),
    staleTime: 0,
  });

export const useGroupByCodeQueryObject = (code: string) =>
  queryOptions({
    queryKey: groupQueryKey.byCode(code),
    queryFn: () => getGroupsByCode(code),
  });

export const useMemberListQueryObject = (groupId: number) =>
  queryOptions({
    queryKey: groupQueryKey.members(groupId),
    queryFn: () => getGroupMemberList(groupId),
  });

export const useMyGroupSettingsQueryObject = () =>
  queryOptions({
    queryKey: groupQueryKey.settings(),
    queryFn: () => getMyGroupSettings(),
  });

export const useInProgressMyGroupSolutionsQueryObject = (
  params: MySolutionRequest,
) =>
  queryOptions({
    queryKey: groupQueryKey.inProgressSolutions(params),
    queryFn: () => getInProgressMyGroupSolutions({ ...params, size: 3 }),
  });

export const useExpiredMyGroupSolutionsQueryObject = (
  params: MySolutionRequest,
) =>
  queryOptions({
    queryKey: groupQueryKey.expiredSolutions(params),
    queryFn: () => getExpiredMyGroupSolutions({ ...params, size: 3 }),
  });

export const useGroupNoticesQueryObject = ({
  groupId,
  page = 0,
}: NoticeListRequest) =>
  queryOptions({
    queryKey: groupQueryKey.noticeList({ groupId, page }),
    queryFn: () => getGroupNotices({ groupId, page }),
    staleTime: 0,
  });

export const useSearchStudyQueryObject = ({
  searchPattern,
  page,
  size,
}: SearchRequest) =>
  queryOptions({
    queryKey: groupQueryKey.search({ searchPattern, page, size }),
    queryFn: () => getSearchStudy({ searchPattern, page, size }),
  });

export const useJoinRequestsQueryObject = (groupId: number) =>
  queryOptions({
    queryKey: groupQueryKey.joinRequests(groupId),
    queryFn: () => getJoinRequestsByGroup(groupId),
    staleTime: 30 * 1000,
  });

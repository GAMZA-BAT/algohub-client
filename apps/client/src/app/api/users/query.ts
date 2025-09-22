import type { MySolutionRequest } from "@/app/api/type";
import {
  getGroupsByUsers,
  getMySolutions,
  getUserGroupList,
} from "@/app/api/users";
import { queryOptions } from "@tanstack/react-query";

export const userQueryKey = {
  all: () => ["users"] as const,
  mySolutions: () => [...userQueryKey.all(), "my-solutions"] as const,
  inProgressSolutions: (params: MySolutionRequest) => [
    ...userQueryKey.mySolutions(),
    "in-progress",
    params,
  ],
  expiredSolutions: (params: MySolutionRequest) => [
    ...userQueryKey.mySolutions(),
    "expired",
    params,
  ],
  userGroups: (user: string) => [...userQueryKey.all(), "groups", user],
  myGroups: () => [...userQueryKey.all(), "me", "groups"] as const,
};

export const useInProgressMySolutionsQueryObject = (
  params: MySolutionRequest,
) =>
  queryOptions({
    queryKey: userQueryKey.inProgressSolutions(params),
    queryFn: () =>
      getMySolutions({ ...params, status: "IN_PROGRESS", size: 3 }),
    staleTime: 0,
  });

export const useExpiredMySolutionsQueryObject = (params: MySolutionRequest) =>
  queryOptions({
    queryKey: userQueryKey.expiredSolutions(params),
    queryFn: () => getMySolutions({ ...params, status: "EXPIRED", size: 3 }),
    staleTime: 0,
  });

export const useUserGroupsQueryObject = (user: string) =>
  queryOptions({
    queryKey: userQueryKey.userGroups(user),
    queryFn: () => getGroupsByUsers(user),
  });

export const useMyGroupsQueryObject = () =>
  queryOptions({
    queryKey: userQueryKey.myGroups(),
    queryFn: () => getUserGroupList(),
  });

import type { MySolutionRequest } from "@/app/api/type";

import {
  getGroupsByUsers,
  getMyFeeds,
  getMySolutions,
  getRecommendStudy,
  getUserGroupList,
} from "@/app/api/users";

import { queryOptions } from "@tanstack/react-query";

export const userQueryKey = {
  all: () => ["users"] as const,
  mySolutions: (params: MySolutionRequest) => [
    ...userQueryKey.all(),
    "my-solutions",
    params,
  ],
  userGroups: (user: string) => [...userQueryKey.all(), "groups", user],
  myGroups: () => [...userQueryKey.all(), "me", "groups"] as const,
  recommendGroups: () => [...userQueryKey.all(), "recommend-groups"] as const,
  myFeeds: () => [...userQueryKey.all(), "me", "feeds"],
};

export const useInProgressMySolutionsQueryObject = (
  params?: MySolutionRequest,
) => ({
  queryKey: userQueryKey.mySolutions({ ...params, status: "IN_PROGRESS" }),
  queryFn: (page: number) =>
    getMySolutions({ ...params, page, status: "IN_PROGRESS", size: 3 }),
  staleTime: 0,
});

export const useExpiredMySolutionsQueryObject = (
  params?: MySolutionRequest,
) => ({
  queryKey: userQueryKey.mySolutions({ ...params, status: "EXPIRED" }),
  queryFn: (page: number) =>
    getMySolutions({ ...params, page, status: "EXPIRED", size: 3 }),
  staleTime: 0,
});

export const useIncorrectMySolutionsQueryObject = (
  params?: MySolutionRequest,
) =>
  queryOptions({
    queryKey: userQueryKey.mySolutions({ ...params, isIncorrect: true }),
    queryFn: async () => {
      const response = await getMySolutions({
        ...params,
        isIncorrect: true,
        size: 1,
      });
      return getMySolutions({
        ...params,
        isIncorrect: true,
        size: response.totalElements,
      });
    },
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

export const useRecommendStudyQueryObject = () =>
  queryOptions({
    queryKey: userQueryKey.recommendGroups(),
    queryFn: () => getRecommendStudy(),
  });

export const useMyFeedsQueryObject = () =>
  queryOptions({
    queryKey: userQueryKey.myFeeds(),
    queryFn: () => getMyFeeds(),
  });

import {
  type FetchQueryOptions,
  QueryClient,
  type QueryKey,
} from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = cache(() => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
});

export const prefetchQuery = async <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(options);
  return queryClient;
};

export const prefetchQueries = async <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queries: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>[],
) => {
  const queryClient = getQueryClient();

  await Promise.all(
    queries.map((options) => queryClient.prefetchQuery(options)),
  );

  return queryClient;
};

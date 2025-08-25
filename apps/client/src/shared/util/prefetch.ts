import {
  type DehydratedState,
  type FetchQueryOptions,
  QueryClient,
  type QueryKey,
  dehydrate,
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

export async function prefetchQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  returnClient: true,
): Promise<QueryClient>;
export async function prefetchQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  returnClient?: false,
): Promise<DehydratedState>;
export async function prefetchQuery(
  options: FetchQueryOptions<unknown, unknown, unknown, QueryKey>,
  returnClient?: boolean,
): Promise<QueryClient | DehydratedState> {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(options);
  if (returnClient) {
    return queryClient;
  }
  return dehydrate(queryClient);
}

export async function prefetchQueries<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queries: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>[],
  returnClient: true,
): Promise<QueryClient>;
export async function prefetchQueries<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queries: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>[],
  returnClient?: false,
): Promise<DehydratedState>;
export async function prefetchQueries(
  queries: FetchQueryOptions<unknown, unknown, unknown, QueryKey>[],
  returnClient?: boolean,
): Promise<QueryClient | DehydratedState> {
  const queryClient = getQueryClient();
  await Promise.all(
    queries.map((options) => queryClient.prefetchQuery(options)),
  );
  if (returnClient) {
    return queryClient;
  }
  return dehydrate(queryClient);
}

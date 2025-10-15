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

/**
 * @param options - prefetchQuery에 전달할 옵션 객체
 * @param returnClient - true일 경우 QueryClient 인스턴스를, false(기본값)일 경우 DehydratedState를 반환
 */
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

/**
 * @param options - prefetchQuery에 전달할 옵션 객체의 배열
 * @param returnClient - true일 경우 QueryClient 인스턴스를, false(기본값)일 경우 DehydratedState를 반환
 */
export async function prefetchQueries<
  T extends FetchQueryOptions
>(
  options: readonly T[],
  returnClient: true,
): Promise<QueryClient>;
export async function prefetchQueries<
  T extends FetchQueryOptions
>(
  options: readonly T[],
  returnClient?: false,
): Promise<DehydratedState>;
export async function prefetchQueries<
  T extends FetchQueryOptions
>(
  options: readonly T[],
  returnClient?: boolean,
): Promise<QueryClient | DehydratedState> {
  const queryClient = getQueryClient();

  await Promise.all(
    options.map((option) => queryClient.prefetchQuery(option)),
  );

  if (returnClient) {
    return queryClient;
  }
  return dehydrate(queryClient);
}
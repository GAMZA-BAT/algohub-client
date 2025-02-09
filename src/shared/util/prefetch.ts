import {
  QueryClient,
  type QueryFunction,
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

export const prefetchQuery = async ({
  queryKey,
  queryFn,
}: { queryKey: (string | number)[]; queryFn: QueryFunction }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return dehydrate(queryClient);
};

export const prefetchQueries = async (
  queries: { queryKey: (string | number)[]; queryFn: QueryFunction }[],
) => {
  const queryClient = getQueryClient();

  await Promise.all(
    queries.map(({ queryKey, queryFn }) =>
      queryClient.prefetchQuery({ queryKey, queryFn }),
    ),
  );

  return dehydrate(queryClient);
};

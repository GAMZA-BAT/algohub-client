import { QueryClient, type QueryFunction, type SkipToken, dehydrate } from "@tanstack/react-query";
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

export const prefetchQuery = async ({ queryKey, queryFn }: {queryKey: (string|number)[], queryFn: QueryFunction | SkipToken;}) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn
  });

  return dehydrate(queryClient);
};

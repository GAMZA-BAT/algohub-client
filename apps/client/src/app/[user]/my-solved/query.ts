import type { MySolutionRequest } from "@/app/api/type";
import {
  getExpiredMySolutions,
  getInProgressMySolutions,
} from "@/app/api/users";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useInProgressMySolutionsQuery = ({
  problemNumber,
  language,
  result,
  page,
}: MySolutionRequest) => {
  const { data } = useSuspenseQuery({
    queryKey: ["inProgressMySolutions", page],
    queryFn: () =>
      getInProgressMySolutions({
        problemNumber,
        language,
        result,
        page,
        size: 3,
      }),
    staleTime: 0,
  });

  return { content: data.content, totalPages: data.totalPages };
};

export const useExpiredMySolutionsQuery = ({
  problemNumber,
  language,
  result,
  page,
}: MySolutionRequest) => {
  const { data } = useSuspenseQuery({
    queryKey: ["expiredMySolutions", page],
    queryFn: () =>
      getExpiredMySolutions({
        problemNumber,
        language,
        result,
        page,
        size: 3,
      }),
    staleTime: 0,
  });

  return { content: data.content, totalPages: data.totalPages };
};

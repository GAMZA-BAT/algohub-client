import type { MySolutionRequest } from "@/api/type";
import { getInProgressMySolutions } from "@/api/users";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useInProgressMySolutionsQuery = ({
  problemNumber,
  language,
  result,
  page,
}: MySolutionRequest) => {
  const { data } = useSuspenseQuery({
    queryKey: ["inProgressMySolutions"],
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
    queryKey: ["expiredMySolutions"],
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

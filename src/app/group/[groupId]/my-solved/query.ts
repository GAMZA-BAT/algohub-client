import {
  getExpiredMyGroupSolutions,
  getInProgressMyGroupSolutions,
} from "@/app/api/solutions";
import type { MySolutionRequest } from "@/app/api/type";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useInProgressMyGroupSolutionsQuery = ({
  problemNumber,
  language,
  result,
  page,
}: MySolutionRequest) => {
  const { data } = useSuspenseQuery({
    queryKey: ["inProgressMySolutions", page],
    queryFn: () =>
      getInProgressMyGroupSolutions({
        problemNumber,
        language,
        result,
        page,
        size: 3,
      }),
  });

  return { content: data.content, totalPages: data.totalPages };
};

export const useExpiredMyGroupSolutionsQuery = ({
  problemNumber,
  language,
  result,
  page,
}: MySolutionRequest) => {
  const { data } = useSuspenseQuery({
    queryKey: ["expiredMySolutions", page],
    queryFn: () =>
      getExpiredMyGroupSolutions({
        problemNumber,
        language,
        result,
        page,
        size: 3,
      }),
  });

  return { content: data.content, totalPages: data.totalPages };
};

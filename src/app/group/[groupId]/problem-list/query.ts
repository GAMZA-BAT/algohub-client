import {
  deleteProblem,
  getExpiredProblems,
  getInProgressProblems,
} from "@/api/problems";
import {
  postProblemAction,
  type problemActionRequest,
} from "@/app/group/[groupId]/problem-list/action";
import { useToast } from "@/common/hook/useToast";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const usePostProblemMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: ({ groupId, link, startDate, endDate }: problemActionRequest) =>
      postProblemAction({ groupId, link, startDate, endDate }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postProblem"],
      });
      showToast("문제가 정상적으로 등록되었어요.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 등록되지 않았어요.", "error");
    },
  });
};

export const useDeleteProblemMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (problemId: number) => deleteProblem(problemId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deleteProblem"],
      });
      showToast("문제가 삭제되었습니다.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 삭제되지 않았어요.", "error");
    },
  });
};

export const useInProgressProblemQuery = (groupId: number, page: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["inProgressProblem", groupId, page],
    queryFn: () => getInProgressProblems({ groupId, page, size: 3 }),
    staleTime: 0,
  });

  return { content: data.content, totalPages: data.totalPages };
};

export const useExpiredProblemQuery = (groupId: number, page: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["expiredProblem", groupId, page],
    queryFn: () => getExpiredProblems({ groupId, page, size: 3 }),
    staleTime: 0,
  });

  return { content: data.content, totalPages: data.totalPages };
};
